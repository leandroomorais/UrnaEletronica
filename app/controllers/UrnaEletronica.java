package controllers;

 

import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import models.Candidato;
import models.Cargo;
import models.Numero;
import models.Partido;
import models.Votacao;
import play.mvc.Controller;

public class UrnaEletronica extends Controller{
	private static final Gson g = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().setPrettyPrinting().create();

	public static void main() {
		render();
	}
	
	public static void enviarVoto(String partido, String cargo, String numero, String nome){
		Votacao votacao = new Votacao();
		try {
			if(partido.equals("Voto Branco") && cargo.equals("Voto Branco") && numero.equals("Voto Branco") && nome.equals("Voto Branco")) {
				votacao.votoBranco = 1;
				votacao.save();
			}else if(partido.equals("Voto Nulo") && cargo.equals("Voto Nulo") && numero.equals("Voto Nulo") && nome.equals("Voto Nulo")) {
				votacao.votoNulo = 1;
				votacao.save();
			}else {
				Partido partido2 = new Partido();
				partido2.sigla = partido;
				partido2.save();
				
				Cargo cargo2 = new Cargo();
				cargo2.cargo = cargo;
				cargo2.save();
				
				Numero numero2 = new Numero();
				numero2.numero = Integer.parseInt(numero);
				numero2.save();
				
				votacao.votoValido = 1;
				
				votacao.save();
				
				Candidato candidato = new Candidato();
				candidato.nome = nome;
				candidato.cargo = cargo2;
				candidato.numero = numero2;
				candidato.partido = partido2;
				List<Votacao> votosValidos = new ArrayList<>();
				votosValidos.add(votacao);
				candidato.votoValidos = votosValidos;
				candidato.save();
			}
		} catch (Exception e) {
			System.out.println("Erro: "+e);
		}
	}
	
	public static void listaVotacao(){
		try {
			List<Votacao> votos = Votacao.findAll();
			String json = g.toJson(votos);
			renderJSON(json);
		} catch (Exception e) {
		}
	}
	
	 
}
