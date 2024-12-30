// card center adapter
function adapterMainDeck() {
    const mainDeckBox = document.querySelector('.main-deck');
    const qtdCards = mainDeckBox.querySelectorAll('a').length;

    let MessageError = 'Decklist incorreta no "Main", possui - cards!';
    if (qtdCards > 40 & qtdCards < 61) {
        mainDeckBox.classList.add('fit-container');
    } else if (qtdCards > 60) {
        mainDeckBox.classList.add('fit-container');
        window.alert(MessageError.replace('-', qtdCards.toString()));
    } else {
        mainDeckBox.classList.remove('fit-container');
    }
}

function adapterExtraDeckCards() {
    const extraDeck = document.querySelector('.extra-deck');
    const qtdCards = extraDeck.querySelectorAll('a').length;

    let MessageError = 'Decklist incorreta no "Extra", possui - cards!';
    if (qtdCards > 10 & qtdCards < 16) {
        extraDeck.classList.add('fit-container');
    } else if (qtdCards > 15) {
        extraDeck.classList.add('fit-container');
        window.alert(MessageError.replace('-', qtdCards.toString()));
    } else {
        extraDeck.classList.remove('fit-container');
    }
}

function adapterSideDeckCards() {
    const sideDeck = document.querySelector('.side-deck');
    const qtdCards = sideDeck.querySelectorAll('a').length;

    let MessageError = 'Decklist incorreta no "Side", possui - cards!';
    if (qtdCards > 10 & qtdCards < 16) {
        sideDeck.classList.add('fit-container');
    } else if (qtdCards > 15) {
        sideDeck.classList.add('fit-container');
        window.alert(MessageError.replace('-', qtdCards.toString()));
    } else {
        sideDeck.classList.remove('fit-container');
    }
}

adapterMainDeck();
adapterExtraDeckCards();
adapterSideDeckCards();
