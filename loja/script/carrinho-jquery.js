$('#carrinho li form p a').show();
$('#carrinho').on('click', 'li form p a', function(event) {
	var li = $(this).closest('li');
	if (confirm("Excluir?")) {
		li.fadeOut('slow', function () {
			li.remove();
		});
	}
	event.preventDefault();
});
