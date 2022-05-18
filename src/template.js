function createNewPlayingGrid() {
    var newPlayingGrid = ['','','','','','','','','']
    return newPlayingGrid;
}

function createNewPlayers() {
    var newPlayers = ["X", "O"]
    return newPlayers
}

function setActivaPlayerAtTheStartOfTheGame() {
    return 0
}

function switchActivePlayer(activePlayer) {
    if (activePlayer == 0) {
        return 1
    } else return 0
}

function inputSymbolOfPlayer(place, activePlayer, playingGrid) {
    var playingGridToChange = playingGrid
    playingGridToChange[place] = activePlayer
    return playingGrid
}

function checkIfSymbolCanBePlaced(playingGrid, place) {
    if (playingGrid[place] == '') {
        return true
    } else return false
}

function checkIfPlayerHasWon(playingGrid) {
    if (checkForHorizontalWin(playingGrid) == true) {
        return true
    } else if (checkForVerticalWin(playingGrid)) {
        return true
    } else if (checkForDiagonalWin(playingGrid)) {
        return true
    } else {
        return false    
    }
    
}

function checkForHorizontalWin(playingGrid) {
    if (playingGrid[0] != '' && (playingGrid[0] == playingGrid[1] && playingGrid[1] == playingGrid[2])) {
        return true
    } else if(playingGrid[3] != '' && (playingGrid[3] == playingGrid[4] && playingGrid[4] == playingGrid[5])) {
        return true
    } else if (playingGrid[6] != '' && (playingGrid[6] == playingGrid[7] && playingGrid[7] == playingGrid[8])) {
        return true
    } else {
        return false
    }
}

function checkForVerticalWin(playingGrid){
    if (playingGrid[0] != '' && (playingGrid[0] == playingGrid[3] && playingGrid[3] == playingGrid[6])) {
        return true
    } if (playingGrid[1] != '' && (playingGrid[1] == playingGrid[4] && playingGrid[4] == playingGrid[7])) {
        return true
    } if (playingGrid[2] != '' && (playingGrid[2] == playingGrid[5] && playingGrid[5] == playingGrid[8])) {
        return true
    } else {
        return false
    }
}

function checkForDiagonalWin(playingGrid) {
    if (playingGrid[0] != '' && (playingGrid[0] == playingGrid[4] && playingGrid[4] == playingGrid[8])) {
        return true
    } if (playingGrid[2] != '' && (playingGrid[2] == playingGrid[4] && playingGrid[4] == playingGrid[6])) {
        return true
    }
}

function isPlayingGridFull(playingGrid) {
    for (let i = 0; i < playingGrid.length; i++) {
        if (playingGrid[i] == '') {
            return false 
        }    
    }

    return true
}

module.exports = { createNewPlayingGrid, createNewPlayers,
    setActivaPlayerAtTheStartOfTheGame, switchActivePlayer,
    inputSymbolOfPlayer, checkIfSymbolCanBePlaced,
    checkIfPlayerHasWon, isPlayingGridFull
}