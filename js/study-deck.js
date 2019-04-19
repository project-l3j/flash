'use strict';

// ++++++++++++++++++++++++++++++++++++++++++++
// DATA - Variable declarations and Page Setup
// ++++++++++++++++++++++++++++++++++++++++++++

// Find in localStorage which deck we are using return to index.html if DNE
var deckName = getDeckNameFromLocalStorage('study');
if(!deckName) {
  window.location = 'index.html';
}
// Make sure we have decks loaded
if(allDecks.length === 0) {
  loadDecksIntoAllDecks(amazonStudyCards);
}
// Get the deck we want to study
var workingDeckIndex = indexOfDeck(deckName);
var studyDeck = allDecks[workingDeckIndex];

// Set elements for displaying deck information
document.getElementById('deck-name').innerText = studyDeck.deckName;
document.getElementById('deck-description').innerText = studyDeck.deckDescription;

// Get elements for html manipulation
var cardQuestionElement = document.getElementById('cardQuestion');
var cardAnswerElement = document.getElementById('cardAnswer');
var correctCardButton = document.getElementById('correctButton');
var incorrectCardButton = document.getElementById('incorrectButton');
var flipCard = document.getElementById('card');
var goHomeButton = document.getElementById('homeButton');
var goRetryButton = document.getElementById('retryButton');
var shuffledCards;
var indexOfShuffled = 0;
var delayedIndex;

// Make the card answer invisible till deck is created
cardAnswerElement.style.display='block';

function initStudy() {
  indexOfShuffled = 0;
  // Create array to hold shuffled deck
  shuffledCards = shuffle(studyDeck.deckCards.length);
  //This will hide the home and retry buttons
  correctCardButton.style.display = 'block';
  incorrectCardButton.style.display = 'block';
  goHomeButton.style.display = 'none';
  goRetryButton.style.display = 'none';
  //This will populate the cards
  populateStudyCard(shuffledCards[indexOfShuffled]);
}

initStudy();

console.log(studyDeck);

function populateStudyCard(cardIndex) {
  delayedIndex = cardIndex;
  if (indexOfShuffled >= 0 && indexOfShuffled < shuffledCards.length){ // validate shuffled is ok
    if (cardIndex >= 0 && cardIndex < studyDeck.deckCards.length) { // validate

      // call helper fn to switch display back to question
      setCardToQuestion();

      return true;
    }
    return false;
  }
  return false;
}

function editTextOnTimeOut () {
  cardQuestionElement.textContent = studyDeck.deckCards[delayedIndex].cardQuestion;
  cardAnswerElement.textContent = studyDeck.deckCards[delayedIndex].cardAnswer;
}

// this will make sure that card is displaying question first, not answer
function setCardToQuestion() {
  let element = document.getElementById('card');
  if(element.style.transform === 'rotateX(180deg)') {
    element.style.transform = 'rotateX(0deg)';
    setTimeout(editTextOnTimeOut, 125);
  }else{
    editTextOnTimeOut();
  }
}

function endOfDeck() {
  // Hide old buttons
  correctCardButton.style.display = 'none';
  incorrectCardButton.style.display = 'none';
  // Display new buttons for home and retry
  goHomeButton.style.display = 'block';
  goRetryButton.style.display = 'block';
  saveDecks();
}

// ++++++++++++++++++++++++++++++++++++++++++++
// EVENT Handler - Event Handler Functions
// ++++++++++++++++++++++++++++++++++++++++++++

// This will increment the indexOfShuffled (populate the next card), cardViews and cardCorrect
function handleCorrectButton(event) {
  if(indexOfShuffled < shuffledCards.length) {
    // Increments card correct
    studyDeck.deckCards[shuffledCards[indexOfShuffled]].incrementCardCorrect();
    // Increment card views
    studyDeck.deckCards[shuffledCards[indexOfShuffled]].incrementCardViews();
    // Increment index of shuffled array
    indexOfShuffled++;
    // If Done
    if(indexOfShuffled < shuffledCards.length){
      // Populate the next card
      populateStudyCard(shuffledCards[indexOfShuffled]);
    }else{
      // TODO: Do stuff for end of deck
      endOfDeck();
    }
  } else {
    // TODO: Do stuff for end of deck
    endOfDeck();
  }
}

// This will increment the indexOfShuffled (populate the next card) and cardViews
function handleIncorrectButton(event) {
  if(indexOfShuffled < shuffledCards.length){
    //increment the card views
    studyDeck.deckCards[shuffledCards[indexOfShuffled]].incrementCardViews();
    //increment the index of the shuffled array
    indexOfShuffled++;
    //If Done
    if(indexOfShuffled < shuffledCards.length){
    //populate the next card
      populateStudyCard(shuffledCards[indexOfShuffled]);
    }else{
      endOfDeck();
    }
  }else{
    endOfDeck();
  }
}

function handleHomeButton(event) {
  window.location = 'index.html';
}

// This will allow the user to retry the deck
// This needs to shuffle, this needs to reappear the old correct / incorrect buttons
// Set index of shuffle to 0;
// populate first card
function handleRetryButton(event) {
  initStudy();
}


// ++++++++++++++++++++++++++++++++++++++++++++
// EVENT Handlers - add event handlers
// ++++++++++++++++++++++++++++++++++++++++++++

correctCardButton.addEventListener('click', handleCorrectButton);
incorrectCardButton.addEventListener('click', handleIncorrectButton);
// 2 more for return home and retry
goHomeButton.addEventListener('click', handleHomeButton);
goRetryButton.addEventListener('click', handleRetryButton);

function flip(event){
  var element = event.currentTarget;
  if (element.className === 'card') {
    if(element.style.transform === 'rotateX(180deg)') {
      element.style.transform = 'rotateX(0deg)';
    }
    else {
      element.style.transform = 'rotateX(180deg)';
    }
  }
}
