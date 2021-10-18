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

let betOptions = document.querySelector (".bet-options")
let bet = document.querySelector(".bet-value")
let placeBet = document.querySelector(".place-bet")
let pocket = document.querySelector(".pocket")




let gameOptions = document.querySelector(".in-game-options")
let playerHand = document.querySelector(".player-hand")
let dealerHand = document.querySelector(".dealer-hand")





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
  
  init()
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

init()
// I want the deck to reset when I run the function
function init() {
deckOfCards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
// run through conditionals to prevent bet from being over pocket value

if (pocketValue < playerBet) {

  pocket.innerHTML = "Invalid Bet: You don't have enough money"
} else if (pocketValue >= playerBet) {
    pocketValue -= playerBet
    pocket.innerHTML = `Balance: $${pocketValue}`
    // if the bet is accepted, cards will be distributed to both players
    //distributeCards()
  } 

}

// A function that will randomize the cards given
let newCard = () => {
  let cardString = deckOfCards[Math.floor(Math.random() * deckOfCards.length)]
  console.log(cardString)



}


