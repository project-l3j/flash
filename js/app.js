'use strict';

var leadershipCards = {
  deckName : 'Amazon Leadership Principles',
  deckDescription : 'Cards to help educate on the Amazon leadership priciples',
  deckCards : [{
    cardAnswer : 'Customer Obsession',
    cardQuestion : 'Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust. Although leaders pay attention to competitors, they obsess over customers.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Ownership',
    cardQuestion : 'Leaders are owners. They think long term and don’t sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say “that’s not my job".',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Invent and Simplify',
    cardQuestion : 'Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by “not invented here". As we do new things, we accept that we may be misunderstood for long periods of time.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Are Right, A Lot',
    cardQuestion : 'Leaders are right a lot. They have strong judgment and good instincts. They seek diverse perspectives and work to disconfirm their beliefs.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Learn and Be Curious',
    cardQuestion : 'Leaders are never done learning and always seek to improve themselves. They are curious about new possibilities and act to explore them.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Hire and Develop the Best',
    cardQuestion : 'Leaders raise the performance bar with every hire and promotion. They recognize exceptional talent, and willingly move them throughout the organization. Leaders develop leaders and take seriously their role in coaching others. We work on behalf of our people to invent mechanisms for development like Career Choice.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Insist on the Highest Standards',
    cardQuestion : 'Leaders have relentlessly high standards - many people may think these standards are unreasonably high. Leaders are continually raising the bar and drive their teams to deliver high quality products, services and processes. Leaders ensure that defects do not get sent down the line and that problems are fixed so they stay fixed.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Think Big',
    cardQuestion : 'Thinking small is a self-fulfilling prophecy. Leaders create and communicate a bold direction that inspires results. They think differently and look around corners for ways to serve customers.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Bias for Action',
    cardQuestion : 'Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Frugality',
    cardQuestion : 'Accomplish more with less. Constraints breed resourcefulness, self-sufficiency and invention. There are no extra points for growing headcount, budget size or fixed expense.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Earn Trust',
    cardQuestion : 'Leaders listen attentively, speak candidly, and treat others respectfully. They are vocally self-critical, even when doing so is awkward or embarrassing. Leaders do not believe their or their team’s body odor smells of perfume. They benchmark themselves and their teams against the best.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Dive Deep',
    cardQuestion : 'Leaders operate at all levels, stay connected to the details, audit frequently, and are skeptical when metrics and anecdote differ. No task is beneath them.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Have Backbone; Disagree and Commit',
    cardQuestion : 'Leaders are obligated to respectfully challenge decisions when they disagree, even when doing so is uncomfortable or exhausting. Leaders have conviction and are tenacious. They do not compromise for the sake of social cohesion. Once a decision is determined, they commit wholly.',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Deliver Results',
    cardQuestion : 'Leaders focus on the key inputs for their business and deliver them with the right quality and in a timely fashion. Despite setbacks, they rise to the occasion and never settle.',
    cardViews : '0',
    cardCorrect : '0'
  }]
};
var awsCardInformation = {
  deckName : 'AWS Cards',
  deckDescription : 'Cards to help understand the different AWS tools',
  deckCards: [{
    cardAnswer : 'EC2',
    cardQuestion :  'Amazon Virtual Servers	',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'IAM',
    cardQuestion :  'Users, Keys and Certs',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'S3',
    cardQuestion :  'Amazon Unlimited FTP Server',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'VPC',
    cardQuestion :  'Amazon Virtual Colocated Rack',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Lambda',
    cardQuestion :  'AWS App Scripts',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'API Gateway',
    cardQuestion :  'API Proxy',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'RDS',
    cardQuestion :  'Amazon SQL',
    cardViews : '0',
    cardCorrect : '0'
  },{
    cardAnswer : 'Route53',
    cardQuestion :  'Amazon DNS + Domains',
    cardViews : '0',
    cardCorrect : '0'
  }]
};

var amazonStudyCards = [leadershipCards, awsCardInformation, leadershipCards];

//Decks is the array that holds all of the decks
var allDecks = [];

//Constructor Function for Cards
function Card(cardQuestion, cardAnswer, cardViews = 0, cardCorrect = 0) {
  this.cardQuestion = cardQuestion;
  this.cardAnswer = cardAnswer;
  this.cardViews = cardViews;
  this.cardCorrect = cardCorrect;

  // This function will incrememt based on the number of views
  this.incrementCardViews = function(){
    this.cardViews++;
  };

  // This function will increment the number of times the card was guess correctly
  this.incrementCardCorrect = function(){
    this.cardCorrect++;
  };

  // This function will reset the cards stats
  this.cardCounterReset = function(){
    this.cardCorrect = 0;
    this.cardViews = 0;
  };
}

