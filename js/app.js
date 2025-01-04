function alterarStatus(id){
    // Identifica os objetos no html
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img')
    let botao = gameClicado.querySelector('.dashboard__item__button')


    // Condicional para troca de status do game no html
    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented')
        botao.classList.remove('dashboard__item__button--return')
        botao.innerHTML = 'Alugar'
    } else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--return')
        botao.innerHTML = 'Devolver'
    }
}
