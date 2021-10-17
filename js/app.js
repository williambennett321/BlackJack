/*-------------------------------- Constants --------------------------------*/

const betOption1 = 25
const betOption2 = 50
const betOption3 = 100
const pocketValue = 500




/*---------------------------- Variables (state) ----------------------------*/
let deckOfCards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

let playerBet = null
let valueOfPHand = null
let valueOfDHand = null
let valueOfCard = null
let addRandomCard

/*------------------------ Cached Element References ------------------------*/
let betOptions = document.querySelector (".bet-options")

let playerHand = document.querySelector(".player-hand")
let dealerHand = document.querySelector(".dealer-hand")

let addToHand = document.querySelector(".add-value")
let holdHand = document.querySelector(".hold-value")
let bet = document.querySelector(".bet-value")
let placeBet = document.querySelector(".place-bet")


/*----------------------------- Event Listeners -----------------------------*/
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
  





/*-------------------------------- Functions --------------------------------*/

init()

function init() {
deckOfCards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}


