package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;

import models.Candidato;
import models.CandidatoNaoExist;
import models.Status;
import play.libs.WS;
import play.libs.WS.HttpResponse;
import play.mvc.Controller;

public class UrnaClient extends Controller{
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
	
	public static void pegarTerminal() {
		HttpResponse response = WS.url("http://localhost:9002/getTerminal").get();
		JsonElement json = response.getJson();
		Status status = g.fromJson(json, Status.class);
        renderJSON(status);
	}
 
}
