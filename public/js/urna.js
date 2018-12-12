var j = 0;
var k = 0;
var s = 0;
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

function ComponentsTelaGovernador(){
	try{
		document.getElementById('teste').innerHTML = "";
		var tbody = document.getElementById('body-tela');
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		td.textContent = "Governador";
		var td3 = document.createElement('td');
		var img = document.createElement("img");
		
		var tr2 = document.createElement('tr');
		var td2 = document.createElement('td');
		
		var form = document.createElement('form');
		var input1 = document.createElement('input');
		var input2 = document.createElement('input');
		var input3 = document.createElement('input');
		td.setAttribute('id', 'cargo');
		
		form.setAttribute('name', 'f1');
		form.setAttribute('id', 'form');
		form.setAttribute('method', 'post');
		 
		
		input1.setAttribute('name', "campo1");
		input1.setAttribute('class', "campo-text");
		input1.setAttribute('id', 'num1');
		input1.setAttribute('type', 'text');
		input1.setAttribute('onkeyUp',"javascript:passarProx('campo1','campo2')");
		
		input2.setAttribute('type', 'text');
		input2.setAttribute('id', 'num2');
		input2.setAttribute('name', 'campo2');
		input2.setAttribute('onkeyUp',"javascript:passarProx('campo2','campo1')");
		input2.setAttribute('class', 'campo-text');
		
		input3.setAttribute('type', 'hidden');
		input3.setAttribute('name', 'numero');
		input3.setAttribute('id', 'num');
		
		
		form.appendChild(input1);
		form.appendChild(input2);
		form.appendChild(input3);
		tr.appendChild(td);
		tr.appendChild(td3);
		tr2.appendChild(td2);
		td2.appendChild(form);
		td3.appendChild(img);
		tr2.appendChild(td2);
		tbody.appendChild(tr);
		tbody.appendChild(tr2);
	}catch(erro){
		alert("Erro: "+erro);
	}
}

function ComponentsTelaDeputadoFederal(){
	try{
		document.getElementById('teste').innerHTML = "";
		var tbody = document.getElementById('body-tela');
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		td.textContent = "Deputado Federal";
		var td3 = document.createElement('td');
		var img = document.createElement("img");
		
		var tr2 = document.createElement('tr');
		var td2 = document.createElement('td');
		
		var form = document.createElement('form');
		var input1 = document.createElement('input');
		var input2 = document.createElement('input');
		var input3 = document.createElement('input');
		var input4 = document.createElement('input');
		var input5 = document.createElement('input');
		td.setAttribute('id', 'cargo');
		
		form.setAttribute('name', 'f1');
		form.setAttribute('id', 'form');
		form.setAttribute('method', 'post');
		 
		
		input1.setAttribute('name', "campo1");
		input1.setAttribute('class', "campo-text");
		input1.setAttribute('id', 'num1');
		input1.setAttribute('type', 'text');
		input1.setAttribute('onkeyUp',"javascript:passarProx('campo1','campo2')");
		
		input2.setAttribute('type', 'text');
		input2.setAttribute('id', 'num2');
		input2.setAttribute('name', 'campo2');
		input2.setAttribute('onkeyUp',"javascript:passarProx('campo2','campo1')");
		input2.setAttribute('class', 'campo-text');
		
		input3.setAttribute('name', "campo3");
		input3.setAttribute('class', "campo-text");
		input3.setAttribute('id', 'num3');
		input3.setAttribute('type', 'text');
		input3.setAttribute('onkeyUp',"javascript:passarProx('campo3','campo2')");
		
		input4.setAttribute('type', 'text');
		input4.setAttribute('id', 'num4');
		input4.setAttribute('name', 'campo4');
		input4.setAttribute('onkeyUp',"javascript:passarProx('campo4','campo3')");
		input4.setAttribute('class', 'campo-text');
		
		input5.setAttribute('type', 'hidden');
		input5.setAttribute('name', 'numero');
		input5.setAttribute('id', 'num');
		
		
		form.appendChild(input1);
		form.appendChild(input2);
		form.appendChild(input3);
		form.appendChild(input4);
		form.appendChild(input5);
		tr.appendChild(td);
		tr.appendChild(td3);
		tr2.appendChild(td2);
		td2.appendChild(form);
		td3.appendChild(img);
		tr2.appendChild(td2);
		tbody.appendChild(tr);
		tbody.appendChild(tr2);
	}catch(erro){
		alert("Erro: "+erro);
	}
}

