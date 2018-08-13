function valida_cpf() {
	var cpf = document.getElementById("numero_cpf").value;
	var equal = true; 
	var x = 0, y = 0, ind = 0;
	var reg = "";
	var cpf_number;
	
	cpf_number = parseInt(cpf);			// usado na valida��o de eventual uso de tra�os (hifens).
	cpf = cpf.split("");
	


	while (equal == true && ind < 10) {	//	testa se os digitos sao iguais.
	  equal = (cpf[0] == cpf[ind]);
	  ind++;
	}
	
	
	
	if ((isNaN(cpf_number)) || (/[.]/.exec(cpf) == ".")) {	// procura por tra�os ou pontos
	  document.getElementById("result").innerHTML = 
	  "CPF inv�lido. O numero do CPF n�o pode conter pontos ou tra�os!";
	} else if (cpf.length === 0) {
	  document.getElementById("result").innerHTML = 
	  "Campo obrigat�rio. Informe um CPF.";
	} else if (cpf.length !== 11) {
	  document.getElementById("result").innerHTML = 
	  "CPF inv�lido. O numero do CPF deve conter exatamente 11 digitos!";
 	} else if (equal) {
	  document.getElementById("result").innerHTML = 
	  "CPF inv�lido. O numero do CPF deve conter digitos distintos!";
 	} else {
	  for (i = 0; i < 9; i++){
		x+= (cpf[i] * (10 - i))*10;
		}
	  x %= 11;
	//  document.getElementById("x").innerHTML = x;
	   
	   for (i = 0; i < 10; i++){
		y+= (cpf[i] * (11 - i))*10;
		}
	  y %= 11;
	//  document.getElementById("y").innerHTML = y;  
	  if (x == cpf[9] && y == cpf[10]){
		
		switch (cpf[8]) {
		  case "0": 
			reg = "Rio Grande do Sul";
			break;
		  case "1": 
			reg = "Distrito Federal, Goi�s, Mato Grosso do Sul e Tocantins";
			break;
		  case "2": 
			reg = "Par�, Amazonas, Acre, Amap�, Rond�nia e Roraima";
			break;
		  case "3": 
			reg = "Cear�, Maranh�o e Piau�";
			break;
		  case "4": 
			reg = "Pernambuco, Rio Grande do Norte, Para�ba e Alagoas";
			break;
		  case "5": 
			reg = "Bahia e Sergipe";
			break;
		  case "6": 
			reg = "Minas Gerais";
			break;
		  case "7": 
			reg = "Rio de Janeiro e Esp�rito Santo";
			break;
		  case "8": 
			reg = "S�o Paulo";
			break;
		  case "9": 
			reg = "Paran� e Santa Catarina";
			break;
		  }
		
		document.getElementById("result").innerHTML = 
		"CPF v�lido!" + "&nbsp &nbsp &nbsp &nbsp" + "Regi�o: " + reg; 
		
	  } else {
		document.getElementById("result").innerHTML = 
		"CPF inv�lido. Tente novamente."; 
	  }
	}
}


function inv() {

      document.getElementById('header').style.backgroundColor = "white";
      document.getElementById('header').style.color = "black";
      document.getElementById('dados').style.backgroundColor = "white";
      document.getElementById('dados').style.color = "black";

}