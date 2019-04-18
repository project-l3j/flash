'use strict';

// check which deck is to be edited, if none redirect
var deckName = getDeckNameFromLocalStorage('edit');
if(!deckName) {
  window.location = 'index.html';
}

// Make sure we have decks loaded
if(allDecks.length === 0) {
  loadDecksIntoAllDecks(amazonStudyCards);
}

// Get the deck we want to study
var workingDeckIndex = indexOfDeck(deckName);
var editDeck = allDecks[workingDeckIndex];

// load deck info
console.log('editDeck', editDeck);

// populate deck name and description in dom
var deckNameElement = document.getElementById('deck-name');
var deckDescElement = document.getElementById('deck-description');
deckNameElement.textContent = editDeck.deckName;
deckDescElement.textContent = editDeck.deckDescription;

function loadCards() {
  // load cards
  var container = document.getElementById('container');
  var cardsArray = editDeck.deckCards;

  for (let i = 0; i < cardsArray.length; i++) {

    // edit container
    var editContainer = document.createElement('div');
    editContainer.className = 'edit-container';

    // edit card
    var card = document.createElement('div');
    card.className = 'card';

    // card info
    var cardQuestion = document.createElement('h3');
    cardQuestion.textContent = cardsArray[i].cardQuestion;
    var cardAnswer = document.createElement('h2');
    cardAnswer.textContent = cardsArray[i].cardAnswer;

    // button container
    var buttonContainer = document.createElement('div');
    buttonContainer.classList = 'button-container';

    // buttons
    var editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.textContent = 'Edit';
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';

    // append
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    card.appendChild(cardAnswer);
    card.appendChild(cardQuestion);
    editContainer.appendChild(card);
    editContainer.appendChild(buttonContainer);
    container.appendChild(editContainer);

    // add event listeners
    editContainer.addEventListener('mouseover', handleCardHoverStart);
    editContainer.addEventListener('mouseleave', handleCardHoverEnd);
  }
}

// event handlers
function handleCardHoverStart() {
  let thisCard = this;
  var buttons = this.children[1];
  // var editButton = this.children[1].children[0];
  // var deleteButton = this.children[1].children[1];

  // editButton.style.display = 'inline-block';
  // deleteButton.style.display = 'inline-block';
  buttons.style.display = 'block';
}

function handleCardHoverEnd() {
  let thisCard = this;
  var buttons = this.children[1];
  // var editButton = this.children[1].children[0];
  // var deleteButton = this.children[1].children[1];

  // editButton.style.display = 'inline-block';
  // deleteButton.style.display = 'inline-block';
  buttons.style.display = 'none';
}


// function calls
loadCards();
