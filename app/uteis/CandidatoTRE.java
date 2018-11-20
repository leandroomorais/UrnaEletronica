package uteis;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import play.db.jpa.Model;


@Entity
public class CandidatoTRE extends Model{
	
	public String nome;
	@OneToOne
	@JoinColumn(name="cargo_candidato")
	public CargoTRE cargoTRE;
	@OneToOne
	@JoinColumn(name="partido_candidato")
	public PartidoTRE partidoTRE;
	@OneToOne
	@JoinColumn(name="numero_candidato")
	public NumeroTRE numeroTRE;
	
	public String url;
	public String vice;
	public String urlSuple1;
	public String urlSuple2;
	public String urlVice;
	 
	 
	 
}
