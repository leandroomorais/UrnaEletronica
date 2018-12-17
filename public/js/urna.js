var j = 0;
var k = 0;
var s = 0;
var ant = 1;
var num = "";
var cargo = "";
var preencheu = false;
var preencheuBool = false;
var controlador = 0;
var senador = 1;
var votoValido = false;
var votoNull = false;
var votouBranco = false;
var encerrarVotacao = false;
var partido = "";
var numero = "";
var	Cargo = ""; 
var nome = "";
var iniciarVotacao = false;
var terminalTravouUrna = true;
var terminalLiberouUrna = true;
var botaoCorrige = false;
var iniciarUrna = true;
var botaoBanco = false;
var arrayCargos = [];
var arrayNumeros = [];
var ipUrna = "";

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
		clearTelas();
		var tbody = document.getElementById('body-tela');
		var trLinha1 = document.createElement('tr');
		var trLinha2 = document.createElement('tr');
		var trLinha3 = document.createElement('tr');
		var trLinha4 = document.createElement('tr');
		var trLinha5 = document.createElement('tr');
		var trLinha6 = document.createElement('tr');
		
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
		
		var pSeuVoto = document.createElement('p');
		var pCargo = document.createElement('p');
		var pNome = document.createElement('p');
		var pPartido = document.createElement('p');
		var pTecla = document.createElement('p');
		var pConfirma = document.createElement('p');
		var pCorrige = document.createElement('p');
		var pViceNome = document.createElement('p');
		
		
		var img = document.createElement('img');
		var imgSuple1 = document.createElement('img');
		var imgSuple2 = document.createElement('img');
		var imgVice = document.createElement('img');
		
		tdColunaReferencsNome.textContent = "Nome ";
		tdColunaReferencsPartido.textContent = "Partido ";
		var id = dados.idCargo;
		var cargoTxt = "";
		var cargo = function(id){
			for(var i = 0;i<arrayCargos.length;i++){
				if(arrayCargos[i].id == id){
					cargoTxt += arrayCargos[i].nome;
					return cargoTxt;
				}
			}
		}
		pSeuVoto.textContent = "Seu voto para";
		pCargo.innerHTML = cargo(id);
		pNome.textContent = dados.nome;
		pPartido.textContent = "";
		pTecla.textContent = "Aperte a Tecla";
		pConfirma.textContent = "VERDE: para CONFIRMAR";
		pCorrige.textContent = "LARANJA: para CORRIGIR";
		
		pPartido.setAttribute('id', 'partido');
		
		img.src = dados.url;
		img.setAttribute('width', '90px');
		img.setAttribute('height', '90px');
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
		}else if(dados.cargo.cargo == "Presidente" || dados.cargo.cargo == "Governador"){
			pViceNome.textContent = dados.vice;
			
			imgVice.src = dados.url;
			imgVice.setAttribute('width', '90px');
			imgVice.setAttribute('height', '90px');
			
			tdColunaReferencsVice.textContent = "Vice candidato";
			tdColunaViceNome.appendChild(pViceNome);
			tdColunaImgVice.appendChild(imgVice);
		}*/
		
		
		trLinha1.appendChild(tdColunaSeuVoto);
		trLinha2.appendChild(tdColunaReferencsNome);
		trLinha3.appendChild(tdColunaReferencsPartido);
		
		
		tdColunaSeuVoto.appendChild(pSeuVoto);
		tdColunaCargo.appendChild(pCargo);
		tdColunaNome.appendChild(pNome);
		tdColunaPartido.appendChild(pPartido);
		tdColunaFoto.appendChild(img);
		tdColunaInstrucao.appendChild(pTecla);
		tdColunaConfirma.appendChild(pConfirma);
		tdColunaCorrige.appendChild(pCorrige);
		
		trLinha1.appendChild(tdColunaSeuVoto);
		trLinha1.appendChild(tdColunaCargo);
		
		trLinha2.appendChild(tdColunaNome);
		trLinha3.appendChild(tdColunaPartido);
		trLinha1.appendChild(tdColunaFoto);
		
		trLinha3.appendChild(tdColunaSuple1);
		trLinha3.appendChild(tdColunaSuple2);
		trLinha3.appendChild(tdColunaImgVice);
		
		trLinha4.appendChild(tdColunaReferencsVice);
		trLinha4.appendChild(tdColunaViceNome);
		
		trLinha5.appendChild(tdColunaInstrucao);
		trLinha5.appendChild(tdColunaConfirma);
		trLinha5.appendChild(tdColunaCorrige);
		
		
		
		tbody.appendChild(trLinha1);
		tbody.appendChild(trLinha2);
		tbody.appendChild(trLinha3);
		tbody.appendChild(trLinha4);
		tbody.appendChild(trLinha5);
	} catch (e) {
		alert("Erro: "+e);
	}
	
}

