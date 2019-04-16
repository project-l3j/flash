'use strict';

// ++++++++++++++++++++++++++++++++++++++++++++
// DATA - Variable declarations and Page Setup
// ++++++++++++++++++++++++++++++++++++++++++++

//temporarily holds the deck information until we push it to allDecks
var tempDeck;

// This will load local storage decks if they exist or it will load hard coded.
loadDecksIntoAllDecks(amazonStudyCards);

// Make the card form invisible till deck is created
document.getElementById('card').style.display='none';
document.getElementById('deckDoneButton').style.display='none';

// ++++++++++++++++++++++++++++++++++++++++++++
// EVENT Handler - Event Handler Functions
// ++++++++++++++++++++++++++++++++++++++++++++

// This function handles form submits for the deck form
function handleDeckFormSubmit(event){
  // Prevent page reload
  event.preventDefault();

  // TODO: Validate and check form data
  // TODO: Validate and make sure deck name doesn't exist already
  let deckName = document.getElementById('deckName').value;
  let deckDescription = document.getElementById('deckDescription').value;

  // This checks to see if the name exists
  if(doesDeckExist(deckName)){
    // Alert for matching deckname
    alert('This deck already exists');
    return;
  }

  // This Code executes if there are no issues with validation
  // Make the deckname form disappear
  document.getElementById('deck').style.display='none';
  document.getElementById('card').style.display='block';
  document.getElementById('deckDoneButton').style.display='block';

  //Create the a Deck class and add it to the list
  tempDeck = new SingleDeck(deckName, deckDescription);
}

// This function handles form submits for the card form
function handleCardFormSubmit(event){
  // Prevent reload
  event.preventDefault();

  // TODO: Validate and check form data
  // TODO: Validate and maybe check for duplicate card names?
  let cardQuestionElement = document.getElementById('cardQuestion');
  let cardAnswerElement = document.getElementById('cardAnswer');

  // Add card to deck
  tempDeck.addCardtoDeck(cardQuestionElement.value, cardAnswerElement.value, 0, 0);

  // Clear answers
  cardQuestionElement.value = '';
  cardAnswerElement.value = '';
}

// This function handles button clicks and pushes the final deck to the allDecks list
// Then it pushes this information into localStorage
function handleDoneButtonClick(event){
  // Add tempDeck to allDecks
  allDecks.push(tempDeck);
  // Push to localstorage
  saveDecks();
  // TODO: do something else(redirect home?)
  window.location.reload();
}

// ++++++++++++++++++++++++++++++++++++++++++++
// EVENT Handlers - add event handlers
// ++++++++++++++++++++++++++++++++++++++++++++

var deckNameForm = document.getElementById('deck');
deckNameForm.addEventListener('submit', handleDeckFormSubmit);

var cardForm = document.getElementById('card');
cardForm.addEventListener('submit',handleCardFormSubmit);

var deckDoneButton = document.getElementById('deckDoneButton');
deckDoneButton.addEventListener('click', handleDoneButtonClick);
