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
	private static final Gson g = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().setPrettyPrinting().create();
	private static Random random = new Random();
	
	public static void main() {
		render();
	}
	
	public static void enviarIpUrna(String ipUrna) {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/receberIpUrna").setParameter("ipUrna", ipUrna).post();
		//HttpResponse response = WS.url("http://192.168.1.10:9002/receberIpUrna").setParameter("ipUrna", ipUrna).post();
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
		//HttpResponse response = WS.url("http://10.116.0.1:9000/finalizarVotacaoAtual").setParameter("status", status).post();
	}
	
	public static void enviarPedidoTempo() {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://service-terminal.herokuapp.com/tempoParaUrna").setParameter("codUrna", random.nextInt()).post();
		//HttpResponse response = WS.url("http://10.116.0.1:9000/tempoParaUrna").setParameter("codUrna", random.nextInt()).post();
	}
	
	public static void pegarStatusUrnaFinalizada(String ipUrna) {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/votacao-finalizada/"+ipUrna).get();
		//HttpResponse response = WS.url("http://192.168.1.10:9002/votacao-finalizada").get();
		String teste = response.getString();
		renderJSON(teste);
	}
	
	public static void pegarStatusUrnaCancelada(String ipUrna) {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/cancela-votacao/"+ipUrna).get();
		//HttpResponse response = WS.url("http://192.168.1.10:9002/cancela-votacao").get();
		String teste = response.getString();
		renderJSON(teste);
	}
	
	public static void enviarVoto(int numCandidato, int idCargo, String nome,  String voto, String tipo) {
		try {
			UrnaClient.response.accessControl("*");
			String ipUrna = InetAddress.getLocalHost().getHostAddress();
			Map paramentros = new HashMap<>();
			paramentros.put("numCandidato", numCandidato);
			paramentros.put("nome", nome);
			paramentros.put("idCargo", idCargo);
			paramentros.put("ipUrna", ipUrna);
			paramentros.put("voto", voto);
			paramentros.put("tipo", tipo);
			HttpResponse response = WS.url("https://urna-api.herokuapp.com/voto").setParameters(paramentros).post();
			//HttpResponse response = WS.url("http://192.168.1.10:9002/voto").setParameters(paramentros).post();
		} catch (Exception e) {
			// TODO: handle exception
		}
		
	}
	
	public static void urnaPediuTempo() {
		try {
			UrnaClient.response.accessControl("*");
			String ipUrna2 = InetAddress.getLocalHost().getHostAddress();
			Map paramentros = new HashMap<>();
			paramentros.put("status", "pediuTempo");
			paramentros.put("ipUrna", ipUrna2);
			HttpResponse response = WS.url("https://urna-api.herokuapp.com/api/terminal").setParameters(paramentros).post();
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
	
	public static void pegarStatusUrna(String ipUrna) {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/get-terminal/"+ipUrna).get();
		//HttpResponse response = WS.url("http://192.168.1.10:9002/get-terminal/"+ipUrna).get();
		String teste = response.getString();
		renderJSON(teste);
	}
	
	public static void buscaSecao(String ipUrna) {
		UrnaClient.response.accessControl("*");
		HttpResponse response = WS.url("https://urna-api.herokuapp.com/getSecao/"+ipUrna).get();
		//HttpResponse response = WS.url("http://192.168.1.10:9002/getSecao/"+ipUrna).get();
		String json = response.getString();
		renderJSON(json);
	}
	
	public static void ipUrna() {
		try {
			UrnaClient.response.accessControl("*");
			String ipUrna = InetAddress.getLocalHost().getHostAddress();
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
		try {
			UrnaClient.response.accessControl("*");
			String ipUrna = InetAddress.getLocalHost().getHostAddress();
			
			Map param = new HashMap<>();
			param.put("idSecao", idSecao);
			param.put("ipUrna", ipUrna);
			
			HttpResponse response = WS.url("http://tse.vps.leandrorego.com/api/setUrna").setParameters(param).post();
			
			/*if(response.success()){
				System.out.println("Deu certo para setUrna");
			}else{
				System.out.println("Erro para setUrna");
				//flash.error("Erro para setUrna");
			}*/
			System.out.println(response.getString());
			
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		
	}
}
