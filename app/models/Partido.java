package models;

import javax.persistence.Entity;

import play.db.jpa.Model;

@Entity
public class Partido extends Model{
	public String sigla;
}
