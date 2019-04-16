//Create the decks from the functions in app.js, and save them to localStorage
var test = loadDecksIntoAllDecks(amazonStudyCards);
saveDecks();

//Check the number of decks in local storage
console.log('localStorage.length', localStorage.length);
var checkLengthOfDecksInLocalStorage = JSON.parse(localStorage.getItem('decks'));
console.log(checkLengthOfDecksInLocalStorage.length);


//Based on the number of decks in local storage, create the number of rows needed


//Create a column

//In the column you want to create the card that represents the deck

//Display the name and description of the deck

//If row is full then display the 'make a new deck' in a new row

//If the row is not full then display the 'make a new deck' in the same row