function criarComponentsTelaDinamica(cargo, numero){
	try {
	document.getElementById('teste').innerHTML = "";
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
	input2.setAttribute('id', 'num');
	
	form.appendChild(input2);
	
	trLinha1.appendChild(td);
	td2.appendChild(form);
	trLinha2.appendChild(td2);
	tbody.appendChild(trLinha1);
	tbody.appendChild(trLinha2);
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
	var servico = "";
	var servicoTerminal = "https://urna-eletronica.herokuapp.com/pegarStatusUrna";
	var servicoTSE = "https://urna-eletronica.herokuapp.com/listarCargos/1";
	$.getJSON(servicoTSE).done(function(cargos){	
		try {
			$.each(cargos, function(i, cargo){
				var objetoCargo = {
					id: cargo.id,
					nome: cargo.nome,
					candidatos: cargo.candidatos
				}
				$.each(objetoCargo.candidatos, function(i, candidato){
					arrayNumeros.push(candidato.numero);
				});
				arrayCargos.push(objetoCargo);
			});
		} catch (e) {
			alert("Erro: "+e);
		}
	});
	
	function pegarIdCargo(nome){
		for(var i = 0;i<arrayCargos.length;i++){
			if(arrayCargos[i].nome == nome){
				return arrayCargos[i].id;
			}
		}
	}
	
	function pegarNomeCargo(id){
		for(var i = 0;i<arrayCargos.length;i++){
			if(arrayCargos[i].id == id){
				return arrayCargos[i].nome;
			}
		}
	}
	
	function onUrnaDone(dados) {
		try{
			if(preencheu == true){
				if(dados.key=="Error"){
					candidatoNaoEncontrado($("#cargo").text());
					votoNull = true;
				}else {
					passarValores(dados);
					//partido = dados.partido.sigla;
					numero = dados.numero;
					Cargo = dados.idCargo;
					votoValido = true;
				}
				preencheu = false;
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.open("GET", 'https://urna-eletronica.herokuapp.com/meuIp');
				xmlhttp.send();
				xmlhttp.onload = function(e) {
					ipUrna = xmlhttp.response;
				}
			}
		}catch(erro){
			alert("Erro: "+erro);
		}
	}
	
	function verificarUrna(data){
		try {
			if(data.status == "liberada"){
				iniciarVotacao = true;
				clearTelas();
				if(controlador > 0){
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
					criarComponentsTelaDinamica(arrayCargos[controlador].nome, arrayNumeros[controlador]);
				}				
				
				
				
			}
			
		} catch (e) {
			alert("Erro: "+e);
		}
		
	}
 
			var interval = setInterval(function () {
		        if(iniciarUrna == true){
		        	$.getJSON(servicoTerminal).done(function (dados) {
						if(dados.status == "bloqueada"){
							 if(terminalTravouUrna){
								 clearTelas();
								 telaTerminal();
								 terminalTravouUrna = false;
								 terminalLiberouUrna = true;
							 }
							 terminalTravouUrna = true;
						}
						else if(dados.status == "liberada"){
							if(terminalLiberouUrna){
								$.getJSON(servicoTerminal).done(verificarUrna);
								terminalLiberouUrna = false;
							}
							terminalTravouUrna = false;
						}
					});
		        	
		        }
		        
		    }, 100);
		 
	$("button").click(function(){
		var parametros = {
			idSecao: 1,
			numero: $("#num").val(),
			idCargo: pegarIdCargo($("#cargo").text()),
		}
		$.getJSON("https://urna-eletronica.herokuapp.com/pegarCandidato/1"+"/"+$("#num").val()+"/"+pegarIdCargo($("#cargo").text()))
    	.done(onUrnaDone);
		cargo = $("#cargo").text();
    });
	
	$("#confirma").click(function(){
		if(iniciarVotacao == false){
			alert("Terminal não liberou a urna");
		}else{

		if(preencheuBool == false && encerrarVotacao == false){
			alert("Preencha os campos!");
		}else if(encerrarVotacao == true){
			alert("Votação Encerrada!");
		}else if(votoNull == true){
			clearTelas();
			$.ajax({
		          url : "https://urna-eletronica.herokuapp.com/voto",
		          type : 'post',
		          data : {
		        	   numCandidato: 0,
		        	   idCargo: 0,
		        	   ipUrna: 0,
		               voto: "Nulo"
		          },
		          
				})
				.done(function(msg){
				});
			$.getJSON(servicoTerminal)
        	.done(verificarUrna);
        	votoNull = false;
			controlador++;
			j = 0;
			k = 0;
			num = "";
			preencheu = false;
			preencheuBool = false;
		}else if(votouBranco == true){
			$.ajax({
		          url : "https://urna-eletronica.herokuapp.com/voto",
		          type : 'post',
		          data : {
		        	  numCandidato: 0,
		        	   idCargo: 0,
		        	   ipUrna: 0,
		               voto: "Branco"
		          },
		          
				})
				.done(function(msg){
				});
			$.getJSON(servicoTerminal)
        	.done(verificarUrna);
        	votouBranco = false;
			controlador++;
		}else if(votoValido == true){
			clearTelas();
			$.getJSON(servicoTerminal)
        	.done(verificarUrna);
        	votoValido = false;
			$.ajax({
				  url : "https://urna-eletronica.herokuapp.com/voto",
		          type : 'post',
		          data : {
		               idCargo: Cargo,
		               numCandidato: numero,
		               idUrna: ipUrna,		               
				       voto: "Valido"
		          },
		          
				})
				.done(function(msg){
				});
			controlador++;
			j = 0;
			k = 0;
			num = "";
			preencheu = false;
			preencheuBool = false;
		}
	}	
	});
	
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
			num = "";
			preencheu = false;
			preencheuBool = false;
			botaoCorrige = true;
		}
		}
	});
	
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
