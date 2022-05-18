function createNewPlayingGrid() {
    var newPlayingGrid = new Array(9)
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

module.exports = { createNewPlayingGrid, createNewPlayers,
    setActivaPlayerAtTheStartOfTheGame, switchActivePlayer
}