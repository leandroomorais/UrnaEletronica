var j = 0;
var k = 0;
var s = 0;
var id = 0;
var idSecao = "";
var incremento = 1;
var evento = 0;
var prox = 1;
var ant = 1;
var num = "";
var cargo = "";
var cargoSenador = false;
var preencheu = false;
var preencheuBool = false;
var controlador = 0;
var controladorAUX = 0;
var senador = 1;
var votoValido = false;
var votoNull = false;
var votouBranco = false;
var encerrarVotacao = false;
var partido = "";
var numero = "";
var	Cargo = "";
var nome = "";
var enviouSecao = false;
var iniciarVotacao = false;
var terminalTravouUrna = true;
var terminalLiberouUrna = true;
var terminalCancelouVotacao = true;
var terminalFinalizouVotacao = true;
var botaoCorrige = false;
var botaoConfirmar = false;
var bloquearBotoes = false;
var iniciarUrna = true;
var botaoBanco = false;
var arrayCargos = [];
var arrayNumeros = [];
var ipUrna = "";
var segundos = 0;
var minutos = 0;
var enviarVotosCancelados = true;
var arrayCargosPossiveis = [];
var controleCargos = 0;
var teste = "";
var telaExist = false;
var telaIpSecao = false;
var secaoEnviada = false;
var enviarSecaoTSE = false;
var numeroSenadorAtual = -1;
var eleicao5Cargos = false;

function ComponentsTelaBranco(cargo){
	try{
		document.getElementById('teste').innerHTML = "";
		var tbody = document.getElementById('body-tela');
		var trLinha1 = document.createElement('tr');
		var trLinha2 = document.createElement('tr');
		var trLinha3 = document.createElement('tr');
		var trLinha4 = document.createElement('tr');

		var tdColunaSeuVoto = document.createElement('td');
		var tdColunaCargo = document.createElement('td');
		var tdColunaInstrucao = document.createElement('td');
		var tdColunaConfirma = document.createElement('td');
		var tdColunaCorrige = document.createElement('td');
		var tdColunaVotoBranco = document.createElement('td');

		var pSeuVoto = document.createElement('p');
		var pCargo = document.createElement('p');
		var pVotoBranco = document.createElement('p');
		var pTecla = document.createElement('p');
		var pConfirma = document.createElement('p');
		var pCorrige = document.createElement('p');

		pSeuVoto.textContent = "Seu voto para";
		pCargo.textContent = cargo;
		pVotoBranco.textContent = "Voto em Branco";
		pTecla.textContent = "Aperte a Tecla";
		pConfirma.textContent = "VERDE: para CONFIRMAR";
		pCorrige.textContent = "LARANJA: para CORRIGIR";

		tdColunaSeuVoto.appendChild(pSeuVoto);
		trLinha1.appendChild(tdColunaSeuVoto);

		tdColunaCargo.appendChild(pCargo);
		trLinha1.appendChild(tdColunaCargo);

		tdColunaVotoBranco.appendChild(pVotoBranco);
		trLinha1.appendChild(tdColunaVotoBranco);

		tdColunaInstrucao.appendChild(pTecla);
		trLinha2.appendChild(tdColunaInstrucao);

		tdColunaConfirma.appendChild(pConfirma);
		trLinha2.appendChild(tdColunaConfirma);

		tdColunaCorrige.appendChild(pCorrige);
		trLinha2.appendChild(tdColunaCorrige);

		tbody.appendChild(trLinha1);
		tbody.appendChild(trLinha2);
	}catch(erro){
		alert("Erro: "+erro);
	}
}

function ComponentsTelaFim(){
	try{
		document.getElementById('teste').innerHTML = "";
		var tbody = document.getElementById('body-tela');
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		td.textContent = "FIM";

		td.setAttribute('id', 'cargo');

		tr.appendChild(td);
		tbody.appendChild(tr);
	}catch(erro){
		alert("Erro: "+erro);
	}
}

