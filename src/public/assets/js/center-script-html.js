// card center adapter
function alertCardsInvalid() {
    const invalidCards = document.querySelector('#invalid-cards');
    const qtdCards = invalidCards.querySelectorAll('a').length;

    if (qtdCards > 20) {
        invalidCards.classList.add('fit-container');
    } else {
        invalidCards.classList.remove('fit-container');
    }
}

alertCardsInvalid();
