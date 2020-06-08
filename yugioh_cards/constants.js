/**
 * @description The app's constants.
 * @author Lucas Dias 
 * @since June 07th 2020 at 9:10 PM
 * @returns The chosen constant.
 */
function getConstant(key) {
    const constants = {
        fetchNotNeeded: '### API: Cards are up to date.',
        fetchLoading: "Loading...",
        pageHeader: '<img src="https://i.pinimg.com/originals/d8/b3/ca/d8b3cab0265e720ec659fa4c8e429841.png" width="90" height="30" alt="YuGiOh" />',
        jumbotronHeader: 'Yu-Gi-Oh Cards',
        jumbotronBody: 'This is a simple JS Fetch API test which loads YuGiOh\'s cards.',
        cardContainerStart: '<div class="card">',
        cardContainerImageStart: '<img class="card-img-top" width="100" height="320" src=',
        cardContainerImageEnd: '>',
        cardContainerBodyStart: '<div class="card-body">',
        cardContainerBodyEnd: '</div>',
        cardContainerTitleStart: '<h5 class="card-title">',
        cardContainerTitleEnd: '</h5>',
        cardContainerParagraphStart: '<p class="card-text">',
        cardContainerParagraphEnd: '</p>',
        cardContainerEnd: '</div>',
    }
    return constants[key];
}