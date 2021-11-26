import { getDistance } from "./getDistance";

describe('getDistance', () => {

    it('should getDistance from 2 geolocations', () => {
        // unhappy cases
        expect(Math.round(getDistance(
            null as unknown as number, 
            '0' as unknown as number, 
            undefined as unknown as number, 
            10 as unknown as number, 
            'invalid option' as unknown as 'string'
        ))).toBe(NaN)

        // happy cases
        expect(Math.round(getDistance(0, 0, 10, 10, 'K'))).toBe(1568) // in Km
        expect(Math.round(getDistance(0, 0, 10, 10, 'N'))).toBe(846) // in Miles
    });

})