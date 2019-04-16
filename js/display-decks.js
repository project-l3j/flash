//Create the decks from the functions in app.js, and save them to localStorage
var test = loadDecksIntoAllDecks(amazonStudyCards);
saveDecks();

// Check the number of decks in local storage
var decksInLocalStorage = JSON.parse(localStorage.getItem('decks'));

// Based on the number of decks in local storage, create the number of rows needed. decksInLocalStorage % 2
// If the remainder is 0 then number of decks is even
// If the remainder is not 0 then number of decks is odd

var mainElement = document.querySelector('main');

for (let i = 0; i < decksInLocalStorage.length; i++) {

  var lastIndex = decksInLocalStorage.length - 1;

  if (i % 2 === 0) { // if even
    var row = document.createElement('div');
    row.className = 'row';
    mainElement.appendChild(row);
  }

  var col = document.createElement('div');
  col.className = 'column';

  var card = document.createElement('div');
  card.className = 'card';
  card.id = decksInLocalStorage[i].deckName;

  col.appendChild(card);
  row.appendChild(col);

  if (i === lastIndex) { // check if final time through loop

    var lastCol = document.createElement('div');
    lastCol.className = 'column';

    var createDeckCard = document.createElement('div');
    createDeckCard.className = 'card';
    createDeckCard.id = 'create-deck';
    lastCol.appendChild(createDeckCard);

    if (i % 2 !== 0) { // if last index is even
      var lastRow = document.createElement('div');
      lastRow.className = 'row';
      lastRow.appendChild(lastCol);
      mainElement.appendChild(lastRow);
    } else { // if last index is odd
      row.appendChild(lastCol);
      mainElement.appendChild(row);
    }
  }
}


// Create a column

// In the column you want to create the card that represents the deck

// Display the name and description of the deck

// If row is full then display the 'make a new deck' in a new row

// If the row is not full then display the 'make a new deck' in the same row
