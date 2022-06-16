import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input')
const args = {
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
  };

inputs.forEach(input => {
    if(input.dataset.tipo === 'preco') {
        SimpleMaskMoney.setMask(input, args)
    }

    // o blur é usando pra quando a gente perde o foco do campo
    input.addEventListener('blur', (evento) => {

        valida(evento.target)
    })
})