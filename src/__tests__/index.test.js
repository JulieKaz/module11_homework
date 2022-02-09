import { getPercents } from '../index.js';

describe('test getPercents function', () => {
    it('ordinary case 200*30% equal to 60', () => {
        expect(getPercents(30, 200)).toBe(60);
    }),
    it('0% of any number is 0 ', () => {
        expect(getPercents(0, 200)).toBe(0);
    }),
    it('arg is not a number', () => {
        expect(getPercents('string', 200)).toBe(NaN);
    })
});
