var carrinho         = document.getElementById('carrinho');
var inputsQuantidade = carrinho.getElementsByTagName('input');

function ehNumero(valor) {
	return /\d/.test(valor);
}

function inputNumero(input) {
	input.addEventListener('keypress', function(event) {
		var digitado = String.fromCharCode(event.charCode);
		if (event.charCode && !ehNumero(digitado)) {
			event.preventDefault();
		}
	});
}

for (var i = inputsQuantidade.length - 1; i >= 0; i--) {
	inputNumero(inputsQuantidade[i]);
};