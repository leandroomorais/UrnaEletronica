package controllers;

 

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;

import models.Candidato;
import models.CandidatoNaoExist;
import models.Cargo;
import models.Partido;
import models.Status;
import models.Votacao;
import play.libs.WS;
import play.libs.WS.HttpResponse;
import play.mvc.Controller;

public class UrnaEletronica extends Controller{
	private static boolean votoValido = false;
	private static boolean votoNulo = false;
	private static boolean votoBranco = false;
	private static final Gson g = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().setPrettyPrinting().create();

	public static void main() {
		render();
	}
	
	public static void pegarCandidato(int num) {
		HttpResponse response = WS.url("http://localhost:9090/pegarCandidato/"+num).get();
		if(response.success()) {
			JsonElement json = response.getJson();
			Candidato candidato = g.fromJson(json, Candidato.class);
            renderJSON(candidato);
		}else {
			CandidatoNaoExist candidatoNaoExist = new CandidatoNaoExist();
			candidatoNaoExist.string = "candidatoNaoExiste";
			renderJSON(candidatoNaoExist);
		}
	}
	
	public static void enviarVoto(String partido, String cargo, int numero, String nome){
		Votacao votacao = new Votacao();
		if(partido.equals("Voto Branco") && cargo.equals("Voto Branco") && numero == -1 && nome.equals("Voto Branco")) {
			votacao.votoBranco = 1;
			votoBranco = true;
			votacao.save();
		}else if(partido.equals("Voto Nulo") && cargo.equals("Voto Nulo") && numero == -2 && nome.equals("Voto Nulo")) {
			votacao.votoNulo = 1;
			votoNulo = true;
			votacao.save();
		}else {
			Partido partido2 = new Partido();
			partido2.sigla = partido;
			partido2.save();
			
			Cargo cargo2 = new Cargo();
			cargo2.cargo = cargo;
			cargo2.save();
	 
			votoValido = true;
			votacao.votoValido = 1;
			
			votacao.save();
			
			Candidato candidato = new Candidato();
			candidato.nome = nome;
			candidato.cargo = cargo2;
			candidato.numero = numero;
			candidato.partido = partido2;
			List<Votacao> votosValidos = new ArrayList<>();
			votosValidos.add(votacao);
			candidato.votoValidos = votosValidos;
			candidato.save();
		}
		if(votoValido) {
			Map paramentros = new HashMap<>();
			paramentros.put("partido", partido);
			paramentros.put("cargo", cargo);
			paramentros.put("numero", numero);
			paramentros.put("nome", nome);
			paramentros.put("voto", votacao.votoValido);
			HttpResponse response = WS.url("http://localhost:9090/receberVotos").setParameters(paramentros).post();
			votoValido = false;
		}else if(votoBranco) {
			Map paramentros = new HashMap<>();
			paramentros.put("partido", partido);
			paramentros.put("cargo", cargo);
			paramentros.put("numero", numero);
			paramentros.put("nome", nome);
			paramentros.put("voto", -1);
			HttpResponse response = WS.url("http://localhost:9090/receberVotos").setParameters(paramentros).post();
			votoBranco = false;
		}else if(votoNulo) {
			Map paramentros = new HashMap<>();
			paramentros.put("partido", partido);
			paramentros.put("cargo", cargo);
			paramentros.put("numero", numero);
			paramentros.put("nome", nome);
			paramentros.put("voto", -2);
			HttpResponse response = WS.url("http://localhost:9090/receberVotos").setParameters(paramentros).post();
			votoNulo = false;
		}
	}
	
	public static void setTerminal(String status) {
		if(isEmptyStatus()) {
			Status status3 = new Status();
			status3.status = status;
			status3.save();
		}else {
			long id = 1;
			Status status2 = Status.findById(id);
			status2.status = status;
			status2.save();
			ok();
		}
	}
	
	private static boolean isEmptyStatus() {
		List<Status> status = Status.findAll();
		if(status.isEmpty()) {
			return true;
		}
		return false;
	}
	
	public static void getTerminal() {
		long id = 1;
		Status status = Status.findById(id);
		String json = g.toJson(status);
		renderJSON(json);
	}
	
}
