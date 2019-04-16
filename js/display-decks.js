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
  // card.textContent = decksInLocalStorage[i].deckName;

  var displayName = document.createElement('h2');
  displayName.className = 'title';
  displayName.textContent = decksInLocalStorage[i].deckName;

  var displayDescription = document.createElement('p');
  displayDescription.className = 'description';
  displayDescription.textContent = decksInLocalStorage[i].deckDescription;

  card.appendChild(displayName);
  card.appendChild(displayDescription);
  col.appendChild(card);
  row.appendChild(col);

  if (i === lastIndex) { // check if final time through loop

    var lastCol = document.createElement('div');
    lastCol.className = 'column';

    var createDeckCard = document.createElement('div');
    createDeckCard.className = 'card';
    createDeckCard.id = 'create-deck';

    var displayNameCreate = document.createElement('h2');
    displayNameCreate.className = 'name-create';
    displayNameCreate.textContent = 'Create a New Flashcard Deck';

    var displayDescriptionCreate = document.createElement('p');
    displayDescriptionCreate.className = 'description-create';
    displayDescriptionCreate.textContent = 'Create a deck of flashcards to help you learn anything from languages to math';

    createDeckCard.appendChild(displayNameCreate);
    createDeckCard.appendChild(displayDescriptionCreate);
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

