/*-------------------------------- Constants --------------------------------*/

const betOption1 = 25
const betOption2 = 50
const betOption3 = 100





/*---------------------------- Variables (state) ----------------------------*/
let deckOfCards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

let playerBet = null
let valueOfPHand = null
let valueOfDHand = null
let card = ""
let valueOfCard = null
let addRandomCard = ""
let pocketValue = 500

/*------------------------ Cached Element References ------------------------*/

let betOptions = document.querySelector(".bet-options")
let bet = document.querySelector(".bet-value")
let placeBet = document.querySelector(".place-bet")
let pocket = document.querySelector(".pocket")




let gameOptions = document.querySelector(".in-game-options")
let playerHand = document.querySelector(".player-hand")
let dealerHand = document.querySelector(".dealer-hand")
let winMsg = document.querySelector(".winLossMess")





/*----------------------------- Event Listeners -----------------------------*/

//determine the bet
betOptions.addEventListener("click", (evt) => {
  
  if (evt.target.id === "25") {
    playerBet += betOption1
  } else if (evt.target.id === "50") {
    playerBet += betOption2
  } else if (evt.target.id === "100") {
    playerBet += betOption3
  }
  
  bet.innerHTML = `Current Bet: $${playerBet}`

})
// by pressing place bet, I want the game to start
placeBet.addEventListener("click", () => {
  if (pocketValue < playerBet) {

    pocket.innerHTML = "Invalid Bet: You don't have enough money"
  } else if (pocketValue >= playerBet) {
      pocketValue -= playerBet
      pocket.innerHTML = `Balance: $${pocketValue}`
      init()
      // if the bet is accepted, cards will be distributed to both players
    } 
    
  
  

})

// setting a function to hit and stand

gameOptions.addEventListener("click", (evt) => {
if (evt.target.id === "hit") {
  pHit()
} else if (evt.target.id === "stand") {
  pStand()
}
})





/*-------------------------------- Functions --------------------------------*/


// I want the deck to reset when I run the function
function init() {
deckOfCards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
// run through conditionals to prevent bet from being over pocket value

distributeCards()
  
}

// A function that will randomize the cards given
function newCard() {
  let cardString = deckOfCards[Math.floor(Math.random() * deckOfCards.length)]
  takeCardFromDeck = deckOfCards.splice("cardString", 1)
  return cardString

}

function addNewCard(hand) {
  let addCard = document.createElement("div")
  addCard.classList.add("card", "large", newCard())
  if (hand === "playerHand") {
    
    playerHand.appendChild(addCard)
  } else {
    
    dealerHand.appendChild(addCard)
  }
  
  }

function valueOfCards(cardString) {
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

function distributeCards() {
// Grab a new card from deck, give the value of the card to the respective hand 

let card1 = newCard()
numValue = valueOfCards(card1)
valueOfDHand += numValue
addNewCard("dealerHand")
console.log(valueOfDHand)


let card2 = newCard()
numValue = valueOfCards(card2)
valueOfPHand += numValue
addNewCard("playerHand")
console.log(valueOfPHand)


let card3 = newCard()
numValue = valueOfCards(card3)
valueOfDHand += numValue
addNewCard("dealerHand")
console.log(valueOfDHand)

let card4 = newCard()
numValue = valueOfCards(card4)
valueOfPHand += numValue
addNewCard("playerHand")
console.log(valueOfPHand)

determineWinner()

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



