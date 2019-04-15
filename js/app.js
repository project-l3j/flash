'use strict';

var aws_card_information = {
  deckName : 'AWS Cards',
  deckDescription : 'Cards to help understand the different AWS tools',
  cards: [{
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
}

//Decks is the array that holds all of the decks
var allDecks = [];

//Constructor Function for Cards
function Card(cardQuestion, cardAnswer, cardViews = 0, cardCorrect = 0) {
  this.cardQuestion = cardQuestion;
  this.cardAnswer = cardAnswer;
  this.cardViews = cardViews;
  this.cardCorrect = cardCorrect;

  this.incrementCardViews = function(){
    this.cardViews++;
  };

  this.incrementCardCorrect = function(){
    this.cardCorrect++;
  };
}


//Constructor Function for Decks
function SingleDeck(deckName, deckDescription) {
  console.log(typeof(deckName));
  this.deckName = deckName;
  this.deckDescription = deckDescription;
  this.deckCards = [];

  this.addCardtoDeck = function(cardQuestion, cardAnswer, cardViews = 0, cardCorrect = 0){
    var addNewCard = new Card(cardQuestion, cardAnswer, cardViews, cardCorrect);
    this.deckCards.push(addNewCard);
  };

}
console.log(aws_card_information.deckName)
//Creating the AWS object
var awsDeck = new SingleDeck(aws_card_information.deckName, aws_card_information.deckDescription);

//Adding all the cards to the AWS Deck
let numOfCards = aws_card_information.cards.length;
for(let i = 0; i < numOfCards; i++){
  let cardQuestion = aws_card_information.cards[i].cardQuestion;
  let cardAnswer = aws_card_information.cards[i].cardAnswer;
  let cardViews = aws_card_information.cards[i].cardViews;
  let cardCorrect = aws_card_information.cards[i].cardCorrect;
  awsDeck.addCardtoDeck(cardQuestion, cardAnswer, cardViews,cardCorrect);
}
console.log(awsDeck);
