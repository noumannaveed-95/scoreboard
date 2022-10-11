let homeTotalScore = document.getElementById("home-total-score")
let awayTotalScore = document.getElementById("away-total-score")
let homeBox = document.getElementById("home-box")
let awayBox = document.getElementById("away-box")

let homeScore = 0
let awayScore = 0

function plusOneHome() {
    homeScore += 1
    homeTotalScore.textContent = homeScore
    if (homeScore > awayScore) {
        homeBox.style.backgroundColor = "pink"
        awayBox.style.backgroundColor = "#4D2982"
    }

    else {
        awayBox.style.backgroundColor = "pink"
        homeBox.style.backgroundColor = "#4D2982"
    }
}
function plusTwoHome() {
    homeScore += 2
    homeTotalScore.textContent = homeScore
    if (homeScore > awayScore) {
        homeBox.style.backgroundColor = "pink"
        awayBox.style.backgroundColor = "#4D2982"
    }

    else {
        awayBox.style.backgroundColor = "pink"
        homeBox.style.backgroundColor = "#4D2982"
    }
}

function plusThreeHome() {
    homeScore += 3
    homeTotalScore.textContent = homeScore
    if (homeScore > awayScore) {
        homeBox.style.backgroundColor = "pink"
        awayBox.style.backgroundColor = "#4D2982"
    }

    else {
        awayBox.style.backgroundColor = "pink"
        homeBox.style.backgroundColor = "#4D2982"
    }
}
// Away score section
function plusOneAway() {
    awayScore += 1
    awayTotalScore.textContent = awayScore
    if (homeScore > awayScore) {
        homeBox.style.backgroundColor = "pink"
        awayBox.style.backgroundColor = "#4D2982"
    }

    else {
        awayBox.style.backgroundColor = "pink"
        homeBox.style.backgroundColor = "#4D2982"
    }
}

function plusTwoAway() {
    awayScore += 2
    awayTotalScore.textContent = awayScore
    if (homeScore > awayScore) {
        homeBox.style.backgroundColor = "pink"
        awayBox.style.backgroundColor = "#4D2982"
    }

    else {
        awayBox.style.backgroundColor = "pink"
        homeBox.style.backgroundColor = "#4D2982"
    }
}

function plusThreeAway() {
    awayScore += 3
    awayTotalScore.textContent = awayScore
    if (homeScore > awayScore) {
        homeBox.style.backgroundColor = "pink"
        awayBox.style.backgroundColor = "#4D2982"
    }

    else {
        awayBox.style.backgroundColor = "pink"
        homeBox.style.backgroundColor = "#4D2982"
    }
}
//Time

function newGame() {
    var newGameTimer = document.getElementById("new-game-timer")
    let quarter = document.getElementById("quarter")
    
    var timeLeft = 60 * 48
    var timer = setInterval(countdown, 1000)
    
    //The timer function itself below.
    function countdown() {
        let minutes = parseInt(timeLeft / 60, 10)
        let seconds = parseInt(timeLeft % 60, 10) //HOW DOES THIS MODULUS WORK?
        
        minutes = minutes < 10 ? "0" + minutes : minutes //Holds 00:00 format
        seconds = seconds < 10 ? "0" + seconds : seconds //Holds 00:00 format
        //Timer condition statement below
        if (timeLeft == -1) {
            clearTimeout(timerId)
        }
        else {
            newGameTimer.textContent = minutes + ":" + seconds
            timeLeft--
        }
        
        //QUARTER STATEMENTS
        if (timeLeft > 2160) {
            quarter.textContent = "FIRST QUARTER"
        }
        else if (timeLeft > 1440) {
            quarter.textContent = "SECOND QUARTER"
        }
        else if (timeLeft > 720) {
            quarter.textContent = "THIRD QUARTER"
        }
        else if (timeLeft > 0) {
            quarter.textContent = "FOURTH QUARTER"
        }
        else if (timeLeft == 0) {
            quarter.textContent = "GAME OVER"
        }
        
    } // closing countdown function
    
} //closing new game 
