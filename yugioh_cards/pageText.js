/**
 * @description Gets page's elements and push them into an array.
 * @author Lucas Dias 
 * @since June 07th 2020 at 9:45 PM
 */
function getPageElements() {
    const pageElements = populatePageElements();  
    populatePageText(pageElements);
}

/**
 * @description Return the page's elements.
 * @author Lucas Dias 
 * @since June 07th 2020 at 9:49 PM
 * @returns An array of objects
 */
function populatePageElements() {
    const pageElements = [];
    let pageHeader = {
        index: document.getElementById('header'),
        key: 'pageHeader'
    };
    let jumbotronHeader = {
        index: document.getElementsByTagName('h1')[0],
        key: 'jumbotronHeader'
    }
    let jumbotronBody = {
        index: document.getElementsByTagName('p')[0],
        key: 'jumbotronBody'
    }
    pageElements.push(
        pageHeader,
        jumbotronBody,
        jumbotronHeader
        );
        
    return pageElements;
}

/**
 * @description Gets the proper constant text for each page element.
 * @author Lucas Dias 
 * @since June 07th 2020 at 10:02 PM
 */
function populatePageText(pageElements) {    
    pageElements.forEach(element => {
        element.index.innerHTML += getConstant(element.key);
    });
}