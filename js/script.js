document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('loginUsername').value;
    const senha = document.getElementById('loginPassword').value;

    /*Checa se o usuário e a senha são validos*/
    if (usuario === 'admin' && senha === 'password') {
    /* Login com sucesso*/
    alert('Logado com Sucesso');  
    } else {
        /* Login Inválido */
        alert('Senha ou Usuário Inválidos')
    }
 });

 document.getElementById('resgistrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const senha = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    /* Checa se todos os campoes estão preenchidos */
    if (usuario && email && senha && confirmPassword) {
        /* Confere se as senhas batem */
        if (senha === confirmPassword) {
        /*Mensagem de Registro */
        alert('Registrado com Sucesso');
        // Reseta o formulário 
        document.getElementById('registrationForm').reset();
    } else {
        // Alerta pela senha não ser igual
        alert('As senhas não coincidem')
    }
    } else {
        // Falta de Preencher os Campos
        alert('Por favor preencha tudo')
    }
 })