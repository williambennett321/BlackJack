/*-------------------------------- Constants --------------------------------*/






/*---------------------------- Variables (state) ----------------------------*/
let deckOfCards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

let playerBet = null
let valueOfPHand = 0
let valueOfDHand = 0
let card = ""
let valueOfCard = null
let p1Hand = []
let p2Hand = []
let gameDeck


/*------------------------ Cached Element References ------------------------*/



let gameOptions = document.querySelector(".in-game-options")
let playerHand = document.querySelector(".player-hand")
let dealerHand = document.querySelector(".dealer-hand")
let winMsg = document.querySelector(".winLossMess")
let startBtn = document.getElementById("start")
let hitBtn = document.getElementById("hit")
let standBtn = document.getElementById("stand")



/*----------------------------- Event Listeners -----------------------------*/



startBtn.addEventListener("click", handleStart)
hitBtn.addEventListener("click", hit)
standBtn.addEventListener("click", stand)

  








/*-------------------------------- Functions --------------------------------*/


init()

function init() {
  p1Hand = []
  p2Hand = []
  gameDeck = shuffle(deck)
  render()
}

function hit() {
  let cardToDraw = gameDeck.pop()
  p1Hand.push(cardToDraw)
  render()
}

function totalCards(deck){
  let total = 0
  p1Hand.forEach(card => {
    total += lookupVal(card)
  })
  return total
}

function handleStart() {
  // Deal two cards to each player
  let cardToDraw = gameDeck.pop()
  p1Hand.push(cardToDraw)
  cardToDraw = gameDeck.pop()
  p1Hand.push(cardToDraw)
  cardToDraw = gameDeck.pop()
  p2Hand.push(cardToDraw)
  cardToDraw = gameDeck.pop()
  p2Hand.push(cardToDraw)
  console.log(p1Hand, p2Hand)
  render()
}

function shuffle(cardsToShuffle) {
  let shuffledCards = [];
  let shuffleHolder;
  for (i=1; i=cardsToShuffle.length; i++){
    randIdx=Math.floor(Math.random()*cardsToShuffle.length);
    shuffleHolder = cardsToShuffle.splice(randIdx, 1);
    shuffledCards.push(`${shuffleHolder}`);
  }
  return shuffledCards;
}


function render() {
  // render current hands to container elements
  p1DeckEl.innerHTML = ''
  p2DeckEl.innerHTML = ''
  p1Hand.forEach(card => {
    let cardToAppend = document.createElement('div')
    cardToAppend.className = `card xlarge ${card}`
    p1DeckEl.appendChild(cardToAppend)
  })
  p2Hand.forEach(card => {
    let cardToAppend = document.createElement('div')
    cardToAppend.className = `card xlarge ${card}`
    p2DeckEl.appendChild(cardToAppend)
  })
}
  



















  function valueOfCards() {
  if (cardString === "dA" || cardString === "hA" || cardString === "cA" || cardString === "sA") {
    if (valueOfPHand >= 10 || valueOfDHand >= 10) {
      valueOfCard = 1
      return valueOfCard
    } else {
      valueOfCard = 11
      return valueOfCard
    }
  } else if (cardString === "dK" || cardString === "dQ" || cardString === "dJ" || cardString === "d10" || cardString === "hK" || cardString === "hQ" || cardString === "hJ" || cardString === "h10" || cardString === "cK" || cardString === "cQ" || cardString === "cJ" || cardString === "c10" || cardString === "sK" || cardString === "sQ" || cardString === "sJ" || cardString === "s10") {
    valueOfCard = 10
    return valueOfCard
  } else if ( cardString === "d09" || cardString === "h09" || cardString === "c09" || cardString === "s09") {
    valueOfCard = 9
    return valueOfCard
  } else if ( cardString === "d08" || cardString === "h08" || cardString === "c08" || cardString === "s08") {
    valueOfCard = 8
    return valueOfCard
  } else if ( cardString === "d07" || cardString === "h07" || cardString === "c07" || cardString === "s07") {
    valueOfCard = 7
    return valueOfCard
  } else if ( cardString === "d06" || cardString === "h06" || cardString === "c06" || cardString === "s06") {
    valueOfCard = 6
    return valueOfCard
  } else if (cardString === "d05" || cardString === "h05" || cardString === "c05" || cardString === "s05") {
    valueOfCard = 5
    return valueOfCard
  } else if (cardString === "d04" || cardString === "h04" || cardString === "c04" || cardString === "s04") {
    valueOfCard = 4
    return valueOfCard
  } else if (cardString === "d03" || cardString === "h03" || cardString === "c03" || cardString === "s03") {
    valueOfCard = 3
    return valueOfCard
  } else if (cardString === "d02" || cardString === "h02" || cardString === "c02" || cardString === "s02") {
    valueOfCard = 2
    return valueOfCard
  }
  
}



function determineWinner() {
  if (valueOfPHand === 21 && valueOfDHand !== 21) {
    winMsg.innerHTML = "Congratulations Player is the winner"
  } else if (valueOfDHand === 21 && valueOfPHand !== 21) {
    winMsg.innerHTML = "Congratulations Dealer is the winner"
  } else if (valueOfPHand === valueOfDHand) {
    winMsg.innerHTML = "It's a draw"
  } else if (valueOfPHand > valueOfDHand) {
    winMsg.innerHTML = "Congratulations Player is the winner"
  } else if (valueOfPHand < valueOfDHand) {
    winMsg.innerHTML = "Congratulations Dealer is the winner"
  }
}



