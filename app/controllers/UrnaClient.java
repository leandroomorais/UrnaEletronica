package controllers;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;

import models.IpUrna;
import play.libs.WS;
import play.libs.WS.HttpResponse;
import play.mvc.Controller;

public class UrnaClient extends Controller{
	private static String ipUrna = "";
	private static final Gson g = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().setPrettyPrinting().create();
	private static Random random = new Random();
	
	public static void main() {
		render();
	}
	
	public static void enviarIpUrna(String ipUrna) {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/receberIpUrna").setParameter("ipUrna", ipUrna).post();
		//HttpResponse response = WS.url("http://localhost:9002/receberIpUrna").setParameter("ipUrna", ipUrna).post();
		if(response.success()) {
			String teste = response.getString();
			renderJSON(teste);
		}else {
			String teste = response.getString();
			renderJSON(teste);
		}
	}
	
	public static void informaVotacaoFinalizada(String status) {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://service-terminal.herokuapp.com/finalizarVotacaoAtual").setParameter("status", status).post();
	}
	
	public static void enviarPedidoTempo() {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://service-terminal.herokuapp.com/tempoParaUrna").setParameter("codUrna", random.nextLong()).post();
	}
	
	public static void pegarStatusUrnaFinalizada() {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/votacao-finalizada").get();
		//HttpResponse response = WS.url("http://localhost:9002/votacao-finalizada").get();
		String teste = response.getString();
		renderJSON(teste);
	}
	
	public static void pegarStatusUrnaCancelada() {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/cancela-votacao").get();
		//HttpResponse response = WS.url("http://localhost:9002/cancela-votacao").get();
		String teste = response.getString();
		renderJSON(teste);
	}
	
	public static void enviarVoto(int numCandidato, int idCargo, String nome,  String voto) {
		try {
			UrnaClient.response.accessControl("*");
			//ipUrna = InetAddress.getLocalHost().getHostAddress();
			Map paramentros = new HashMap<>();
			paramentros.put("numCandidato", numCandidato);
			paramentros.put("nome", nome);
			paramentros.put("idCargo", idCargo);
			paramentros.put("ipUrna", ipUrna);
			paramentros.put("voto", voto);
			HttpResponse response = WS.url("https://urna-api.herokuapp.com/voto").setParameters(paramentros).post();
			//HttpResponse response = WS.url("http://localhost:9002/voto").setParameters(paramentros).post();
		} catch (Exception e) {
			// TODO: handle exception
		}
		
	}
	
	public static void pegarCandidato(long idSecao, int numero, long idCargo) {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("http://tse.vps.leandrorego.com/api/getCandidato?idSecao="+idSecao+"&numero="+numero+"&idCargo="+idCargo).get();
		String teste = response.getString();
		renderJSON(teste);
	}
	
	public static void listarCargos(String idSecao) {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("http://tse.vps.leandrorego.com/api/getCargos?idSecao="+idSecao).get();
		String teste = response.getString();
		renderJSON(teste);
	}
	
	public static void pegarStatusUrna() {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/get-terminal").get();
		//HttpResponse response = WS.url("http://localhost:9002/get-terminal").get();
		String teste = response.getString();
		renderJSON(teste);
	}
	
	public static void buscaSecao(String ipUrna) {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/getSecao/"+ipUrna).get();
		//HttpResponse response = WS.url("http://localhost:9002/getSecao/"+ipUrna).get();
		String json = response.getString();
		renderJSON(json);
	}
	
	public static void ipUrna() {
		try {
			UrnaClient.response.accessControl("*");
			ipUrna = InetAddress.getLocalHost().getHostAddress();
			IpUrna ipUrna2 = new IpUrna();
			ipUrna2.ipUrna = ipUrna;
			ipUrna2.save();
			String json = g.toJson(ipUrna2);
			renderJSON(json);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	public static void setUrna(long idSecao){
		UrnaClient.response.accessControl("*");
		//String ipUrna = InetAddress.getLocalHost().getHostAddress();
		
		Map param = new HashMap<>();
		param.put("idSecao", idSecao);
		param.put("ipUrna", ipUrna);
		
		HttpResponse response = WS.url("http://tse.vps.leandrorego.com/api/setUrna")
				.setParameters(param).post();
		
		if(response.success()){
			
		}else{
			flash.error("Erro para setUrna");
		}
		
	}
}
