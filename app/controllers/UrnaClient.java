package controllers;

import java.util.List;

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
