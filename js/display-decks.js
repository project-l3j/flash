//Create the decks from the functions in app.js, and save them to localStorage
var test = loadDecksIntoAllDecks(amazonStudyCards);
saveDecks();

//Check the number of decks in local storage
console.log('localStorage.length', localStorage.length);
var decksInLocalStorage = JSON.parse(localStorage.getItem('decks'));
console.log(decksInLocalStorage.length);


//Based on the number of decks in local storage, create the number of rows needed. decksInLocalStorage % 2
//If the remainder is 0 then number of decks is even
//If the remainder is not 0 then number of decks is odd

var isEven = null;
if (decksInLocalStorage.length % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

if (isEven) {
  var numOfRows = decksInLocalStorage.length / 2;
}

// length of loop: numOfRows

// after loop, add one more row w/ create new deck

for (let i = 0; i < decksInLocalStorage.length; i++) {
  // if even number of decks, create a row
  if (decksInLocalStorage.length % 2 === 0) {
    // create row
    // then append column w/ deck[i]
    // then append column w/ deck[i + 1]
  } 

  
  // then create second row
  // append column w/ 'create new deck' card
}


//Create a column

//In the column you want to create the card that represents the deck

//Display the name and description of the deck

//If row is full then display the 'make a new deck' in a new row

//If the row is not full then display the 'make a new deck' in the same row
