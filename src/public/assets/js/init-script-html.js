// Cards center adapter
function adapterMainDeckCards(qtdCards) {
    const mainDeckBox = document.querySelector('.main-deck');

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

function adapterAdditionalDeckCards(qtdCards, selector) {
    const additionalDeck = document.querySelector(selector);

    let MessageError = `Decklist incorreta no "${selector}", possui - cards!`;
    if (qtdCards > 10 & qtdCards < 16) {
        additionalDeck.classList.add('fit-container');
    } else if (qtdCards > 15) {
        additionalDeck.classList.add('fit-container');
        window.alert(MessageError.replace('-', qtdCards.toString()));
    } else {
        additionalDeck.classList.remove('fit-container');
    }
}

function montarDeckList(main, extra, side) {
    let htmlBase = '<a href="" id="|" class="block-img" target="_blank"><img src="./public/img/pics/|.jpg" alt="|"/></a>'
    const htmlArrayMain = main.map(cod => htmlBase.replace(/\|/g, cod));
    const htmlArrayExtra = extra.map(cod => htmlBase.replace(/\|/g, cod));
    const htmlArraySide = side.map(cod => htmlBase.replace(/\|/g, cod));

    const mainDeck = document.querySelector(".main-deck");
    const extraDeck = document.querySelector(".extra-deck");
    const sideDeck = document.querySelector(".side-deck");

    mainDeck.innerHTML = htmlArrayMain.join(" ");
    extraDeck.innerHTML = htmlArrayExtra.join(" ");
    sideDeck.innerHTML = htmlArraySide.join(" ");

    // Adjust CSS decklist
    adapterMainDeckCards(htmlArrayMain.length);
    adapterAdditionalDeckCards(htmlArrayExtra.length, '.extra-deck');
    adapterAdditionalDeckCards(htmlArraySide.length, '.side-deck');
}


// Function event global
document.addEventListener("deckReady", (event) => {
    const dados = event.detail;
    const main = dados.decklist.deck.main.map(obj => new Object(obj));
    const extra = dados.decklist.deck.extra;
    const side = dados.decklist.deck.side;

    const codCardsBanlist = dados.cards_banlist_no_deck.cod_condition.map(c => c.split(':'));
    const cardBanlistLimit = codCardsBanlist.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {})

    const arrayCodMain = dados.decklist.cod.main;
    const arrayCodExtra = dados.decklist.cod.extra;
    const arrayCodSide = dados.decklist.cod.side;
    montarDeckList(arrayCodMain, arrayCodExtra, arrayCodSide);

    const mainDeck = document.querySelector(".main-deck");
    const linkCards = mainDeck.querySelectorAll('.block-img');

    if (linkCards.length > 0) {
        linkCards.forEach((link, index) => {
            const card = main[index];

            const idOficial = String(card.id);
            const hrefOficial = card.ygoprodeck_url;
            const nameOficial = card.name;
            const descricao = card.desc;

            link.href = hrefOficial;
            link.setAttribute('name', nameOficial);
            link.setAttribute('effect', descricao);

            const imgCard = link.querySelector('img');
            let color = '';
            if (cardBanlistLimit.hasOwnProperty(idOficial)) {
                const valor = cardBanlistLimit[idOficial];
                switch (valor) {
                    case '0':
                        color = "#E00101"; // red
                        link.setAttribute('limitation', 'Forbidden');
                        break;
                    case '1':
                        color = "#E69D1A"; // orange
                        link.setAttribute('limitation', 'Limited');
                        break;
                    case '2':
                        color = "#5cb4fc"; // blue
                        link.setAttribute('limitation', 'Semi-Limited');
                        break;
                    case '3':
                        color = "#19E61B"; // green
                        link.setAttribute('limitation', 'Unlimited');
                        break;
                    default:
                        color = "";
                }
                if (color) imgCard.style.border = `2px solid ${color}`;
            }
        });
    }

    const extraDeck = document.querySelector(".extra-deck");
    const linkCardsExtra = extraDeck.querySelectorAll('.block-img');

    if (linkCardsExtra.length > 0) {
        linkCardsExtra.forEach((link, index) => {
            const card = extra[index];

            const idOficial = String(card.id);
            const hrefOficial = card.ygoprodeck_url;
            const nameOficial = card.name;
            const descricao = card.desc;

            link.href = hrefOficial;
            link.setAttribute('name', nameOficial);
            link.setAttribute('effect', descricao);

            const imgCard = link.querySelector('img');
            let color = '';
            if (cardBanlistLimit.hasOwnProperty(idOficial)) {
                const valor = cardBanlistLimit[idOficial];
                switch (valor) {
                    case '0':
                        color = "#E00101"; // red
                        link.setAttribute('limitation', 'Forbidden');
                        break;
                    case '1':
                        color = "#E69D1A"; // orange
                        link.setAttribute('limitation', 'Limited');
                        break;
                    case '2':
                        color = "#5cb4fc"; // blue
                        link.setAttribute('limitation', 'Semi-Limited');
                        break;
                    case '3':
                        color = "#19E61B"; // green
                        link.setAttribute('limitation', 'Unlimited');
                        break;
                    default:
                        color = "";
                }
                if (color) imgCard.style.border = `2px solid ${color}`;
            }
        });
    }

    const sideDeck = document.querySelector(".side-deck");
    const linkCardsSide = sideDeck.querySelectorAll('.block-img');

    if (linkCardsSide.length > 0) {
        linkCardsSide.forEach((link, index) => {
            const card = side[index];

            const idOficial = String(card.id);
            const hrefOficial = card.ygoprodeck_url;
            const nameOficial = card.name;
            const descricao = card.desc;

            link.href = hrefOficial;
            link.setAttribute('name', nameOficial);
            link.setAttribute('effect', descricao);

            const imgCard = link.querySelector('img');
            let color = '';
            if (cardBanlistLimit.hasOwnProperty(idOficial)) {
                const valor = cardBanlistLimit[idOficial];
                switch (valor) {
                    case '0':
                        color = "#E00101"; // red
                        link.setAttribute('limitation', 'Forbidden');
                        break;
                    case '1':
                        color = "#E69D1A"; // orange
                        link.setAttribute('limitation', 'Limited');
                        break;
                    case '2':
                        color = "#5cb4fc"; // blue
                        link.setAttribute('limitation', 'Semi-Limited');
                        break;
                    case '3':
                        color = "#19E61B"; // green
                        link.setAttribute('limitation', 'Unlimited');
                        break;
                    default:
                        color = "";
                }
                if (color) imgCard.style.border = `2px solid ${color}`;
            }
        });
    }
});