function candidatoNaoEncontrado(cargo){
	var tbody = document.getElementById('body-tela');
	var form = document.getElementById("form");
	clearTelas();
	var trLinha1 = document.createElement('tr');
	var trLinha2 = document.createElement('tr');
	var trLinha3 = document.createElement('tr');
	var trLinha4 = document.createElement('tr');
	var tdColunaSeuVoto = document.createElement('td');
	var tdColunaCargo = document.createElement('td');
	var tdColunaNumeroErrado = document.createElement('td');
	var tdColunaVotoNulo = document.createElement('td');
	var tdColunaForm = document.createElement('td');
	var pSeuVoto = document.createElement('p');
	var pCargo = document.createElement('p');
	var pNumeroErrado = document.createElement('p');
	var pVotoNulo = document.createElement('p');

	pSeuVoto.textContent = "Seu voto para";
	pCargo.textContent = cargo;
	pNumeroErrado.textContent = "Número errado";
	pVotoNulo.textContent = "Voto Nulo";
	tdColunaSeuVoto.appendChild(pSeuVoto);
	tdColunaCargo.appendChild(pCargo);
	tdColunaForm.appendChild(form);
	tdColunaNumeroErrado.appendChild(pNumeroErrado);
	tdColunaVotoNulo.appendChild(pVotoNulo);
	trLinha1.appendChild(tdColunaSeuVoto);
	trLinha1.appendChild(tdColunaCargo);
	trLinha2.appendChild(tdColunaNumeroErrado);
	trLinha2.appendChild(tdColunaForm);
	trLinha3.appendChild(tdColunaVotoNulo);
	tbody.appendChild(trLinha1);
	tbody.appendChild(trLinha2);
	tbody.appendChild(trLinha3);
}

function passarValores(dados){
	try {
		var arrayCargos = localStorage.getItem("arrayCargos");
		arrayCargos = JSON.parse(arrayCargos);
		var tbody = document.getElementById('body-tela');
		var form = document.getElementById("form");
		clearTelas();
		var trLinha1 = document.createElement('tr');
		var trLinha2 = document.createElement('tr');
		var trLinha3 = document.createElement('tr');
		var trLinha4 = document.createElement('tr');
		var trLinha5 = document.createElement('tr');
		var trLinha6 = document.createElement('tr');

		var tdColunaForm = document.createElement('td');
		var tdColunaSeuVoto = document.createElement('td');
		var tdColunaCargo = document.createElement('td');
		var tdColunaNome = document.createElement('td');
		var tdColunaPartido = document.createElement('td');
		var tdColunaFoto = document.createElement('td');
		var tdColunaReferencsNome = document.createElement('td');
		var tdColunaReferencsPartido = document.createElement('td');
		var tdColunaInstrucao = document.createElement('td');
		var tdColunaConfirma = document.createElement('td');
		var tdColunaCorrige = document.createElement('td');
		var tdColunaSuple1 = document.createElement('td');
		var tdColunaSuple2 = document.createElement('td');
		var tdColunaReferencsVice = document.createElement('td');
		var tdColunaViceNome = document.createElement('td');
		var tdColunaImgVice = document.createElement('td');
		var tdColunaNumero = document.createElement('td');

		var pSeuVoto = document.createElement('p');
		var pCargo = document.createElement('p');
		var pNome = document.createElement('p');
		var pPartido = document.createElement('p');
		var pTecla = document.createElement('p');
		var pConfirma = document.createElement('p');
		var pCorrige = document.createElement('p');
		var pViceNome = document.createElement('p');
		var pNumero = document.createElement('p');

		var img = document.createElement('img');
		var imgSuple1 = document.createElement('img');
		var imgSuple2 = document.createElement('img');
		var imgVice = document.createElement('img');

		tdColunaReferencsNome.textContent = "Nome ";
		tdColunaReferencsPartido.textContent = "Partido ";
		var id = dados.idCargo;
		var idCandidato = dados.id;
		var cargoTxt = "";
		var imgURl = "";
		var cargo = function(id){
			for(var i = 0;i<arrayCargos.length;i++){
				if(arrayCargos[i].id == id){
					cargoTxt = arrayCargos[i].nome;
					return cargoTxt;
				}
			}
		}
		
		var fotos = function(idCandidato){
			var arrayNumeros = localStorage.getItem("arrayNumeros");
			arrayNumeros = JSON.parse(arrayNumeros);
			for(var i = 0;i<arrayNumeros.length;i++){
				if(arrayNumeros[i].id == idCandidato){
					imgURl = arrayNumeros[i].url;
					return imgURl;
				}
			}
		}
		pSeuVoto.textContent = "Seu voto para";
		pCargo.innerHTML = cargo(id);
		pNome.textContent = dados.nome;
		pNome.setAttribute('class', 'font-text');
		//pPartido.textContent = "";
		pTecla.textContent = "Aperte a Tecla";
		pConfirma.textContent = "VERDE: para CONFIRMAR";
		pCorrige.textContent = "LARANJA: para CORRIGIR";
		pNumero.textContent = "Número ";
		img.src = fotos(idCandidato);
		img.setAttribute('width', '75px');
		img.setAttribute('height', '100px');
		/*if(dados.cargo.cargo == "Senador 1" || dados.cargo.cargo == "Senador 2"){
			if(dados.urlSuple1.length > 0 && dados.urlSuple2.length > 0){
				imgSuple1.src = dados.urlSuple1;
				imgSuple1.setAttribute('width', '100px');
				imgSuple1.setAttribute('height', '100px');
				imgSuple2.src = dados.urlSuple2;
				imgSuple2.setAttribute('width', '100px');
				imgSuple2.setAttribute('height', '100px');

				tdColunaSuple1.appendChild(imgSuple1);
				tdColunaSuple2.appendChild(imgSuple2);
			}
		}else*/ 
		if(cargo(id) == "Presidente" || cargo(id) == "Governador" || cargo(id) == "Senador"){
			pViceNome.textContent = dados.vice;
			/*imgVice.src = dados.url;
			imgVice.setAttribute('width', '90px');
			imgVice.setAttribute('height', '90px');*/

			tdColunaReferencsVice.textContent = "Vice candidato";
			tdColunaReferencsVice.setAttribute('class', 'font-text');
			tdColunaViceNome.appendChild(pViceNome);
			//tdColunaImgVice.appendChild(imgVice);
		}
		tdColunaReferencsNome.setAttribute('class', 'font-text');
		tdColunaReferencsPartido.setAttribute('class', 'font-text');
		trLinha1.appendChild(tdColunaSeuVoto);
		trLinha3.appendChild(tdColunaReferencsNome);
		//trLinha4.appendChild(tdColunaReferencsPartido);
		tdColunaForm.setAttribute("colspan", 5);

		tdColunaForm.appendChild(form);
		tdColunaSeuVoto.appendChild(pSeuVoto);
		tdColunaNumero.appendChild(pNumero);
		tdColunaCargo.appendChild(pCargo);
		tdColunaNome.appendChild(pNome);
		//tdColunaPartido.appendChild(pPartido);
		tdColunaFoto.appendChild(img);
		tdColunaInstrucao.appendChild(pTecla);
		tdColunaConfirma.appendChild(pConfirma);
		tdColunaCorrige.appendChild(pCorrige);

		trLinha1.appendChild(tdColunaSeuVoto);
		trLinha1.appendChild(tdColunaCargo);


		trLinha3.appendChild(tdColunaNome);
		trLinha2.appendChild(tdColunaNumero);
		trLinha2.appendChild(tdColunaForm);
		//trLinha4.appendChild(tdColunaPartido);
		trLinha1.appendChild(tdColunaFoto);

		//trLinha3.appendChild(tdColunaSuple1);
		//trLinha3.appendChild(tdColunaSuple2);
		//trLinha3.appendChild(tdColunaImgVice);

		trLinha3.appendChild(tdColunaReferencsVice);
		trLinha3.appendChild(tdColunaViceNome);

		trLinha5.appendChild(tdColunaInstrucao);
		trLinha5.appendChild(tdColunaConfirma);
		trLinha5.appendChild(tdColunaCorrige);



		tbody.appendChild(trLinha1);
		tbody.appendChild(trLinha2);
		tbody.appendChild(trLinha3);
		tbody.appendChild(trLinha5);
	} catch (e) {
		alert("Erro: "+e);
	}

}

