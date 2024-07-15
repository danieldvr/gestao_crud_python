document.addEventListener("DOMContentLoaded", function() {
    // Máscara para CPF
    var cpfInput = document.getElementById("cpf");
    if (cpfInput) {
        cpfInput.addEventListener("input", function() {
            var cpf = cpfInput.value;
            cpf = cpf.replace(/\D/g, "");
            if (cpf.length > 11) cpf = cpf.slice(0, 11);
            cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
            cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
            cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
        
            cpfInput.value = cpf;
        });
        
        // Evento de foco para aplicar a máscara inicialmente se o campo já estiver preenchido
        cpfInput.addEventListener("focus", function() {
            var cpf = cpfInput.value;
            if (cpf.length === 11) {
                cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
                cpfInput.value = cpf;
            }
        });
    }

    // Máscara para Telefone
    var telefoneInput = document.getElementById("telefone");
    if (telefoneInput) {
        telefoneInput.addEventListener("input", function() {
            var telefone = telefoneInput.value;
            telefone = telefone.replace(/\D/g, "");
            if (telefone.length > 11) telefone = telefone.slice(0, 11);
            telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2");
            telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2");

            telefoneInput.value = telefone;
        });
        
        // Evento de foco para aplicar a máscara inicialmente se o campo já estiver preenchido
        telefoneInput.addEventListener("focus", function() {
            var telefone = telefoneInput.value;
            if (telefone.length === 11) {
                telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
                telefoneInput.value = telefone;
            }
        });
    }

    // Função de validação de e-mail
    function validarEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Função de validação de CPF
    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, "");
        if (cpf.length !== 11) return false;
        // Lógica de validação do CPF aqui (omiti para brevidade)
        return true;
    }

    // Função de validação de Telefone
    function validarTelefone(telefone) {
        telefone = telefone.replace(/\D/g, "");
        return telefone.length === 11;
    }

    // Função para validação do formulário
    window.validarFormulario = function() {
        var nome = document.getElementById("nome").value.trim();
        var email = document.getElementById("email").value.trim();
        var cpf = document.getElementById("cpf").value.trim();
        var telefone = document.getElementById("telefone").value.trim();

        if (nome === "") {
            alert("Por favor, preencha o campo Nome.");
            return false;
        }

        if (email === "" || !validarEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            return false;
        }

        if (cpf === "" || !validarCPF(cpf)) {
            alert("Por favor, insira um CPF válido no formato 999.999.999-99.");
            return false;
        }

        if (telefone === "" || !validarTelefone(telefone)) {
            alert("Por favor, insira um Telefone válido no formato (99) 99999-9999.");
            return false;
        }

        return true;
    }
});
