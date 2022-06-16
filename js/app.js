import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {

    // o blur é usando pra quando a gente perde o foco do campo
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})