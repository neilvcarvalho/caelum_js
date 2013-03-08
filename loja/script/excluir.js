var ul = document.getElementById('carrinho');
var forms = ul.getElementsByTagName('form');

for (var i = forms.length - 1; i >= 0; i--) {
	var p = forms[i].getElementsByTagName('p')[0];
	var a = document.createElement('a');

	a.href        = '#';
	a.textContent = 'Excluir';
	p.insertBefore(a, undefined);
};





// document.insertBefore(a, );