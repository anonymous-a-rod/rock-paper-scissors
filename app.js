const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const userCountDisplay = document.getElementById('user-count')
const computerCountDisplay = document.getElementById('computer-count')

let userChoice
let computerChoice
let result
let userCount = 0
let computerCount = 0



possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = `<img src="${userChoice}.svg">`

    

    generateComputerChoice()
    getResult()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) 
    console.log(randomNumber)

    if(randomNumber === 0) {
        computerChoice = 'rock'
    }
    if(randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if(randomNumber === 2) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = `<img src="${computerChoice}.svg">` 
}

function getResult() {
    if(computerChoice == userChoice){
        result = "it's a draw"
    }
    if(computerChoice === 'rock' && userChoice == 'scissors'){
        result = "you lost"
        computerCount++;
    }
    if(computerChoice === 'paper' && userChoice == 'rock'){
        result = "you lost"
        computerCount++;
    }
    if(computerChoice === 'scissors' && userChoice == 'paper'){
        result = "you lost"
        computerCount++;
    }

    
    if(computerChoice === 'scissors' && userChoice == 'rock'){
        result = "you win"
        userCount++;
    }
    if(computerChoice === 'rock' && userChoice == 'paper'){
        result = "you win"
        userCount++;
    }
    if(computerChoice === 'paper' && userChoice == 'scissors'){
        result = "you win"
        userCount++;
    }

    resultDisplay.innerHTML = result
    userCountDisplay.innerHTML = userCount
    computerCountDisplay.innerHTML = computerCount
}