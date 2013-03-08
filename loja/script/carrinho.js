var a        = document.createElement("a");
var div      = document.getElementById('principal');
var ul       = div.firstElementChild;


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

$('#carrinho li span[id$=valor_unit]').each(function () {
	var $spanValorUnitario = $(this);

	var valorUnitario = realParaNumber($spanValorUnitario.text());
	var $li = $spanValorUnitario.closest('li');
	$li.data('valor', valorUnitario);
});

$('#carrinho').on('keyup', 'input[type=text]', function (event) {
	var $input             = $(this);
	var $li                = $(this).closest('li');
	var $spanValorTotal    = $li.find('span[id$=_valor_total]');

	var quantidade = parseInt($input.val(), 10);
	if (!quantidade) quantidade = 0
	var valorUnitario = $li.data('valor');
	var total         = quantidade * valorUnitario;

	$spanValorTotal.text(numberParaReal(total));
});