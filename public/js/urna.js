var j = 0;


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
