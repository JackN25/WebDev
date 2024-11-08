let scoreEL = document.getElementById("score-el")
let clickedButtons = []
let matchedButtons = []
let score = 0
let matchBoard = []
let grid = document.getElementById("game-grid")
let gameStatus = "stopped"
for (let i = 0; i < 16; i++) {
    let button = document.createElement("button")
    button.setAttribute("class", "gameButton")
    button.setAttribute("id", "" + i)
    button.setAttribute("onclick", "buttonClicked(" + i + ")")
    grid.appendChild(button)
}
let allButtons = document.getElementsByClassName("gameButton")

function startGame() {
    gameStatus = "playing"
    score = 0
    updateScore()
    unflipButton(clickedButtons)
    unflipButton(matchedButtons)
    clickedButtons = []
    matchedButtons = []
    let allOptionsList = []
    for (let i = 1; i <= 8; i++) {
        allOptionsList.push(i)
        allOptionsList.push(i)
    }

    matchBoard = []
    while (allOptionsList.length != 0) {
        let randomNum = Math.floor(Math.random() * allOptionsList.length)
        matchBoard.push(allOptionsList[randomNum])
        allOptionsList.splice(randomNum, 1)
    }
    for (const button of allButtons) {
        button.disabled = false
    }
    console.log(matchBoard)
}

startGame()

function buttonClicked(buttonNumber) {
    if (!clickedButtons.includes(buttonNumber) && !matchedButtons.includes(buttonNumber)) {
        clickedButtons.push(buttonNumber)
        score++
        updateScore()
        console.log(clickedButtons)
        console.log(buttonNumber)
        console.log(matchBoard[buttonNumber])
        flipButton()
    }
    if (clickedButtons.length == 2) {
        compareButtons()
    }
}

function compareButtons() {
    if (matchBoard[clickedButtons[0]] == matchBoard[clickedButtons[1]]) {
        matchedButtons.push(clickedButtons[0])
        matchedButtons.push(clickedButtons[1])
        clickedButtons = []
        console.log(matchedButtons)
        console.log(clickedButtons)
    } else {
        //flips the buttons back after delay
        for (const button of allButtons) {
            button.disabled = true
        }
        setTimeout(() => { 
            unflipButton(clickedButtons)
            console.log("Unflipped")
            clickedButtons = []
            for (const button of allButtons) {
                button.disabled = false
            }
         }, 1000)
        
    }
    checkGameStatus()
}

function updateScore() {
    scoreEL.textContent = "Score: " + score
}

function unflipButton(clickedButtons) {
    for (const button of clickedButtons) {
        console.log("unflipping")
        document.getElementById(""+button).style.backgroundImage = "url('https://www.bths.edu/pics/header_logo.png')"
    }
}

function flipButton() {
    for (const button of clickedButtons) {
        console.log(button + "FROM FLIPBUTTON")
        switch (matchBoard[button]) {
            case 1:
                console.log("changed element")
                document.getElementById(button).style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9bweXo5G5hu7I6tiX1FmFK2lkyt7TMuAGA&s')"
                break
            case 2:
                console.log("changed element")
                document.getElementById(button).style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Office-pink-erasers.jpg/1200px-Office-pink-erasers.jpg')"
                break
            case 3:
                console.log("changed element")
                document.getElementById(button).style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg/800px-Casio_calculator_JS-20WK_in_201901_002.jpg')"
                break
            case 4:
                console.log("changed element")
                document.getElementById(button).style.backgroundImage = "url('https://d38zcepchip0tz.cloudfront.net/media/catalog/product/cache/a77266c1abf4147499139dcd165bfd03/i/m/image1_53.jpg')"
                break
            case 5:
                console.log("changed element")
                document.getElementById(button).style.backgroundImage = "url('https://m.media-amazon.com/images/I/81dVqDRK5zL.jpg')"
                break
            case 6:
                console.log("changed element")
                document.getElementById(button).style.backgroundImage = "url('https://daydreamsociety.com/cdn/shop/products/Daydream_Society_Mini_Composition_Notebook_Ink_90ad2a8a-0f1a-4568-ad2e-24f4da7672d7_grande.jpg?v=1710257403')"
                break
            case 7:
                console.log("changed element")
                document.getElementById(button).style.backgroundImage = "url('https://m.media-amazon.com/images/I/61iVR1YvMwL.jpg')"
                break
            case 8:
                console.log("changed element")
                document.getElementById(button).style.backgroundImage = "url('https://grassrootstargeting.com/wp-content/uploads/2021/06/03-BICcristal2008-03-26.jpg')"
                break
            default:
                console.log("failed to change")
                console.log(matchBoard[button])
        }
    }
}

function checkGameStatus() {
    if (matchedButtons.length == 16) {
        gameStatus = "stopped"
        stopGame()
    }
}

function stopGame() {
    for (const button of allButtons) {
        button.disabled = true
    }
}
//1    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9bweXo5G5hu7I6tiX1FmFK2lkyt7TMuAGA&s   PENCIL
//2    https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Office-pink-erasers.jpg/1200px-Office-pink-erasers.jpg   ERASER
//3    https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg/800px-Casio_calculator_JS-20WK_in_201901_002.jpg   CALCULATOR
//4    https://d38zcepchip0tz.cloudfront.net/media/catalog/product/cache/a77266c1abf4147499139dcd165bfd03/i/m/image1_53.jpg   RULER
//5    https://m.media-amazon.com/images/I/81dVqDRK5zL.jpg   PROTRACTOR
//6    https://daydreamsociety.com/cdn/shop/products/Daydream_Society_Mini_Composition_Notebook_Ink_90ad2a8a-0f1a-4568-ad2e-24f4da7672d7_grande.jpg?v=1710257403  NOTEBOOK
//7    https://m.media-amazon.com/images/I/61iVR1YvMwL.jpg GLUE STICK
//8    https://grassrootstargeting.com/wp-content/uploads/2021/06/03-BICcristal2008-03-26.jpg   PEN