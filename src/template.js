function createNewPlayingGrid() {
    var newPlayingGrid = new Array(9)
    return newPlayingGrid;
}

function createNewPlayers() {
    var newPlayers = ["X", "Player 2"]
    return newPlayers
}

module.exports = { createNewPlayingGrid, createNewPlayers}