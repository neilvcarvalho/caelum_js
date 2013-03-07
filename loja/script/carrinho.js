var carrinho = document.getElementById("carrinho");
var inputs   = carrinho.getElementsByTagName("input");
var a        = document.createElement("a");
var div      = document.getElementById('principal');
var ul       = div.firstElementChild;

for (var i = inputs.length - 1; i >= 0; i--) {
	inputs[i].addEventListener("keyup", function (event) {
		var qnt      = parseInt(this.value);
		var li       = this.parentNode.parentNode.parentNode;
		var spanUnit = li.getElementsByTagName('span')[0];
		var spanTot  = li.getElementsByTagName('span')[1];

		if (qnt && ehNumero(qnt)) {
			spanTot.textContent = numberParaReal(qnt * realParaNumber(spanUnit.textContent));
		} else {
			spanTot.textContent = numberParaReal(0);
		}
	});
};


var textoInicial = 'Esconder aviso';
var textoFinal   = 'Exibir aviso';

a.href        = '#';
a.id          = 'linkaviso';
a.textContent = textoInicial;

div.insertBefore(a, ul);

a.addEventListener('click', function(event) {
	var ul = this.nextElementSibling;
	if (ul.style.display !== 'none') {
		ul.style.display = 'none';
		this.textContent = textoFinal;
	} else {
		ul.style.display = 'block';
		this.textContent = textoInicial;
	}

	event.preventDefault();
});

function Item (li) {
	var spans  = li.getElementsByTagName('span');
	this.unit  = realParaNumber(spans[0].textContent);
	var input  = li.getElementsByTagName('input')[0];
	this.qnt   = parseInt(input.value, 10);
	this.total = this.unit * this.qnt;
}