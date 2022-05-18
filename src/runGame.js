const { createNewPlayingGrid, createNewPlayers,
    setActivaPlayerAtTheStartOfTheGame, switchActivePlayer,
    inputSymbolOfPlayer, checkIfSymbolCanBePlaced,
    checkIfPlayerHasWon, isPlayingGridFull, generateRandomInputPlace } = require('./template');

    async function runTicTacToe() {
        var playingGrid = createNewPlayingGrid()
        var players = createNewPlayers()
        var activePlayer = 1
        var response = ''
        var continueGame = true

        while (continueGame == true) {
            await new Promise(resolve => setTimeout(resolve,2000))
            activePlayer = switchActivePlayer(activePlayer)

            var canSymbolBePlaced = false
            while (canSymbolBePlaced == false) {
                var symbolPlace = generateRandomInputPlace()
                canSymbolBePlaced = checkIfSymbolCanBePlaced(playingGrid, symbolPlace)
            }

            playingGrid = inputSymbolOfPlayer(symbolPlace,players[activePlayer],playingGrid)

            if (checkIfPlayerHasWon(playingGrid) == true) {
                response = "Player " + players[activePlayer] + " has won!"
                continueGame = false
            } else if (isPlayingGridFull(playingGrid) == true) {
                response = "DRAW!"
                continueGame = false
            }

            console.log(playingGrid[0],  playingGrid[1], playingGrid[2])
            console.log(playingGrid[3], playingGrid[4], playingGrid[5])
            console.log(playingGrid[6], playingGrid[7], playingGrid[8])
            console.log("----------")
        }

        console.log(response)
    }

runTicTacToe()