function ComponentsTelaDeputadoEstadual(){
	try{
		document.getElementById('teste').innerHTML = "";
		var tbody = document.getElementById('body-tela');
		var trLinha1 = document.createElement('tr');
		var trLinha2 = document.createElement('tr');
		var tdColuna1 = document.createElement('td');
		tdColuna1.textContent = "Deputado Estadual";
		var tdColuna2 = document.createElement('td');
		var tdColuna3 = document.createElement('td');
		var img = document.createElement("img");
		
		
		var form = document.createElement('form');
		var input1 = document.createElement('input');
		var input2 = document.createElement('input');
		var input3 = document.createElement('input');
		var input4 = document.createElement('input');
		var input5 = document.createElement('input');
		var input6 = document.createElement('input');
		
		
		tdColuna1.setAttribute('id', 'cargo');
		form.setAttribute('name', 'f1');
		form.setAttribute('id', 'form');
		form.setAttribute('method', 'post');
		 
		
		input1.setAttribute('name', "campo1");
		input1.setAttribute('class', "campo-text");
		input1.setAttribute('id', 'num1');
		input1.setAttribute('type', 'text');
		input1.setAttribute('onkeyUp',"javascript:passarProx('campo1','campo2')");
		
		input2.setAttribute('type', 'text');
		input2.setAttribute('id', 'num2');
		input2.setAttribute('name', 'campo2');
		input2.setAttribute('onkeyUp',"javascript:passarProx('campo2','campo1')");
		input2.setAttribute('class', 'campo-text');
		
		input3.setAttribute('name', "campo3");
		input3.setAttribute('class', "campo-text");
		input3.setAttribute('id', 'num3');
		input3.setAttribute('type', 'text');
		input3.setAttribute('onkeyUp',"javascript:passarProx('campo3','campo2')");
		
		input4.setAttribute('type', 'text');
		input4.setAttribute('id', 'num4');
		input4.setAttribute('name', 'campo4');
		input4.setAttribute('onkeyUp',"javascript:passarProx('campo4','campo3')");
		input4.setAttribute('class', 'campo-text');
		
		input5.setAttribute('type', 'text');
		input5.setAttribute('id', 'num5');
		input5.setAttribute('name', 'campo5');
		input5.setAttribute('onkeyUp',"javascript:passarProx('campo5','campo1')");
		input5.setAttribute('class', 'campo-text');
		
		input6.setAttribute('type', 'hidden');
		input6.setAttribute('name', 'numero');
		input6.setAttribute('id', 'num');
		
		
		form.appendChild(input1);
		form.appendChild(input2);
		form.appendChild(input3);
		form.appendChild(input4);
		form.appendChild(input5);
		form.appendChild(input6);
		trLinha1.appendChild(tdColuna1);
		trLinha1.appendChild(tdColuna3);
		trLinha2.appendChild(tdColuna2);
		tdColuna2.appendChild(form);
		tdColuna3.appendChild(img);
		trLinha2.appendChild(tdColuna2);
		tbody.appendChild(trLinha1);
		tbody.appendChild(trLinha2);
	}catch(erro){
		alert("Erro: "+erro);
	}
}

