package controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;

import models.Candidato;
import models.CandidatoNaoExist;
import models.Cargo;
import models.Status;
import play.libs.WS;
import play.libs.WS.HttpResponse;
import play.mvc.Controller;

public class UrnaClient extends Controller{
	private static final Gson g = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().setPrettyPrinting().create();
	
	public static void main() {
		render();
	}
	
	public static void meuIp() {
		HttpResponse response = WS.url("http://meuip.com/api/meuip.php").get();
	}
	
	public static void enviarVoto(int numCandidato, int idCargo, String ipUrna, String voto) {
		Map paramentros = new HashMap<>();
		paramentros.put("numCandidato", numCandidato);
		paramentros.put("idCargo", idCargo);
		paramentros.put("ipUrna", ipUrna);
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/voto").setParameters(paramentros).post();
	}
	
	public static void pegarCandidato(long idSecao, int numero, long idCargo) {
		HttpResponse response = WS.url("http://tse.vps.leandrorego.com/api/getCandidato?idSecao="+idSecao+"&numero="+numero+"&idCargo="+idCargo).get();
		String teste = response.getString();
		renderJSON(teste);
		
	}
	
	public static void listarCargos(long idSecao) {
		HttpResponse response = WS.url("http://tse.vps.leandrorego.com/api/getCargos?idSecao="+idSecao).get();
		String teste = response.getString();
		renderJSON(teste);
	}
	
	public static void pegarStatusUrna() {
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/get-terminal").get();
		String teste = response.getString();
		renderJSON(teste);
	}
	
}
