package jobs;

import java.util.Date;

import models.Candidato;
import models.Cargo;
import models.Numero;
import models.Partido;
import play.jobs.Job;
import play.jobs.OnApplicationStart;

@OnApplicationStart
public class Inicializador extends Job {
	
	public void doJob() throws Exception{
		if(Candidato.count() == 0){
			Cargo cargo = new Cargo();
			cargo.cargo = "Prefeito";
			cargo.save();
			Cargo cargo2 = new Cargo();
			cargo2.cargo = "Presidente";
			cargo2.save();
			Cargo cargo3 = new Cargo();
			cargo3.cargo = "Governador";
			cargo3.save();
			Cargo cargo4 = new Cargo();
			cargo4.cargo = "Deputado Federal";
			cargo4.save();
			Cargo cargo5 = new Cargo();
			cargo5.cargo = "Deputado Estadual";
			cargo5.save();
			Cargo cargo6 = new Cargo();
			cargo6.cargo = "Vereador";
			cargo6.save();
			Cargo cargo7 = new Cargo();
			cargo7.cargo = "Senador 1";
			cargo7.save();
			
			Partido partido = new Partido();
			partido.sigla = "PT";
			partido.save();
			Partido partido2 = new Partido();
			partido2.sigla = "PSV";
			partido2.save();
			Partido partido3 = new Partido();
			partido3.sigla = "PP";
			partido3.save();
			Partido partido4 = new Partido();
			partido4.sigla = "PSL";
			partido4.save();
			Partido partido5 = new Partido();
			partido5.sigla = "DEM";
			partido5.save();
			
			Numero numero = new Numero();
			numero.numero = 14;
			numero.save();
			Numero numero2 = new Numero();
			numero2.numero = 16;
			numero2.save();
			Numero numero3 = new Numero();
			numero3.numero = 125;
			numero3.save();
			Numero numero4 = new Numero();
			numero4.numero = 25;
			numero4.save();
			Numero numero5 = new Numero();
			numero5.numero = 450;
			numero5.save();
			
			Candidato candidato = new Candidato();
			candidato.cargo = cargo;
			candidato.nome = "Antonio";
			candidato.numero = numero;
			candidato.partido = partido;
			candidato.url = "https://pbs.twimg.com/profile_images/1056865819530063872/ZnHn4dgf_400x400.jpg";
			candidato.save();
			
			Candidato candidato2 = new Candidato();
			candidato2.cargo = cargo2;
			candidato2.nome = "Joao";
			candidato2.numero = numero2;
			candidato2.partido = partido2;
			candidato2.url = "https://pbs.twimg.com/profile_images/1056865819530063872/ZnHn4dgf_400x400.jpg";
			candidato2.save();
			
			Candidato candidato3 = new Candidato();
			candidato3.cargo = cargo3;
			candidato3.numero = numero3;
			candidato3.partido = partido3;
			candidato3.nome = "Maria";
			candidato3.url = "https://pbs.twimg.com/profile_images/1056865819530063872/ZnHn4dgf_400x400.jpg";
			candidato3.save();
			
			Candidato candidato4 = new Candidato();
			candidato4.cargo = cargo3;
			candidato4.nome = "Jose";
			candidato4.partido = partido4;
			candidato4.numero = numero4;
			candidato4.url = "https://pbs.twimg.com/profile_images/1056865819530063872/ZnHn4dgf_400x400.jpg";
			candidato4.vice = "Mario";
			candidato4.urlVice = "https://http2.mlstatic.com/santinhos-politicos-vetorizados-logos-politicas-por-download-D_NQ_NP_244221-MLB20727018254_052016-F.jpg";
			candidato4.save();
			
			Candidato candidato5 = new Candidato();
			candidato5.cargo = cargo7;
			candidato5.partido = partido5;
			candidato5.numero = numero5;
			candidato5.nome = "Paulo";
			candidato5.url = "https://pbs.twimg.com/profile_images/1056865819530063872/ZnHn4dgf_400x400.jpg";
			candidato5.urlSuple1 = "http://4.bp.blogspot.com/-_YZer3VXlDA/UAVMXKNWS3I/AAAAAAAACqU/v7ea36zt2i0/s1600/santinho_vereador.jpg";
			candidato5.urlSuple2 = "http://www.creatordesign.com.br/images/Santinho_Leudo_Colinha_2008.jpg";
			candidato5.save();
			
		}	
		
	}

}