function criarComponentsTelaDinamica(cargo, numero){
	try {
	document.getElementById('teste').innerHTML = "";
	if(numero == 0){
		var tbody = document.getElementById('body-tela');
		var trLinha1 = document.createElement('tr');
		var trLinha2 = document.createElement('tr');
		var td = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		td.textContent = cargo;
		td.setAttribute('id', 'cargo');
		trLinha1.appendChild(td);
		tbody.appendChild(trLinha1);
	}else{
		if(numero !== undefined){
			var n = numero.toString();

		var tbody = document.getElementById('body-tela');
		var trLinha1 = document.createElement('tr');
		var trLinha2 = document.createElement('tr');
		var td = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		td.textContent = cargo;
		td.setAttribute('id', 'cargo');
		var form = document.createElement('form');
		var input2 = document.createElement('input');
		form.setAttribute('name', 'f1');
		form.setAttribute('id', 'form');
		form.setAttribute('method', 'post');
		for(var i = 1;i<=n.length;i++){
			if(i > 1){
				var input = document.createElement('input');
				input.setAttribute('name', "campo"+i);
				input.setAttribute('class', "campo-text");
				input.setAttribute('id', 'num'+i);
				input.setAttribute('type', "text");
				input.setAttribute('onkeyUp',"javascript:passarProx(campo"+i+",campo"+ant+")");
				ant = i-1;
			}else if(i == 1){
				var input = document.createElement('input');
				input.setAttribute('name', "campo"+i);
				input.setAttribute('class', "campo-text");
				input.setAttribute('id', 'num'+i);
				input.setAttribute('type', "text");
				input.setAttribute('onkeyUp',"javascript:passarProx(campo"+i+",campo"+(i+1)+")");
			}
			form.appendChild(input);
		}
		input2.setAttribute('type', 'hidden');
		input2.setAttribute('name', 'numero');
		input2.setAttribute('class', "campo-text");
		input2.setAttribute('id', 'num');
		form.appendChild(input2);

		trLinha1.appendChild(td);
		td2.appendChild(form);
		trLinha2.appendChild(td2);
		tbody.appendChild(trLinha1);
		tbody.appendChild(trLinha2);
		}
	}

	} catch (e) {
		alert("Erro: t "+e);
	}

}

