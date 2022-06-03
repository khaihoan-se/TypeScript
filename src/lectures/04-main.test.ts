import { isPositive } from './04-main';

describe('isPositive', () => {
    it('should return true if the number is positive', () => {
        expect(isPositive(1)).toBe(true);
    });

    it('should return false if the number is negative', () => {
        expect(isPositive(-1)).toBe(false);
    });

    it('should return false if the number is zero', () => {
        expect(isPositive(0)).toBe(false);
    });
});