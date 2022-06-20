let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] //array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = document.getElementById("message-El")
let sumEl = document.getElementById("sum-El")
let cardsEl = document.getElementById("cards-El")

function getRandomCard() {
    randomCard = Math.floor( Math.random() * 13 + 1)
    if (randomCard == 1) {
        return 11
    } else if (randomCard == 11 || randomCard == 12 || randomCard == 13) {
        return 10
    } else {
        return randomCard
    }
}

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i++ ) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20 ) {
        message.innerText = "Do you want to draw a new card?"
    } else if (sum == 21) {
        message.innerText= "Wohoo! You ve got a Blackjack!"
        hasBlackJack = true
    } else {
        message.innerText = "You are out of the game!"
        isAlive = false
    }


    console.log(message)
}

function newCard() {
    let card = getRandomCard()
    cards.push(card)
    sum += cards[cards.length - 1]

    renderGame()
    console.log(cards[cards.length - 1])
}