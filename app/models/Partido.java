package models;

import javax.persistence.Entity;

import com.google.gson.annotations.Expose;

import play.db.jpa.Model;

public class Partido extends Model{
	@Expose
	public String sigla;
}
