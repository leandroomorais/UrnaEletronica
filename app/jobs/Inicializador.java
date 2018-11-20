package jobs;

import models.Candidato;
import play.jobs.Job;
import play.jobs.OnApplicationStart;
import uteis.CandidatoTRE;
import uteis.CargoTRE;
import uteis.NumeroTRE;
import uteis.PartidoTRE;

@OnApplicationStart
public class Inicializador extends Job {
	
	public void doJob() throws Exception{
		if(Candidato.count() == 0){
			CargoTRE cargo = new CargoTRE();
			cargo.cargo = "Prefeito";
			cargo.save();
			CargoTRE cargo2 = new CargoTRE();
			cargo2.cargo = "Presidente";
			cargo2.save();
			CargoTRE cargo3 = new CargoTRE();
			cargo3.cargo = "Governador";
			cargo3.save();
			CargoTRE cargo4 = new CargoTRE();
			cargo4.cargo = "Deputado Federal";
			cargo4.save();
			CargoTRE cargo5 = new CargoTRE();
			cargo5.cargo = "Deputado Estadual";
			cargo5.save();
			CargoTRE cargo6 = new CargoTRE();
			cargo6.cargo = "Vereador";
			cargo6.save();
			CargoTRE cargo7 = new CargoTRE();
			cargo7.cargo = "Senador 1";
			cargo7.save();
			
			PartidoTRE partido = new PartidoTRE();
			partido.sigla = "PT";
			partido.save();
			PartidoTRE partido2 = new PartidoTRE();
			partido2.sigla = "PSV";
			partido2.save();
			PartidoTRE partido3 = new PartidoTRE();
			partido3.sigla = "PP";
			partido3.save();
			PartidoTRE partido4 = new PartidoTRE();
			partido4.sigla = "PSL";
			partido4.save();
			PartidoTRE partido5 = new PartidoTRE();
			partido5.sigla = "DEM";
			partido5.save();
			
			NumeroTRE numero = new NumeroTRE();
			numero.numero = 14;
			numero.save();
			NumeroTRE numero2 = new NumeroTRE();
			numero2.numero = 16;
			numero2.save();
			NumeroTRE numero3 = new NumeroTRE();
			numero3.numero = 125;
			numero3.save();
			NumeroTRE numero4 = new NumeroTRE();
			numero4.numero = 25;
			numero4.save();
			NumeroTRE numero5 = new NumeroTRE();
			numero5.numero = 450;
			numero5.save();
			
			CandidatoTRE candidato = new CandidatoTRE();
			candidato.cargoTRE = cargo;
			candidato.nome = "Antonio";
			candidato.numeroTRE = numero;
			candidato.partidoTRE = partido;
			candidato.url = "https://pbs.twimg.com/profile_images/1056865819530063872/ZnHn4dgf_400x400.jpg";
			candidato.save();
			
			CandidatoTRE candidato2 = new CandidatoTRE();
			candidato2.cargoTRE = cargo2;
			candidato2.nome = "Joao";
			candidato2.numeroTRE = numero2;
			candidato2.partidoTRE = partido2;
			candidato2.url = "https://pbs.twimg.com/profile_images/1056865819530063872/ZnHn4dgf_400x400.jpg";
			candidato2.save();
			
			CandidatoTRE candidato3 = new CandidatoTRE();
			candidato3.cargoTRE = cargo3;
			candidato3.numeroTRE = numero3;
			candidato3.partidoTRE = partido3;
			candidato3.nome = "Maria";
			candidato3.url = "https://pbs.twimg.com/profile_images/1056865819530063872/ZnHn4dgf_400x400.jpg";
			candidato3.save();
			
			CandidatoTRE candidato4 = new CandidatoTRE();
			candidato4.cargoTRE = cargo3;
			candidato4.nome = "Jose";
			candidato4.partidoTRE = partido4;
			candidato4.numeroTRE = numero4;
			candidato4.url = "https://pbs.twimg.com/profile_images/1056865819530063872/ZnHn4dgf_400x400.jpg";
			candidato4.vice = "Mario";
			candidato4.urlVice = "https://http2.mlstatic.com/santinhos-politicos-vetorizados-logos-politicas-por-download-D_NQ_NP_244221-MLB20727018254_052016-F.jpg";
			candidato4.save();
			
			CandidatoTRE candidato5 = new CandidatoTRE();
			candidato5.cargoTRE = cargo7;
			candidato5.partidoTRE = partido5;
			candidato5.numeroTRE = numero5;
			candidato5.nome = "Paulo";
			candidato5.url = "https://pbs.twimg.com/profile_images/1056865819530063872/ZnHn4dgf_400x400.jpg";
			candidato5.urlSuple1 = "http://4.bp.blogspot.com/-_YZer3VXlDA/UAVMXKNWS3I/AAAAAAAACqU/v7ea36zt2i0/s1600/santinho_vereador.jpg";
			candidato5.urlSuple2 = "http://www.creatordesign.com.br/images/Santinho_Leudo_Colinha_2008.jpg";
			candidato5.save();
			
		}	
		
	}

}
