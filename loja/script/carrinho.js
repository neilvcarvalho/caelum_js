var carrinho = document.getElementById("carrinho");
var inputs = carrinho.getElementsByTagName("input");

for (var i = inputs.length - 1; i >= 0; i--) {
	inputs[i].addEventListener("keyup", function (event) {
		var qnt = this.value;
		var li  = this.parentNode.parentNode.parentNode;

		var spanUnit = li.getElementsByTagName('span')[0];
		var spanTot  = li.getElementsByTagName('span')[1];

		spanTot.innerHTML = numberParaReal(qnt * realParaNumber(spanUnit.innerHTML));
		// console.log(spanUnit.innerHTML);
	});
};

var	produtos = carrinho.getElementsByTagName('li')
for (var i = produtos.length - 1; i >= 0; i--) {
	var produto = produtos[i];
	produto.getElementsByTagName('a')[0].addEventListener('click', function (event) {
		produto.parentNode.removeChild(produto);
		event.preventDefault();
	});
};