const createNewPlayingGrid = require('../src/template');


describe('This test suite test a Tic Tac Toe game', () => {
    describe('We have a valid playing grid for the game, so:', () => {
        it('- A grid of 9 places is valid', () => {
            newPlayingGrid = createNewPlayingGrid()
            lengthNewPlayingGrid = newPlayingGrid.length
            expect(lengthNewPlayingGrid == 9).toEqual(true);
        });
    });
});