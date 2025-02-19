//
document.addEventListener("deckReady", () => {
    const data = window.deck;
    const fullCardsArquetype = Math.floor(data.full_cards.arquetype);
    const fullCardsGeneric = Math.floor(data.full_cards.generic)

    const full = fullCardsArquetype + fullCardsGeneric;
    const porcentArquetype = (fullCardsArquetype * 100.0) / full;
    const porcentGeneric = (fullCardsGeneric * 100.0) / full;

    const boxPorcent = document.querySelector("#porcent-arquetype-generic");
    const arquetype = boxPorcent.querySelector("#arquetype-gradient-porcent");
    const generic = boxPorcent.querySelector("#generic-gradient-porcent");

    arquetype.innerText = `ARQUETIPO ${porcentArquetype.toPrecision(4)}%`;
    generic.innerText = `${porcentGeneric.toPrecision(4)}% GENERICO`;

    const pArq = String(porcentArquetype) + "%"; // degub

    const newBackground = `linear-gradient(90deg, var(--cor-purple) ${pArq}, var(--cor-blue))`;
    const newBorder = `1px solid linear-gradient(90deg, var(--cor-purple), var(--cor-blue))`;

    // Alterando diretamente as propriedades
    boxPorcent.style.background = newBackground;
    boxPorcent.style.border = newBorder;
    boxPorcent.style.color = "white";

});