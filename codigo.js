function retencion (sinRet, alicuota){
	retMin = 240;
	if (retAnt == 1){
	result = ((neto - sinRet)*alicuota).toFixed([2])
    	if (result >= retMin){
    	document.getElementById("reten").innerHTML = result;
    	apagar = (total - result).toFixed([2])
    	document.getElementById("aPagar").innerHTML = apagar;
   		}
		else {
		document.getElementById("reten").innerHTML = "No supera la retencion minima" ;
		document.getElementById("aPagar").innerHTML = ""
		}

	}
	else {
		result = neto*alicuota;
   		if (result >= retMin){
    	document.getElementById("reten").innerHTML = result;
    	apagar = total - result
    	document.getElementById("aPagar").innerHTML = parseFloat(apagar);
    	}
		else {
		document.getElementById("reten").innerHTML = "No supera la retencion minima" ;
		document.getElementById("aPagar").innerHTML = ""
		}	
	}
}


// para el boton
function ret() {
	concepto = parseInt(document.getElementById("concepto").value);
	retAnt = parseInt(document.getElementById("retAnt").value);
	neto = parseFloat(document.getElementById("neto").value);
	total = parseFloat(document.getElementById("totalComp").value);

	console.log(total)
	console.log(concepto);
	if (concepto == 1 ) {
		retencion (224000, 0.02)
	}

	else if (concepto == 2) {
		retencion (67170,0.02)
		document.getElementById("reten").innerHTML = result;
	}
	else {
		retencion (11200,0.06)
		document.getElementById("reten").innerHTML = result;
	}
}