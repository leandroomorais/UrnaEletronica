package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import com.google.gson.annotations.Expose;

import play.db.jpa.Model;


@Entity
public class Candidato extends  Model{
	

	@Expose
	public String nome;
	
	@Expose
	@OneToOne
	@JoinColumn(name="cargo_candidato")
	public Cargo cargo;
	
	@Expose
	@OneToOne
	@JoinColumn(name="partido_candidato")
	public Partido partido;
	
	@Expose
	@OneToOne
	@JoinColumn(name="numero_candidato")
	public Numero numero;
	
	@ManyToMany
	@JoinTable(name="votos_ampurados")
	public List<Votacao> votoValidos;
	
}
