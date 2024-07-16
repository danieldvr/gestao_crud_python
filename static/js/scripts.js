function inicializarMascaras() {
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

        telefoneInput.addEventListener("focus", function() {
            var telefone = telefoneInput.value;
            if (telefone.length === 11) {
                telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
                telefoneInput.value = telefone;
            }
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    inicializarMascaras();

    const observer = new MutationObserver(function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                inicializarMascaras();
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
