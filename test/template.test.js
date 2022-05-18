const { createNewPlayingGrid, createNewPlayers,
        setActivaPlayerAtTheStartOfTheGame } = require('../src/template');

const newPlayingGrid = createNewPlayingGrid()
const players = createNewPlayers()

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
            currentplayer = setActivaPlayerAtTheStartOfTheGame()
            expect(currentplayer == 0).toEqual(true)
        });
    });
});