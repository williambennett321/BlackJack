/*---------------------------- Variables (state) ----------------------------*/
let deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

let playerTotal = 0
let dealerTotal = 0
let valueOfCard = null
let p1Hand = []
let p2Hand = []
let gameDeck
let cardString


/*------------------------ Cached Element References ------------------------*/



let gameOptions = document.querySelector(".in-game-options")
let p1DeckEl = document.querySelector(".player-hand")
let p2DeckEl = document.querySelector(".dealer-hand")
let winMsg = document.querySelector(".winLossMess")
let startBtn = document.getElementById("start")
let hitBtn = document.getElementById("hit")
let standBtn = document.getElementById("stand")
let resetBtn = document.querySelector(".reset-btn")
let hideButtons = document.querySelector(".hide-buttons")


/*----------------------------- Event Listeners -----------------------------*/



startBtn.addEventListener("click", handleStart) 

hitBtn.addEventListener("click", hit)
standBtn.addEventListener("click", stand)

resetBtn.addEventListener("click", init)








/*-------------------------------- Functions --------------------------------*/


init()

function init() {
  let deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  p1Hand = []
  p2Hand = []
  gameDeck = shuffle(deck)
  winMsg.innerText = ""
  playerTotal = 0
  dealerTotal = 0
  valueOfCard = null

  hideButtons.style.visibility = "hidden"
  render()
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
  getHandVal(p1Hand)
  getHandVal(p2Hand)
  getTotalForHand()
  hideButtons.style.visibility = "visible"

  render()



  
}

function hit() {
  let cardToDraw = gameDeck.pop()
  p1Hand.push(cardToDraw)
  playerTotal += valueOfCards(cardToDraw)
  compareHands()
  render()
  } 
  


function stand() {
compareHands()
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
  p1DeckEl.innerHTML = ''
  p2DeckEl.innerHTML = ''
  p1Hand.forEach(card => {
    let cardToAppend = document.createElement('div')
    cardToAppend.className = `card large ${card}`
    p1DeckEl.appendChild(cardToAppend)
})
  p2Hand.forEach(card => {
    let cardToAppend = document.createElement('div')
    cardToAppend.className = `card large ${card}`
    p2DeckEl.appendChild(cardToAppend)
  })

}

function getHandVal(hand) {
  let total = 0
  hand.forEach(str => {

  let numValue = valueOfCards(str)
  total += numValue
  
  })
  return total
}

function getTotalForHand() {
  playerValue = getHandVal(p1Hand)
  playerTotal += playerValue
  let dealerValue = getHandVal(p2Hand)
  dealerTotal += dealerValue

}

function compareHands() {
    
if (playerTotal <= 21) {
if (playerTotal === dealerTotal) {
  winMsg.innerHTML = "Draw, play again!"
} else if (playerTotal > dealerTotal) {
    winMsg.innerHTML = "Player Wins!"
} else if (playerTotal < dealerTotal) {
    winMsg.innerHTML = "Dealer Wins!"
  }  
} else {
    winMsg.innerHTML = "Bust, Dealer Wins!"
    }
  
  }

function valueOfCards(cardString) {
  if (cardString === "dA" || cardString === "hA" || cardString === "cA" || cardString === "sA") {
    if (playerTotal > 10 || dealerTotal > 10 ) {
      valueOfCard = 1
      return valueOfCard
    } else if (10 >= playerTotal || dealerTotal <= 10) {
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
