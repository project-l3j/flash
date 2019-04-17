'use strict';

// ++++++++++++++++++++++++++++++++++++++++++++
// DATA - Variable declarations and Page Setup
// ++++++++++++++++++++++++++++++++++++++++++++

// Find in localStorage which deck we are using return to index.html if DNE
var deckName = getDeckNameFromLocalStorage();
if(!deckName){
  window.location = 'index.html';
}
// Make sure we have decks loaded
if(allDecks.length === 0){
  loadDecksIntoAllDecks(amazonStudyCards);
}
// Get the deck we want to study
var workingDeckIndex = indexOfDeck(deckName);
var studyDeck = allDecks[workingDeckIndex];

// Set elements for displaying deck information
document.getElementById('deckName').innerText = studyDeck.deckName;
document.getElementById('deckDescription').innerText = studyDeck.deckDescription;

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
// Make the card answer invisible till deck is created
cardAnswerElement.style.display='none';

function initStudy(){
  indexOfShuffled = 0;
  // Create array to hold shuffled deck
  shuffledCards = shuffle(studyDeck.deckCards.length);
  //This will hide the home and retry buttons
  correctCardButton.style.display='block';
  incorrectCardButton.style.display='block';
  goHomeButton.style.display='none';
  goRetryButton.style.display='none';
  //This will populate the cards
  populateStudyCard(shuffledCards[indexOfShuffled]);
}

initStudy();

console.log(studyDeck);

function populateStudyCard(cardIndex){
  if(indexOfShuffled >= 0 && indexOfShuffled < shuffledCards.length){
    if(cardIndex >= 0 && cardIndex < studyDeck.deckCards.length)
    {
      cardAnswerElement.textContent = studyDeck.deckCards[cardIndex].cardAnswer;
      cardQuestionElement.textContent = studyDeck.deckCards[cardIndex].cardQuestion;
      return true;
    }
    return false;
  }
  return false;
}

function endOfDeck(){
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
function handleCorrectButton(event){
  if(indexOfShuffled < shuffledCards.length){
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
  }else{
    // TODO: Do stuff for end of deck
    endOfDeck();
  }
}

// This will increment the indexOfShuffled (populate the next card) and cardViews
function handleIncorrectButton(event){
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

//This will display toggle the display of the question and answer
function handleCardFlip(event){
  if (cardAnswerElement.style.display==='none'){
    cardAnswerElement.style.display='block';
    cardQuestionElement.style.display='none';
  }else{
    cardAnswerElement.style.display='none';
    cardQuestionElement.style.display='block';
  }
}

function handleHomeButton(event){
  window.location = 'index.html';
}

// This will allow the user to retry the deck
// This needs to shuffle, this needs to reappear the old correct / incorrect buttons
// Set index of shuffle to 0;
// populate first card
function handleRetryButton(event){
  initStudy();
}


// ++++++++++++++++++++++++++++++++++++++++++++
// EVENT Handlers - add event handlers
// ++++++++++++++++++++++++++++++++++++++++++++

correctCardButton.addEventListener('click', handleCorrectButton);
incorrectCardButton.addEventListener('click', handleIncorrectButton);
flipCard.addEventListener('click', handleCardFlip);
// 2 more for return home and retry
goHomeButton.addEventListener('click', handleHomeButton);
goRetryButton.addEventListener('click', handleRetryButton);

