import { capitalizeFirstLetters } from "./capitalizeFirstLetters";

describe('capitalizeFirstLetters', () => {
    
    it('should return empty string on invalid input', () => {
        // unhappy cases
        expect(capitalizeFirstLetters(null as unknown as string)).toBe('')
        expect(capitalizeFirstLetters(undefined as unknown as string)).toBe('')
        expect(capitalizeFirstLetters(1 as unknown as string)).toBe('')
        expect(capitalizeFirstLetters('')).toBe('')
    });

    it('should capitalize first letters of every words', () => {
        // happy cases
        expect(capitalizeFirstLetters('a very long text here, you know')).toBe('A Very Long Text Here, You Know')
    });
})