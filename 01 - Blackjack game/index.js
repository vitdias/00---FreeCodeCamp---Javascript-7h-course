let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard] //array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = document.getElementById("message-El")
let sumEl = document.getElementById("sum-El")
let cardsEl = document.getElementById("cards-El")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " , " + cards[1]

    if (sum <= 20 ) {
        message.innerText = "Do you want to draw a new card?"
    } else if (sum == 21) {
        message.innerText= "Wohoo! You ve got a Blackjack!"
    } else {
        message.innerText = "You are out of the game!"
        isAlive = false
    }


    console.log(message)
}

function newCard() {
    let card = 7
    cards.push(card)
    sum += cards[cards.length]
    // sumEl.textContent = "Sum: " + sum
    console.log(cards.length)
    renderGame()
}