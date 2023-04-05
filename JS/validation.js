function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,''); // Remove tudo que não é dígito
    if(cpf == '') return false; // Verifica se o CPF está vazio
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length != 11 || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")
            return false;
    // Verifica se os dígitos verificadores estão corretos
    add = 0;
    for (i=0; i < 9; i ++) add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;
    add = 0;
    for (i = 0; i < 10; i ++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;
    return true;
}

var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  var cpfInput = document.querySelector('#cpf');
  var cpf = cpfInput.value;
  if (!validarCPF(cpf)) {
    // Se o CPF é inválido, previne o envio do formulário e adiciona uma mensagem de erro
    event.preventDefault();
    cpfInput.style.border = '1px solid red'; // adiciona uma borda vermelha para indicar o erro
    alert('CPF inválido! Digite apenas números e verifique se os dígitos estão corretos.');
  } else {
    // Se o CPF é válido, permite o envio do formulário
    cpfInput.style.border = ''; // remove a borda vermelha
  }
});


function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  