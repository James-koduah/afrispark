let tagspace = document.getElementById('tags')
let url = new URL(window.location.href)
function capitalizeWords(inputString) {
    // Split the input string into an array of words
    const words = inputString.split('_');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        // Check if the word is not empty
        if (word.length > 0) {
            // Capitalize the first letter and concatenate it with the rest of the word
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
            // If the word is empty, return it as is
            return word;
        }
    });

    // Join the capitalized words back into a single string
    const result = capitalizedWords.join(' ');

    return result;
}
let parms = url.searchParams;
let tags = parms.get('tags')
tags = tags.split(' ')

for (let tag of tags){
    let div = document.createElement('div')
    let text = capitalizeWords(tag)
    div.className = 'filter'
    div.innerText = text
    tagspace.appendChild(div)
}