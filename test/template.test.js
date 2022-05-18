const { createNewPlayingGrid, createNewPlayers,
    setActivaPlayerAtTheStartOfTheGame, switchActivePlayer,
    inputSymbolOfPlayer, checkIfSymbolCanBePlaced } = require('../src/template');

const newPlayingGrid = createNewPlayingGrid()
const players = createNewPlayers()
const startPlayer = setActivaPlayerAtTheStartOfTheGame()

describe('This test suite test a Tic Tac Toe game', () => {
    describe('We have a valid playing grid for the game, so:', () => {
        it('- A grid of 9 places is valid', () => {
            
            lengthNewPlayingGrid = newPlayingGrid.length
            expect(lengthNewPlayingGrid == 9).toEqual(true);
        });
        it('- A grid of 8 places is invalid', () => {
            lengthNewPlayingGrid = newPlayingGrid.length
            expect(lengthNewPlayingGrid == 8).toEqual(false);
        });
        it('- A grid of 10 places is invalid', () => {
            lengthNewPlayingGrid = newPlayingGrid.length
            expect(lengthNewPlayingGrid == 10).toEqual(false);
        });
    });
    describe('We want to have a valid amount of players, so', () => {
        it('- 2 players is valid ', () => {
            expect(players.length == 2).toEqual(true)
        });
        it('- 3 players is invalid ', () => {
            expect(players.length == 3).toEqual(false)
        });
    });

    describe('We want to have valid symbols for the players, so', () => {
        it('- Player 1 has symbol X', () => {
             expect(players[0]).toEqual("X")
        });
        it('- Player 2 has symbol O', () => {
            expect(players[1]).toEqual("O")
        });
    });

    describe('We want player 1 to be the active player at the start of the game', () => {
        it('Player 1 is active', () => {
            expect(startPlayer == 0).toEqual(true)
        });
        it('Player 2 is not active', () => {
            expect(startPlayer == 1).toEqual(false)
        });
    });

    describe('We want to switch the active player role, so', () => {
        it('- Active player 1 becomes 2', () => {
            const currentActivePlayer = 0
            var newActivePlayer = switchActivePlayer(currentActivePlayer)
            expect(newActivePlayer).toEqual(1)
        });
        it('- Active player 1 does not stay 1', () => {
            const currentActivePlayer = 0
            var newActivePlayer = switchActivePlayer(currentActivePlayer)
            expect(newActivePlayer == 0).toEqual(false)
        });
        it('- Active player 2 becomes 1', () => {
            const currentActivePlayer = 1
            var newActivePlayer = switchActivePlayer(currentActivePlayer)
            expect(newActivePlayer).toEqual(0)
        });
    });

    describe('a player can write their symbol to the playing grid:', () => {
        it('Player 1 can input a symbol on the first place in the playing grid ', () => {
            const newPlayingGrid = createNewPlayingGrid()
            const place = 0
            const activePlayer = 0
            const playingGridAfterturn = inputSymbolOfPlayer(place, players[activePlayer], newPlayingGrid)
            expect(playingGridAfterturn).toEqual(['X','','','','','','','',''])
        });
        it('Player 1 can input a symbol on the fifth place in the playing grid ', () => {
            const newPlayingGrid = createNewPlayingGrid()
            const place = 4
            const activePlayer = 0
            const playingGridAfterturn = inputSymbolOfPlayer(place, players[activePlayer], newPlayingGrid)
            expect(playingGridAfterturn).toEqual(['','','','','X','','','',''])
        });
        it('Player 2 can input a symbol on the first place in the playing grid ', () => {
            const newPlayingGrid = createNewPlayingGrid()
            const place = 0
            const activePlayer = 1
            const playingGridAfterturn = inputSymbolOfPlayer(place, players[activePlayer], newPlayingGrid)
            expect(playingGridAfterturn).toEqual(['O', '', '', '', '', '', '', '', ''])
        });
    });

    describe('We want to check whether a place is empty, so a player can input their symbol', () => {
        it('["X", , , , , , , , ], O wants in second place -> OK', () => {
            const playingGridToCheck = ['X','','','','','','','','']
            const place = 1
            expect(checkIfSymbolCanBePlaced(playingGridToCheck, place)).toEqual(true)
        });
    });
});