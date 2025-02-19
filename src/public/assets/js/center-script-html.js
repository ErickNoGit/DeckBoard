// 
document.addEventListener("deckReady", () => {
    const data = window.deck;

    const boxArquetype = document.querySelector("#name-arquetype");
    const paragraph = boxArquetype.querySelector(".name");
    paragraph.setAttribute("style", "font-weight: bold;")
    paragraph.innerText = data.arquetype;
    
    const arquetypeFull = document.querySelector("#box-value-cards-arquetype");
    arquetypeFull.innerText = data.full_cards.arquetype;

    const genericFull = document.querySelector("#box-value-cards-generic");
    genericFull.innerText = data.full_cards.generic;

    const deckFull = document.querySelector("#box-value-cards-deck");
    deckFull.innerText = data.full_cards.deck;

    const mainFull = document.querySelector("#box-value-cards-main");
    mainFull.innerText = data.full_cards.main;
    
    const extraFull = document.querySelector("#box-value-cards-extra");
    extraFull.innerText = data.full_cards.extra;
    
    const sideFull = document.querySelector("#box-value-cards-side");
    sideFull.innerText = data.full_cards.side;

});

// Create a list of invalid cards based on the event
document.addEventListener("deckReady", (event) => {
    const data = event.detail;
    const codCardInvalidArquetype = data.cards_invalids.cod_arquetype;
    const codCardInvalidBanlist = data.cards_invalids.cod_banlist;
    const uniqueMerged = [
        ...new Set([...codCardInvalidArquetype, ...codCardInvalidBanlist])
    ];

    const htmlDefault = `
        <a href="" id="|" class="invalid-img" target="_blank" name="">
            <img src="./public/img/pics/|.jpg" alt="|" style="border: 2px solid #FA39D1;"/>
        </a>
    `;

    const htmlsArquetype = uniqueMerged.map(cod => {
        return htmlDefault.replace(/\|/g, String(cod));
    });

    const boxCardInvalids = document.querySelector('#invalid-cards');
    boxCardInvalids.innerHTML = htmlsArquetype.join("");

    const main = data.decklist.deck.main;
    const extra = data.decklist.deck.extra;
    const side = data.decklist.deck.side;

    const cardsUnique = [...new Set([...main, ...extra, ...side])];

    const idValid = cardsUnique.filter((card) => {
        if (uniqueMerged.includes(card.id)) return card;
    })

    const cards = boxCardInvalids.querySelectorAll(".invalid-img");
    cards.forEach((card) => {
        const matchingCard = idValid.find(
            validCard => String(validCard.id) === String(card.id)
        );

        if (matchingCard) {
            card.setAttribute('href', matchingCard.ygoprodeck_url);
            card.setAttribute('name', matchingCard.name);
            card.setAttribute('effect', matchingCard.desc);
        }
    });

    // regulates the container's css if it exceeds the limit
    const qtdCards = boxCardInvalids.querySelectorAll('a').length;
    if (qtdCards > 20) {
        boxCardInvalids.classList.add('fit-container');
    } else {
        boxCardInvalids.classList.remove('fit-container');
    }
});

