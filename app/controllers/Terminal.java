package controllers;

import com.google.gson.Gson;

import play.mvc.Controller;

public class Terminal extends Controller{
	private static Gson g = new Gson();
	
	public static void liberarUrna() {
		models.Terminal status = new models.Terminal("liberada");
		String json = g.toJson(status);
        renderJSON(json);
	}
}
