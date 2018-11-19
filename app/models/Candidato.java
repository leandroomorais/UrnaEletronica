package models;

import javax.persistence.Entity;

import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import play.db.jpa.Model;


@Entity
public class Candidato extends Model{
	
	public String nome;
	@OneToOne
	@JoinColumn(name="cargo_candidato")
	public Cargo cargo;
	@OneToOne
	@JoinColumn(name="partido_candidato")
	public Partido partido;
	@OneToOne
	@JoinColumn(name="numero_candidato")
	public Numero numero;
	public String url;
	public String vice;
	public String urlSuple1;
	public String urlSuple2;
	public String urlVice;
	 
	 
	 
}
