'use strict';

//Create the decks from the functions in app.js, and save them to localStorage
loadDecksIntoAllDecks(amazonStudyCards);
saveDecks();

// Check the number of decks in local storage
var decksInLocalStorage = JSON.parse(localStorage.getItem('decks'));

// Based on the number of decks in local storage, create the number of rows needed. decksInLocalStorage % 2
// If the remainder is 0 then number of decks is even
// If the remainder is not 0 then number of decks is odd
function createDeckDisplay(){
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
    card.setAttribute('data-id', i);

    var editRow = document.createElement('div');
    editRow.className = 'card-edit';
    var editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.style.display = 'none';
    editRow.appendChild(editButton);

    var cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    var displayName = document.createElement('h2');
    displayName.className = 'title';
    displayName.textContent = decksInLocalStorage[i].deckName;

    var displayDescription = document.createElement('p');
    displayDescription.className = 'description';
    displayDescription.textContent = decksInLocalStorage[i].deckDescription;

    var cardActionRow = document.createElement('div');
    cardActionRow.className = 'card-study';
    var cardCTA = document.createElement('h3');
    cardCTA.textContent = 'Study this deck';
    cardCTA.style.display = 'none';
    cardActionRow.appendChild(cardCTA);

    cardContent.appendChild(displayName);
    cardContent.appendChild(displayDescription);
    card.appendChild(editRow);
    card.appendChild(cardContent);
    card.appendChild(cardActionRow);
    col.appendChild(card);
    row.appendChild(col);

    // add event listener to card for click
    card.addEventListener('click', handleStudyActionOnDeck);

    // add event listeners to card for hover in/out
    card.addEventListener('mouseover', handleCardHoverStart);
    card.addEventListener('mouseleave', handleCardHoverEnd);

    // add event listener to card for edit click
    editButton.addEventListener('click', handleEditActionOnDeck);

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

      var createDeckContentContainer = document.createElement('div');
      createDeckContentContainer.className = 'create-container';

      createDeckContentContainer.appendChild(displayNameCreate);
      createDeckContentContainer.appendChild(displayDescriptionCreate);
      createDeckCard.appendChild(createDeckContentContainer);
      lastCol.appendChild(createDeckCard);

      // add event listener for create deck
      createDeckCard.addEventListener('click', function() {
        window.location = 'create-deck.html';
      });

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
}

// ++++++++++++++++++++++++++++++++++++++++++++
// EVENT Handler - Event Handler Functions
// ++++++++++++++++++++++++++++++++++++++++++++
function handleCardHoverStart() {
  let thisCard = this;
  var editButton = this.children[0].children[0];
  var ctaText = this.children[2].children[0];

  editButton.style.display = 'inline-block';
  ctaText.style.display = 'block';
}

function handleCardHoverEnd() {
  let thisCard = this;
  var editButton = this.children[0].children[0];
  var ctaText = this.children[2].children[0];

  editButton.style.display = 'none';
  ctaText.style.display = 'none';
}

function handleStudyActionOnDeck(){
  let index = this.dataset.id; // grab index from data-id attribute
  saveDeckNameToLocalStorage('study', allDecks[index].deckName);
  window.location = 'study-deck.html';
}

function handleEditActionOnDeck(event) {
  event.stopPropagation();
  let card = this.parentElement;
  let index = card.parentElement.dataset.id; // grab index from data-id attribute
  saveDeckNameToLocalStorage('edit', allDecks[index].deckName);
  window.location = 'edit-deck.html';
}

// ++++++++++++++++++++++++++++++++++++++++++++
// Invoke Functions & Listeners
// ++++++++++++++++++++++++++++++++++++++++++++
createDeckDisplay();

