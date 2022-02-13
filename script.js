let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 7) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 8 caracteres'
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        validConfirmSenha = true
    }
})

function cadastrar() {
    if (validNome && validUsuario && validSenha && validConfirmSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuario...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5500/Fomulario-Dark/index.html'
        }, 3000)

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os dados corretamente</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}


btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', () => {
    let inputSenha = document.querySelector('#confirmSenha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})