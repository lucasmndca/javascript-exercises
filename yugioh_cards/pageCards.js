/**
 * @description Gets all cards retrieved from the API.
 * @author Lucas Dias 
 * @since June 07th 2020 at 10:11 PM
 */
function getPageCards() {
    let cards = JSON.parse(sessionStorageGet('CARDS'));
    initializeCardsPopulation(cards.data);
}

/**
 * @description Starts populating each card (Card picture) onto the page.
 * @author Lucas Dias 
 * @since June 07th 2020 at 10:15 PM
 */
function initializeCardsPopulation(cards) {
    const pageBody = document.getElementById('pageBody');
    cards.forEach(card => {
        buildAndPopulateCardContainer(card, pageBody);
    });
}

/**
 * @description Gets the necessary constants so that the cards may be properly displayed.
 * @author Lucas Dias 
 * @since June 07th 2020 at 10:21 PM
 */
function buildAndPopulateCardContainer(card, pageBody) {
    const cardContainerStart = getConstant('cardContainerStart');
    const cardContainerImageStart = getConstant('cardContainerImageStart');
    const cardContainerImageEnd = getConstant('cardContainerImageEnd');
    const cardContainerEnd = getConstant('cardContainerEnd');
    
    pageBody.innerHTML +=
        cardContainerStart
        + populateCardImage(card, cardContainerImageStart, cardContainerImageEnd)
        + cardContainerEnd;
}

/**
 * @description Returns each card's picture.
 * @author Lucas Dias 
 * @since June 07th 2020 at 10:29 PM
 * @returns A picture
 */
function populateCardImage(card, cardContainerImageStart, cardContainerImageEnd) {
    return cardContainerImageStart
        + card.card_images[0].image_url
        + cardContainerImageEnd;
}