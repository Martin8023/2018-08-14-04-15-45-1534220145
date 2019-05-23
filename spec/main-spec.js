const main = require('../main/main');

describe('main()', () => {

    it('should calculate the remaindar', () => {
        expect(main(9, 3)).toBe(0);
        expect(main(11, 4)).toBe(3);
        // expect(main(11, 0)).toBe(-1);
        // expect(main(11)).toBe(-1);
        // expect(main()).toBe(-1);
    });
});