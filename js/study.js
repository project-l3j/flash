'use strict';

// ++++++++++++++++++++++++++++++++++++++++++++
// DATA - Variable declarations and Page Setup
// ++++++++++++++++++++++++++++++++++++++++++++

// Find in localStorage which deck we are using return to index.html if DNE
var deckName = getDeckNameFromLocalStorage();
if(!deckName){
  window.location = 'index.html';
}

// Make the card answer invisible till deck is created
document.getElementById('cardAnswer').style.display='none';
document.getElementById('cardBackButton').style.display='none';