function clearTelas(){
	document.getElementById('body-tela').innerHTML = "";
}

function telaTerminal(){
	document.getElementById('teste').innerHTML = "Aguardando o terminal para a Votação";
}

function telaTerminalFinalizaVotacao(){
	document.getElementById('teste').innerHTML = "Terminal finalizou a Votação";
}

function telaTerminalCancelouVotacao(){
	document.getElementById('teste').innerHTML = "Terminal cancelou a Votação";
}

function telaErro(){
	document.getElementById('teste').innerHTML = "Ip da urna não está vinculado a seção";
}

function telaIpExist(){
	document.getElementById('teste').innerHTML = "Ip da urna já está vinculado, tente outra máquina";
}
function telaFim(){
	try{
		ComponentsTelaFim();
	}catch(erro){
		alert("Erro: "+erro);
	}
}

function telaBranco(cargo){
	try {
		ComponentsTelaBranco(cargo);
	} catch (erro) {
		alert("Erro: "+erro);
	}
}

$(document).ready(function(){
	var portClient = "9080";
	var servico = "";
	 
	var servicoUrnaFinalizada = "http://localhost:"+portClient+"/pegarStatusUrnaFinalizada";
	var servicoUrnaCancelada = "http://localhost:"+portClient+"/pegarStatusUrnaCancelada";
	//var servicoUrnaIp = "https://urna-eletronica.herokuapp.com/ipUrna";

	/*$.getJSON("https://urna-eletronica.herokuapp.com/ipUrna").done(ipUrna);
	$.getJSON("https://urna-eletronica.herokuapp.com/buscaSecao/"+localStorage.getItem("ipUrna")).done(pegarSecao);
	$.getJSON("https://urna-eletronica.herokuapp.com/listarCargos/"+localStorage.getItem("idSecao")).done(function(cargos){*/
		$.getJSON("http://localhost:"+portClient+"/ipUrna").done(ipUrna);
			setInterval(function () {
				$.getJSON("http://localhost:9080/buscaSecao/"+localStorage.getItem("ipUrna")).done(pegarSecao);
			}, 1000);
		$.getJSON("http://localhost:9080/listarCargos/"+localStorage.getItem("idSecao")).done(function(cargos){
		try {
			var teste = 0;
			arrayCargosPossiveis.push("Deputado Federal");
			arrayCargosPossiveis.push("Deputado Estadual");
			arrayCargosPossiveis.push("Senador");
			arrayCargosPossiveis.push("Governador");
			arrayCargosPossiveis.push("Presidente");
			arrayCargosPossiveis.push("Prefeito");
			arrayCargosPossiveis.push("Vereador");

			for (var i = 0; i < cargos.length; i++) {
				if(cargos[i].nome == "Presidente" || cargos[i].nome == "Governador"){
					eleicao5Cargos = true;
				}
			}

			while(arrayCargos.length < cargos.length){
					if(cargos[teste].nome == arrayCargosPossiveis[controleCargos]){
						if(eleicao5Cargos == true){
							if(cargos[teste].nome == "Prefeito" || cargos[teste].nome == "Vereador"){
								break;
								continue;
							}else{
								var objetoCargo = {
										id: cargos[teste].id,
										nome: cargos[teste].nome,
										candidatos: cargos[teste].candidatos
									}
									$.each(objetoCargo.candidatos, function(i, candidato){
										var objetoCandidato = {
											id: candidato.id,
											numero: candidato.numero,
											url: "http://tse.vps.leandrorego.com/api/fotoCandidato?id="+candidato.id,
											vice: candidato.vice,
											idCargo: candidato.idCargo,
											nomeCandidato: candidato.nome,
										}
										arrayNumeros.push(objetoCandidato);
										localStorage.setItem("arrayNumeros", JSON.stringify(arrayNumeros));
									});

									arrayCargos.push(objetoCargo);
									localStorage.setItem("arrayCargos", JSON.stringify(arrayCargos));
									controleCargos++;
									teste = 0;
							}
						}else{
							if(cargos[teste].nome == "Presidente" || cargos[teste].nome == "Governador" || cargos[teste].nome == "Senador"
							|| cargos[teste].nome == "Deputado Federal" || cargos[teste].nome == "Deputado Estadual"){
								break;
								continue;
							}else{
								var objetoCargo = {
										id: cargos[teste].id,
										nome: cargos[teste].nome,
										candidatos: cargos[teste].candidatos
									}
									$.each(objetoCargo.candidatos, function(i, candidato){
										var objetoCandidato = {
											id: candidato.id,
											numero: candidato.numero,
											vice: candidato.vice,
											url: "http://tse.vps.leandrorego.com/api/fotoCandidato?id="+candidato.id,
											idCargo: candidato.idCargo,
											nomeCandidato: candidato.nome,
										}
										arrayNumeros.push(objetoCandidato);
										localStorage.setItem("arrayNumeros", JSON.stringify(arrayNumeros));
									});

									arrayCargos.push(objetoCargo);
									localStorage.setItem("arrayCargos", JSON.stringify(arrayCargos));
									controleCargos++;
									teste = 0;
							}
						}
					}else{
						teste++;
					}
				}
		} catch (e) {
			alert("Erro: "+e);
		}


	});

	function pegarIdCargo(nome){
		var arrayCargos = localStorage.getItem("arrayCargos");
		arrayCargos = JSON.parse(arrayCargos);
		for(var i = 0;i<arrayCargos.length;i++){
			if(arrayCargos[i].nome == nome){
				return arrayCargos[i].id;
			}
		}
	}

	function pegarNomeCargo(id){
		var arrayCargos = localStorage.getItem("arrayCargos");
		arrayCargos = JSON.parse(arrayCargos);
		for(var i = 0;i<arrayCargos.length;i++){
			if(arrayCargos[i].id == id){
				return arrayCargos[i].nome;
			}
		}
	}

	function verificarCargoNumero(idCargo){
		var arrayNumeros = localStorage.getItem("arrayNumeros");
		arrayNumeros = JSON.parse(arrayNumeros);
		for(var i = 0;i<arrayNumeros.length;i++){
			if(arrayNumeros[i].idCargo == idCargo){
				return arrayNumeros[i].numero;
			}
		}
		return 0;
	}

	function verificarUrna(data){
		try {
			var arrayCargos = localStorage.getItem("arrayCargos");
			arrayCargos = JSON.parse(arrayCargos);
			if(data.status == "liberada"){
				iniciarVotacao = true;
				clearTelas();
				if(controlador > 0 && controlador < arrayCargos.length){
					if(botaoCorrige==false){
						document.getElementById('demo1').play();
					}
					preencheu = false;
				}
				if(arrayCargos.length == controlador){
					if(botaoCorrige==false){
						document.getElementById('demo2').play();
					}
					telaFim();
					encerrarVotacao = true;
					controlador = 0;
					preencheu = false;
				}else{
					if(arrayCargos[controlador].nome == "Senador"){
						criarComponentsTelaDinamica(arrayCargos[controlador].nome+" "+incremento, verificarCargoNumero(arrayCargos[controlador].id));
						if(botaoCorrige == false){
							cargoSenador = true;
						}
						$("form").keypress(function(){
							alert("Utilize somente os botões da urna!");
							$("input").attr("disabled",true);
							$("#num").attr("disabled",false);
						});
					}else if(cargoSenador == true){
						controlador--;
						incremento++;
						criarComponentsTelaDinamica(arrayCargos[controlador].nome+" "+incremento, verificarCargoNumero(arrayCargos[controlador].id));
						cargoSenador = false;
						$("form").keypress(function(){
							alert("Utilize somente os botões da urna!");
							$("input").attr("disabled",true);
							$("#num").attr("disabled",false);
						});
					}else{
						criarComponentsTelaDinamica(arrayCargos[controlador].nome, verificarCargoNumero(arrayCargos[controlador].id));
						$("form").keypress(function(){
							alert("Utilize somente os botões da urna!");
							$("input").attr("disabled",true);
							$("#num").attr("disabled",false);
						});
						incremento = 1;
					}
				}
			}
		} catch (e) {
			alert("ERRO: "+e);
		}

	}

	function ipUrna(ip){
		ipUrna = ip.ipUrna;
		$("#ipUrna").text("IP URNA: "+ipUrna);
		localStorage.setItem("ipUrna", ipUrna);
	}

	$.ajax({
        //url: "https://urna-eletronica.herokuapp.com/enviarIpUrna",
        url: "http://localhost:"+portClient+"/enviarIpUrna",
        type: 'post',
        data: {
        	ipUrna: localStorage.getItem("ipUrna"),
        },
        error: function(data){
        	clearTelas();
        	botaoConfirmar = true;
        	telaIpExist();
        	
        },
		});

	function pegarSecao(secao){
		if(enviouSecao == false){
			try {
				if(secao.status == "Ip da urna não está vinculado a seção"){
					clearTelas();
					telaErro();
					secaoEnviada = true;
				}else if(secaoEnviada == true){
					var objetoSecao = {
						secao: secao.secao,
					}
					$.each(objetoSecao.secao, function(i, secao){
						idSecao = secao.secao;
					});
					localStorage.setItem("idSecao", idSecao);
					$.ajax({
				        //url: "https://urna-eletronica.herokuapp.com/setUrna",
				        url: "http://localhost:"+portClient+"/setUrna",
				        type: 'post',
				        data: {
				        	idSecao: localStorage.getItem("idSecao"),
				        },

						}).done(function(msg){
						});
					enviouSecao = true;
					secaoEnviada = false;
					clearTelas();
					telaTerminal();
				}
			} catch (e) {
				console.log("Erro: "+e);
			}
		}
	}

	var interval = setInterval(function () {
        if(iniciarUrna == true){
        	$.getJSON("http://localhost:9080/pegarStatusUrnaFinalizada/"+localStorage.getItem("ipUrna")).done(function (dados){
        		if(dados.status == 1){
        			if(terminalFinalizouVotacao == true){
        				clearTelas();
        				telaTerminalFinalizaVotacao();
        				terminalFinalizouVotacao = false;
        				enviarVotosCancelados = true;
        				controlador = 0;
        			}
        		}
        	});
        	$.getJSON("http://localhost:9080/pegarStatusUrnaCancelada/"+localStorage.getItem("ipUrna")).done(function (dados){
        		if(dados.status == 1){
        			if(terminalCancelouVotacao == true){
        				clearTelas();
        				telaTerminalCancelouVotacao();
        				terminalCancelouVotacao = false;
        				if(enviarVotosCancelados == true){
        					console.log("Entrou no enviar votos nulos");
        					enviarVotosCancelados = false;
    						for(var i = localStorage.getItem("controlador")-1;i < arrayCargos.length;i++){
	        					$.ajax({
	        				          //url: "https://urna-eletronica.herokuapp.com/voto",
	        				          url: "http://localhost:9080/voto",
	        				          type: 'post',
	        				          data: {
	        				        	   numCandidato: 0,
	        				        	   idCargo: 0,
	        				               voto: "",
	        				               tipo: "votosCancelados"
	        				          },

	        						})
	        						.done(function(msg){
	        						});
	        				}
        				 
    						localStorage.setItem("controlador", 0);
        				}
        			}
        		}
        	});
        	$.getJSON("http://localhost:9080/pegarStatusUrna/"+localStorage.getItem("ipUrna")).done(function (dados) {
				if(dados.status == "bloqueada"){
					 if(terminalTravouUrna == true){
						 clearTelas();
						 telaTerminal();
						 terminalTravouUrna = false;
						 terminalLiberouUrna = true;
						 controlador = 0;
						 preencheu = false;
						 encerrarVotacao = false;
						 preencheuBool = true;
					 }
					 terminalTravouUrna = true;
				}
				else if(dados.status == "liberada"){
					if(terminalLiberouUrna == true){
						$.getJSON("http://localhost:9080/pegarStatusUrna/"+localStorage.getItem("ipUrna")).done(verificarUrna);
						terminalLiberouUrna = false;
						
					}
					terminalTravouUrna = false;
					if(botaoConfirmar == false && encerrarVotacao == false){
						//console.log("Segundos: "+segundos);
						console.log("Entrou no Pedir tempo: "+segundos);
			        	segundos++;
			        	if(segundos == 30){
			        		console.log("ENVIOU O PEDIDO DE TEMPO");
			        		$.ajax({
								//url: "https://urna-eletronica.herokuapp.com/enviarPedidoTempo",
						        url: "http://localhost:9080/enviarPedidoTempo",
						          type : 'post',
								})
								.done(function(msg){
								});
			        		$.ajax({
								//url: "https://urna-eletronica.herokuapp.com/enviarPedidoTempo",
						        url: "http://localhost:9080/urnaPediuTempo",
						          type : 'post',						          
								})
								.done(function(msg){
								});
			        		segundos = 0;
			        		minutos = 0;
			        	}
					}else if(encerrarVotacao == true){
						botaoConfirmar = true;
						segundos = 0;
						minutos = 0;
					}else{
						segundos = 0;
		        		minutos = 0;
		        		botaoConfirmar = false;
					}
				}else if(dados.status == "cancelou"){
					terminalCancelouVotacao = true;
				}else if(dados.status == "finalizou"){
					terminalFinalizouVotacao = true;
				}else if(dados.status == "pediuTempo"){
					clearTelas();
					telaTerminal();
					terminalLiberouUrna = true;
					terminalTravouUrna = false;
				}
			});

        }

    }, 1000);

	console.log("IdSecao: "+localStorage.getItem("idSecao"));
	$("button").click(function(){
		if(preencheu == true){
			if($("#cargo").text() == "Senador 1" || $("#cargo").text() == "Senador 2"){
				var res = $("#cargo").text().substring(0, 7);
				$.getJSON("http://localhost:9080/pegarCandidato/"+localStorage.getItem("idSecao")+"/"+$("#num").val()+"/"+pegarIdCargo(res))
		    	.done(function (dados){
		    		try{
		    			if(preencheu == true){
		    				if(numeroSenadorAtual == $("#num").val()){
		    					candidatoNaoEncontrado($("#cargo").text());
		    					votoNull = true;
		    					numeroSenadorAtual = -1;
		    				}
		    				else if(dados.key=="Error"){
		    					candidatoNaoEncontrado($("#cargo").text());
		    					votoNull = true;
		    				}else {
		    					passarValores(dados);
		    					numero = dados.numero;
		    					numeroSenadorAtual = numero;
		    					Cargo = dados.idCargo;
		    					nome = dados.nome;
		    					votoValido = true;
		    				}
		    				preencheu = false;
		    			}
		    		}catch(erro){
		    			alert("Erro: "+erro);
		    		}
		    	});
			}else{
				$.getJSON("http://localhost:9080/pegarCandidato/"+localStorage.getItem("idSecao")+"/"+$("#num").val()+"/"+pegarIdCargo($("#cargo").text()))
		    	.done(function (dados){
		    		try{
		    			if(preencheu == true){
		    				if(numeroSenadorAtual == $("#num").val()){
		    					candidatoNaoEncontrado($("#cargo").text());
		    					votoNull = true;
		    					numeroSenadorAtual = -1;
		    				}
		    				else if(dados.key=="Error"){
		    					candidatoNaoEncontrado($("#cargo").text());
		    					votoNull = true;
		    				}else {
		    					passarValores(dados);
		    					numero = dados.numero;
		    					numeroSenadorAtual = numero;
		    					Cargo = dados.idCargo;
		    					nome = dados.nome;
		    					votoValido = true;
		    				}
		    				preencheu = false;
		    			}
		    		}catch(erro){
		    			alert("Erro: "+erro);
		    		}
		    	});
			}

		}

		cargo = $("#cargo").text();
		
    });

	//-------------------
	// Button Confirmar
	//-------------------

	$("#confirma").click(function(){
		localStorage.setItem("controlador", controlador);
		if(iniciarVotacao == false){
			alert("Terminal não liberou a urna");
		}else{
			if(preencheuBool == false && encerrarVotacao == false){
				alert("Preencha os campos!");
			}else if(encerrarVotacao == true){
				alert("Votação Encerrada!");
			}else if(votoNull == true){
	        	votoNull = false;
				controlador++;
				controladorAUX++;
				j = 0;
				k = 0;
				evento = 0;
				botaoCorrige = false;
				num = "";
				preencheu = false;
				preencheuBool = false;
				botaoConfirmar = true;
				clearTelas();
				$.ajax({
			          //url: "https://urna-eletronica.herokuapp.com/voto",
			          url: "http://localhost:"+portClient+"/voto",
			          type: 'post',
			          data: {
			        	   numCandidato: 0,
			        	   idCargo: 0,
			               voto: "Nulo",
			               tipo: "votoNulos"
			          },
					})
					.done(function(msg){
					});
				$.ajax({
					//url: "https://urna-eletronica.herokuapp.com/informaVotacaoFinalizada",
			        url: "http://localhost:"+portClient+"/informaVotacaoFinalizada",
			          type : 'post',
			          data : {
			               status: "finalizado"
			          },
					})
					.done(function(msg){
					});
				$.getJSON("http://localhost:9080/pegarStatusUrna/"+localStorage.getItem("ipUrna")).done(verificarUrna);

			}else if(votouBranco == true){
	        	votouBranco = false;
	        	botaoCorrige = false;
	        	botaoConfirmar = true;
	        	preencheuBool = false;
	        	preencheu = false;
				controlador++;
				controladorAUX++;
				j = 0;
				k = 0;
				evento = 0;
				num = "";
				$.ajax({
					//url: "https://urna-eletronica.herokuapp.com/voto",
			        url: "http://localhost:"+portClient+"/voto",
			          type: 'post',
			          data: {
			        	  numCandidato: 0,
			        	   idCargo: 0,
			               voto: "Branco",
			               tipo: "votoBranco"
			          },
					})
					.done(function(msg){
					});
				$.ajax({
					//url: "https://urna-eletronica.herokuapp.com/informaVotacaoFinalizada",
			        url: "http://localhost:"+portClient+"/informaVotacaoFinalizada",
			          type : 'post',
			          data : {
			               status: "finalizado"
			          },
					})
					.done(function(msg){
					});
				$.getJSON("http://localhost:9080/pegarStatusUrna/"+localStorage.getItem("ipUrna")).done(verificarUrna);
			}else if(votoValido == true){
				clearTelas();
	        	votoValido = false;
				$.ajax({
					//url: "https://urna-eletronica.herokuapp.com/voto",
			        url: "http://localhost:"+portClient+"/voto",
			          type : 'post',
			          data : {
			               idCargo: Cargo,
			               numCandidato: numero,
			               nome: nome,
					       voto: "Valido",
					       tipo: "votoValido"
			          },
					})
					.done(function(msg){
					});
				$.ajax({
					//url: "https://urna-eletronica.herokuapp.com/informaVotacaoFinalizada",
			        url: "http://localhost:"+portClient+"/informaVotacaoFinalizada",
			          type : 'post',
			          data : {
			               status: "finalizado"
			          },
					})
					.done(function(msg){
					});

				controlador++;
				controladorAUX++;
				j = 0;
				k = 0;
				evento = 0;
				num = "";
				preencheu = false;
				preencheuBool = false;
				botaoCorrige = false;
				botaoConfirmar = true;
				$.getJSON("http://localhost:9080/pegarStatusUrna/"+localStorage.getItem("ipUrna"))
	        	.done(verificarUrna);

			}
		}
	});
	//----------------------------
	// Button Corrige
	//----------------------------
	$("#corrige").click(function(){
		if(iniciarVotacao == false){
			alert("Terminal não liberou a urna");
		}else{
			if(encerrarVotacao == true){
				alert("Votação Encerrada!");
			}else{
				clearTelas();
				$.getJSON(servicoTerminal)
				.done(verificarUrna);
				j = 0;
				k = 0;
				evento = 0;
				num = "";
				preencheu = false;
				preencheuBool = true;
				votoNull = false;
				votouBranco = false;
				votoValido = false;
				botaoCorrige = true;
			}
		}
	});
	//------------------------------
	// Button Branco
	//------------------------------
	$("#branco").click(function(){
		if(iniciarVotacao == false){
			alert("Terminal não liberou a urna");
		}else{
			if(encerrarVotacao == true){
				alert("Votação Encerrada!");
			}else{
				votouBranco = true;
				clearTelas();
				telaBranco(cargo);
				j = 0;
				k = 0;
				evento = 0;
				num = "";
				preencheu = false;
				botaoBanco = true;
				preencheuBool = true;
				if(votoNull == true){
					votoNull = false;
				}
			}
		}
	});


  });

