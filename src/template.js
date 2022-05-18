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
    }
}

module.exports = { createNewPlayingGrid, createNewPlayers,
    setActivaPlayerAtTheStartOfTheGame, switchActivePlayer,
    inputSymbolOfPlayer, checkIfSymbolCanBePlaced
}