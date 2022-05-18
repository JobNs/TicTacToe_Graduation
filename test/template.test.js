const { createNewPlayingGrid, createNewPlayers} = require('../src/template');

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
});