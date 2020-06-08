/**
 * Thanks to YuGiOh Pro Deck for making their API available!
 * https://db.ygoprodeck.com/api-guide/
 */

/**
 * @description Initializes the necessary functions so the app may start running
 * @author Lucas Dias 
 * @since June 07th 2020 at 7:26 PM
 */
function initializeApp() {
    initializeApiUrl();
    fetchApi();
    getPageElements();
    getPageCards();
}

/**
 * @description Initializes the API's URL according to the chosen filter.
 * @author Lucas Dias 
 * @since June 07th 2020 at 7:29 PM
 */
function initializeApiUrl() {
    let url = !sessionStorageGet('NEW_URL') 
        ? sessionStorageGet('APP_URL')
        : JSON.parse(sessionStorageGet('NEW_URL'));

    if (!url) 
        url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes'

    const API_URL = url;
    sessionStorageSet("API_URL", API_URL);
}

/**
 * @description Fetches YuGiOh Pro Deck's API.
 * @author Lucas Dias 
 * @since June 07th 2020 at 8:44 PM
 */
function fetchApi() {
    const API_URL = JSON.parse(sessionStorageGet('API_URL'));
    if (!sessionStorageGet('CARDS')) {
        displayLoadingScreen();

        fetch(API_URL, { method: 'get' })
            .then(res => {
                res.json()
                    .then(cards => {
                        sessionStorageSet('CARDS', cards);
                        location.reload();
                    })
            })
    } else {
        console.log(getConstant('fetchNotNeeded'));
    }
}

/**
 * @description Updates the card list once they're sorted.
 * @author Lucas Dias 
 * @since June 07th 2020 at 9:24 PM
 */
function clearAndUpdateCardArchetype(archetype) {
    sessionStorage.clear();
    const urlBase = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?';
    const NEW_URL = urlBase.concat(archetype.options[archetype.selectedIndex].value);

    sessionStorageSet("NEW_URL", NEW_URL);
    location.reload();
}

/**
 * @description Inserts data into the session storage as String.
 * @author Lucas Dias 
 * @since June 07th 2020 at 7:19 PM
 */
function sessionStorageSet(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

/**
 * @description Retrieves data from session storage.
 * @author Lucas Dias 
 * @since June 07th 2020 at 7:21 PM
 */
function sessionStorageGet(key) {
    return sessionStorage.getItem(key);
}

/**
 * @description Displays a loading message while the cards aren't fully loaded.
 * @author Lucas Dias 
 * @since June 07th 2020 at 9:24 PM
 */
function displayLoadingScreen() {
    let target = document.getElementById('pageBody');
    target.innerHTML = getConstant('fetchLoading');
}