function setarValorComponents(element,id){
	var array = document.getElementById(element);

	for(var i = 0;i<array.length;i++){
		if(document.getElementById(array[i].id).value == ""){
			document.getElementById(array[j].id).value = document.getElementById(id).value;
			document.getElementById(array[j].id).disabled = true;
			j++;
			break;
		} else if(document.getElementById(array[i].id).value != document.getElementById(id).value){
			document.getElementById(array[j].id).value = document.getElementById(id).value;
			document.getElementById(array[j].id).disabled = true;
			j++;
			break;
		}
		else{
			document.getElementById(array[j].id).value = document.getElementById(id).value;
			document.getElementById(array[j].id).disabled = true;
			j++;
			break;
		}
	}
	getNumero();

}

function getNumero(){
	var form = document.getElementById('form');
	for(var i = 0;i<form.length-1;i++){
		if(k == form.length-2){
			preencheu = true;
			preencheuBool = true;
		}
		if(k == i){
			num += document.getElementById(form[i].id).value;
			k++;
			bloquearBotoes = true;
			break;
		}

	}
	document.getElementById('num').value = num;
}

function passarProx(campoatual, proxcampo)
{
   var tamanho_max = eval("document.f1." + campoatual);
   var tamanho_atual = eval("document.f1."+ campoatual);
   if (tamanho_atual = tamanho_max)
      {
         eval("document.f1."+ proxcampo +".focus();");
      }
}
