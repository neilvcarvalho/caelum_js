function numberParaReal(numero) {
	return "R$ " + numero.toFixed(2).replace(".", ",");
}

function realParaNumber(extraido) {
	return parseFloat(extraido.replace("R$ ", "").replace(",", "."));
}