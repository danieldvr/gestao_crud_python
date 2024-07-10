document.addEventListener('DOMContentLoaded', function() {
    // Máscara para CPF
    var cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', function() {
        var cpf = cpfInput.value;
        cpf = cpf.replace(/\D/g, ''); // Remove tudo que não é dígito
        if (cpf.length > 11) cpf = cpf.slice(0, 11);
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        cpfInput.value = cpf;
    });

    // Máscara para Telefone
    var telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function() {
        var telefone = telefoneInput.value;
        telefone = telefone.replace(/\D/g, ''); // Remove tudo que não é dígito
        if (telefone.length > 11) telefone = telefone.slice(0, 11);
        telefone = telefone.replace(/(\d{2})(\d)/, '($1) $2');
        telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2');
        telefoneInput.value = telefone;
    });

    // Função para validação de E-mail
    function validarEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Função para validação de CPF
    function validarCPF(cpf) {
        var re = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return re.test(cpf);
    }

    // Função para validação de Telefone
    function validarTelefone(telefone) {
        var re = /^\(\d{2}\) \d{5}-\d{4}$/;
        return re.test(telefone);
    }

    // Função para validação do formulário
    window.validarFormulario = function() {
        var nome = document.getElementById('nome').value.trim();
        var email = document.getElementById('email').value.trim();
        var cpf = document.getElementById('cpf').value.trim();
        var telefone = document.getElementById('telefone').value.trim();

        if (nome === '') {
            alert('Por favor, preencha o campo Nome.');
            return false;
        }

        if (email === '' || !validarEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return false;
        }

        if (cpf === '' || !validarCPF(cpf)) {
            alert('Por favor, insira um CPF válido no formato 999.999.999-99.');
            return false;
        }

        if (telefone === '' || !validarTelefone(telefone)) {
            alert('Por favor, insira um Telefone válido no formato (99) 99999-9999.');
            return false;
        }

        return true;
    }
});



