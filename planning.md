# Notes for project structure

## Page: Home
`index.html`

- Loading the default decks.
- Check against localStorage for the presence of custom decks. 
- Import on index somewhere.
- Options on each deck (maybe hidden behind a settings gear):
  - Edit
  - Delete
  - Export

## Page: Study
`study.html`

- Shuffle deck ([Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)).
- User marks themself "yes" or "no" for if they got the card correct.


## Page: Create Deck
`create-deck.html`

### 1. Brand new deck
- First thing is ask for a name and description of deck.
  - This should be easily editable any time during on this page.
- Also, present (maybe toward the bottom of page) is a button for save/review.
  - Upon click, take user to `confirm-deck.html`.

#### Case A:
- First question: "How many cards are in this deck?"
- Based on response, generate num of inputs.

#### Case B:
- Start user off with a single question and answer box.
- Scroll or enter key or down arrow key: another input area w/ question and answer two.


## Page: Confirm Deck
`confirm-deck.html`

- For MVP: Maybe this is just a list view of the cards added in that deck.

## Page: Edit Deck
`edit-deck.html`

- For MVP: The same as confirm page.