// Constructor Function for Decks
function SingleDeck(deckName, deckDescription) {
  this.deckName = deckName;
  this.deckDescription = deckDescription;
  this.deckCards = [];

  // This function adds a card to the deck by creating it based off use parameters
  // Then pushing it to the list of deckCards for this specific deck
  this.addCardtoDeck = function(cardQuestion, cardAnswer, cardViews = 0, cardCorrect = 0){
    var addNewCard = new Card(cardQuestion, cardAnswer, cardViews, cardCorrect);
    this.deckCards.push(addNewCard);
  };

  // This will remove the card based on the Index which should be relative
  // Since cardAnswer couod have duplicates using that wont produce perfec tresults
  // If the index is valid it will delete whatever is in that index
  this.removeCardFromDeck = function(indexOfCard){
    if(indexOfCard >= 0 && indexOfCard < this.deckCards.length){
      this.deckCards.splice(indexOfCard, 1);
      return true;
    }
    return false;
  };

  // This will edit the card based on the Index which should be relative
  // If the index given is valid it will edit that specific card.
  this.editCardFromDeck = function(indexOfCard, editedCardQuestion, editedCardAnswer){
    if(indexOfCard >= 0 && indexOfCard < this.deckCards.length){
      this.deckCards[indexOfCard].cardQuestion = editedCardQuestion;
      this.deckCards[indexOfCard].cardAnswer = editedCardAnswer;
      return true;
    }
    return false;
  };

}

// Creates a Deck From the DeckObject
function createDeckFromObject(deckObject){
  if(!deckObject || deckObject.length === 0) return;
  //create a new deck
  var newDeck = new SingleDeck(deckObject.deckName, deckObject.deckDescription);

  //this loop populates the deck of cards
  let numOfCards = deckObject.deckCards.length;
  for(let i = 0; i<numOfCards; i++){
    let cardQuestion = deckObject.deckCards[i].cardQuestion;
    let cardAnswer = deckObject.deckCards[i].cardAnswer;
    let cardViews = deckObject.deckCards[i].cardViews;
    let cardCorrect = deckObject.deckCards[i].cardCorrect;
    newDeck.addCardtoDeck(cardQuestion, cardAnswer, cardViews, cardCorrect);
  }
  return newDeck;
}

// For each deck object, turn it into a class(constructor) and push it into the allDecks array
function loadDecksIntoAllDecks(studyCardArray){
  //if local storage exists and contains information store that into study_card_array (this will overwrite the default value)
  let deckToLoad;
  if(localStorage.length > 0 ){
    deckToLoad = JSON.parse(localStorage.getItem('decks'));
  } else{
    deckToLoad = studyCardArray;
  }
  //convert objects to classes
  allDecks = [];
  let numOfDeckObjects = deckToLoad.length;
  for(let i=0; i < numOfDeckObjects; i++){
    let tempDeck = createDeckFromObject(deckToLoad[i]);
    allDecks.push(tempDeck);
  }
}

// This will save all decks to local storage
function saveDecks(){
  if(localStorage){
    localStorage.setItem('decks', JSON.stringify(allDecks));
  }
}

// This will check and see if the deck exists before adding.
function doesDeckExist(deckName){
  let deckLength = allDecks.length;
  for(let i = 0; i < deckLength; i++){
    // If there is a match of a deckName
    if(allDecks[i].deckName === deckName){
      return true;
    }
  }
  // Return false if you made it through without finding a match
  return false;
}

// This will check and see if the deck exists before adding.
function indexOfDeck(deckName){
  let deckLength = allDecks.length;
  for(let i = 0; i < deckLength; i++){
    // If there is a match of a deckName
    if(allDecks[i].deckName === deckName){
      return i;
    }
  }
  // Return false if you made it through without finding a match
  return -1;
}

// This function will remove a deck based off name
// Names must be unique so we can use this over ID
function removeDeckFromDecks(deckName){
  let indexToRemove = indexOfDeck(deckName);
  if(indexToRemove >= 0){
    // Remove item from list
    allDecks.splice(indexToRemove, 1);
    // Save to localstorage to remove backup
    saveDecks();
    return true;
  }
  //if nothing was found to remove
  return false;
}

// This will shuffle the cards for studying
function shuffle(sizeOfDeck){
  let shuffledArray = [];
  let unshuffledArray = [];
  // Creates ordered deck
  for (let index = 0; index < sizeOfDeck; index++) {
    unshuffledArray[index] = index;
  }
  while(unshuffledArray.length > 0) {
    // Get random number
    let randomIndex = Math.floor(Math.random() * unshuffledArray.length);
    // Push index to shuffled
    shuffledArray.push(unshuffledArray[randomIndex]);
    // Remove from unshuffled
    unshuffledArray.splice(randomIndex, 1);
  }
  return shuffledArray;
}

function saveDeckNameToLocalStorage(deckName){
  if(localStorage){
    localStorage.setItem('deckName', JSON.stringify(deckName));
  }
}

function getDeckNameFromLocalStorage(){
  if(localStorage){
    return JSON.parse(localStorage.getItem('deckName'));
  }
}

// This function will make edits to a deck's attributes based off name
// Names must be unique so we can use this over ID
function editDeck(deckName, newDeckName, newDeckDescription){
  // Find match and get Index
  let indexToEdit = indexOfDeck(deckName);
  // If the index exists
  if(indexToEdit >= 0){
    // Replace old content with new content
    allDecks[indexToEdit].deckName = newDeckName;
    allDecks[indexToEdit].deckDescription = newDeckDescription;
    // Push changes to local Storage
    saveDecks();
    // return True
    return true;
  }
  return false;
}
