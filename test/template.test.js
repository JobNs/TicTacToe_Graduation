const createNewPlayingGrid = require('../src/template');

const newPlayingGrid = createNewPlayingGrid()

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
});