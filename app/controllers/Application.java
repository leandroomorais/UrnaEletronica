package controllers;

import java.util.List;

import com.google.gson.Gson;

import models.Candidato;
import models.CandidatoNaoExist;
import models.Cargo;
import models.Numero;
import models.Partido;
import play.mvc.Controller;
import uteis.CandidatoTRE;

public class Application extends Controller {
	private static final Gson g = new Gson();

    public static void index() {
        render();
    }
    
    public static void cadastro_candidato() {
    	List<Partido> partidos = Partido.findAll();
    	List<Cargo> cargos = Cargo.findAll();
    	List<Numero> numeros = Numero.findAll();
    	render(partidos, cargos, numeros);
    }
    
    public static void cadastro_cargo() {
    	render();
    }
    
    public static void cadastro_numero() {
    	render();
    }
    
    public static void cadastro_partido() {
    	render();
    }
    
    public static void addCandidato(Candidato candidato) {
    	candidato.save();
    }
    
    public static void addNumero(Numero numero) {
    	numero.save();
    }
    
    public static void addCargo(Cargo cargo) {
    	cargo.save();
    }
    
    public static void addPartido(Partido partido) {
    	partido.save();
    }
    
    public static void listCandidatos() {
    	List<CandidatoTRE> candidatos = CandidatoTRE.findAll();
    	String json = g.toJson(candidatos);
        renderJSON(json);
    }
    
    public static void pegarCandidato(int num) {
    	CandidatoNaoExist naoExist = new CandidatoNaoExist();
    	List<CandidatoTRE> candidatos = CandidatoTRE.findAll();
    	naoExist.string = "candidatoNaoExiste";
    	for(CandidatoTRE candidato : candidatos) {
    		if(candidato.numeroTRE.numero == num) {
    			String json = g.toJson(candidato);
    			renderJSON(json);
    		}
    	}
    	String j = g.toJson(naoExist);
    	renderJSON(j);
    }

}