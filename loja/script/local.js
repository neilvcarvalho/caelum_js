var input = document.getElementById('input_cep');
input.addEventListener('blur', function () {
	alert('Seu cep será reutilizado!');
	sessionStorage.cep = this.value;
});
if (sessionStorage.cep) {
	input.value = sessionStorage.cep;
}