function ComponentsTelaSenador(){
	try{
		document.getElementById('teste').innerHTML = "";
		var tbody = document.getElementById('body-tela');
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		td.textContent = "Senador "+senador;
		var td3 = document.createElement('td');
		var img = document.createElement("img");
		
		var tr2 = document.createElement('tr');
		var td2 = document.createElement('td');
		
		var form = document.createElement('form');
		var input1 = document.createElement('input');
		var input2 = document.createElement('input');
		var input3 = document.createElement('input');
		var input4 = document.createElement('input');
		 
		td.setAttribute('id', 'cargo');
		
		form.setAttribute('name', 'f1');
		form.setAttribute('id', 'form');
		form.setAttribute('method', 'post');
		 
		
		input1.setAttribute('name', "campo1");
		input1.setAttribute('class', "campo-text");
		input1.setAttribute('id', 'num1');
		input1.setAttribute('type', 'text');
		input1.setAttribute('onkeyUp',"javascript:passarProx('campo1','campo2')");
		
		input2.setAttribute('type', 'text');
		input2.setAttribute('id', 'num2');
		input2.setAttribute('name', 'campo2');
		input2.setAttribute('onkeyUp',"javascript:passarProx('campo2','campo1')");
		input2.setAttribute('class', 'campo-text');
		
		input3.setAttribute('name', "campo3");
		input3.setAttribute('class', "campo-text");
		input3.setAttribute('id', 'num3');
		input3.setAttribute('type', 'text');
		input3.setAttribute('onkeyUp',"javascript:passarProx('campo3','campo2')");
		
		input4.setAttribute('type', 'hidden');
		input4.setAttribute('name', 'numero');
		input4.setAttribute('id', 'num');
		
		
		form.appendChild(input1);
		form.appendChild(input2);
		form.appendChild(input3);
		form.appendChild(input4);
	 
		tr.appendChild(td);
		tr.appendChild(td3);
		tr2.appendChild(td2);
		td2.appendChild(form);
		td3.appendChild(img);
		tr2.appendChild(td2);
		tbody.appendChild(tr);
		tbody.appendChild(tr2);
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
		
		
		pSeuVoto.textContent = "Seu voto para";
		pCargo.textContent = dados.cargo.cargo;
		pNome.textContent = dados.nome;
		pPartido.textContent = dados.partido.sigla;
		pTecla.textContent = "Aperte a Tecla";
		pConfirma.textContent = "VERDE: para CONFIRMAR";
		pCorrige.textContent = "LARANJA: para CORRIGIR";
		
		pPartido.setAttribute('id', 'partido');
		
		img.src = dados.url;
		img.setAttribute('width', '90px');
		img.setAttribute('height', '90px');
		if(dados.cargo.cargo == "Senador 1" || dados.cargo.cargo == "Senador 2"){
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
		}
		
		
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

function criarComponentsTelaPresidente(){
	document.getElementById('teste').innerHTML = "";
	var tbody = document.getElementById('body-tela');
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.textContent = "Presidente";
	var td3 = document.createElement('td');
	var img = document.createElement("img");
	
	
	var tr2 = document.createElement('tr');
	var td2 = document.createElement('td');
	
	var form = document.createElement('form');
	var input4 = document.createElement('input');
	var input5 = document.createElement('input');
	var input6 = document.createElement('input');
	td.setAttribute('id', 'cargo');
	
	form.setAttribute('name', 'f1');
	form.setAttribute('id', 'form');
	form.setAttribute('method', 'post');
	 
	
	input4.setAttribute('name', "campo1");
	input4.setAttribute('class', "campo-text");
	input4.setAttribute('id', 'num1');
	input4.setAttribute('type', 'text');
	input4.setAttribute('onkeyUp',"javascript:passarProx('campo1','campo2')");
	
	input5.setAttribute('type', 'text');
	input5.setAttribute('id', 'num2');
	input5.setAttribute('name', 'campo2');
	input5.setAttribute('onkeyUp',"javascript:passarProx('campo2','campo1')");
	input5.setAttribute('class', 'campo-text');
	
	input6.setAttribute('type', 'hidden');
	input6.setAttribute('name', 'numero');
	input6.setAttribute('id', 'num');
	
	
	form.appendChild(input4);
	form.appendChild(input5);
	form.appendChild(input6);
	
	tr.appendChild(td);
	tr.appendChild(td3);
	tr2.appendChild(td2);
	td2.appendChild(form);
	td3.appendChild(img);
	tr2.appendChild(td2);
	tbody.appendChild(tr);
	tbody.appendChild(tr2);
}

function clearTelas(){
	document.getElementById('body-tela').innerHTML = "";
}

function telaTerminal(){
	document.getElementById('teste').innerHTML = "Aguardando o terminal para a Votação";
}

function telaDeputadoFederal(){
	try{
		ComponentsTelaDeputadoFederal();
	}catch(erro){
		alert("Erro: "+erro);
	}
}

function telaGovernador(){
	try{
		ComponentsTelaGovernador();
	}catch(erro){
		alert("Erro: "+erro)
	}
}

function telaPresidente(){
	try{
		criarComponentsTelaPresidente();
	}catch(erro){
		alert("Erro: "+erro)
	}
}

function telaDeputadoEstadual(){
	try{
		ComponentsTelaDeputadoEstadual();
	}catch(erro){
		alert("Erro: "+erro);
	}
}

function telaSenador(){
	try{
		ComponentsTelaSenador();
	}catch(erro){
		alert("Erro: "+erro);
	}
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
	var servico = "http://localhost:9000/pegarCandidato/";
	var servicoTerminal = "http://localhost:9000/pegarTerminal";
	
	function onUrnaDone(dados) {
		try{
			if(preencheu == true){
				if(dados.string == "candidatoNaoExiste"){
					candidatoNaoEncontrado($("#cargo").text());
					votoNull = true;
				}
				if(dados.cargo.cargo == $("#cargo").text()){
					passarValores(dados);
					partido = dados.partido.sigla;
					numero = dados.numero.numero;
					Cargo = dados.cargo.cargo;
					nome = dados.nome;
					votoValido = true;
				}else {
					candidatoNaoEncontrado($("#cargo").text());
					votoNull = true;
				}
				preencheu = false;
			}
		}catch(erro){
		}
	}
	
	function verificarUrna(data){
		try {
			if(data.status == "liberada"){
				iniciarVotacao = true;
				if(controlador == 0){
					clearTelas();
					telaDeputadoEstadual();
					preencheu = false;
				}else if(controlador == 1){
					clearTelas();
					document.getElementById('demo1').play();
					telaDeputadoFederal();
					preencheu = false;
				}else if(controlador == 2){
					if(botaoCorrige == true){
						clearTelas();
						document.getElementById('demo1').play();
						telaSenador();
						preencheu = false;
					}else{
						clearTelas();
						document.getElementById('demo1').play();
						telaSenador();
						preencheu = false;
					}
				}else if(controlador == 3){
					senador = 2;
					clearTelas();
					document.getElementById('demo1').play();
					telaSenador();
					preencheu = false;
				}else if(controlador == 4){
					clearTelas();
					document.getElementById('demo1').play();
					telaGovernador();
					preencheu = false;
				}else if(controlador == 5){
					clearTelas();
					document.getElementById('demo1').play();
					telaPresidente();
					preencheu = false;
				}else if(controlador == 6){
					clearTelas();
					document.getElementById('demo2').play();
					telaFim();
					encerrarVotacao = true;
					controlador = 0;
				}
			}
			
		} catch (e) {
			//alert(e);
		}
		
	}
 
			var interval = setInterval(function () {
		        if(iniciarUrna == true){
		        	$.getJSON(servicoTerminal)
		        	.done(function (dados) {
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
								$.getJSON(servicoTerminal)
					        	.done(verificarUrna);
								terminalLiberouUrna = false;
							}
							terminalTravouUrna = false;
						}
					});
		        	
		        }
		        
		    }, 1000);
		 
	$("button").click(function(){
		$.getJSON(servico + $("#num").val())
    	.done(onUrnaDone);
		cargo = $("#cargo").text();
    });
	
	$("#confirma").click(function(){
		if(preencheuBool == false && encerrarVotacao == false){
			alert("Preencha os campos!");
		}else if(encerrarVotacao == true){
			alert("Votação Encerrada!");
		}else if(votoNull == true){
			clearTelas();
			$.ajax({
		          url : "http://localhost:9000/insert",
		          type : 'post',
		          data : {
		               partido : "Voto Nulo",
		               cargo : "Voto Nulo",
		               numero: -2,
		               nome: "Voto Nulo"
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
		          url : "http://localhost:9000/insert",
		          type : 'post',
		          data : {
		               partido : "Voto Branco",
		               cargo : "Voto Branco",
		               numero: -1,
		               nome: "Voto Branco"
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
		          url : "http://localhost:9000/insert",
		          type : 'post',
		          data : {
		               partido : partido,
		               cargo : Cargo,
		               numero: numero,
		               nome: nome
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
	});
	
	$("#corrige").click(function(){
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
		
	});
	
	$("#branco").click(function(){
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
