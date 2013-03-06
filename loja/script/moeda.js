// Conversão de um número float em uma string formatada
function numberParaReal (numero) {
	var formatado = numero.toFixed(2);
	formatado = "R$ " + formatado;
	formatado = formatado.replace('.', ',');
	return formatado;
}

// Conversão de uma string formatada num número float
function realParaNumber (extraido) {
	var compativelComParseFloat = extraido.replace('R$ ', '');
	compativelComParseFloat = compativelComParseFloat.replace(',', '.');
	var valor = parseFloat(compativelComParseFloat);
	return valor;
}