function Carrinho(elemento) {
	this.itens = [];

	var	elementoItens = elemento.getElementsByTagName('li');
	for (var i = elementoItens.length - 1; i >= 0; i--) {
		this.itens.push(new Item(elementoItens[i]));
	};
}

function Item (li) {
	var strong = li.getElementsByTagName('strong')[0];
	var input  = li.getElementsByTagName('input')[0];
	var spans  = li.getElementsByTagName('span');

	this.codigoProduto = strong.textContent;
	this.quantidade   = parseInt(input.value);
	this.valorUnitario  = realParaNumber(spans[0].textContent);
	// this.valorTotal = this.valorUnitario * this.quantidade;
	this.valorTotal = function () {
		return this.valorUnitario * this.quantidade;
	}
}