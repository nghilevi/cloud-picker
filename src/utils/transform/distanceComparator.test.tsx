import { distanceComparator } from "./distanceComparator";
import * as Mock from '../../../test/mock'

describe('distanceComparator', () => {
    // unhappy case
    it('should do no sorting if distance is NaN', () => {
        const cloud1 = { ...Mock.TransformedCloud, distance: NaN }
        const cloud2 = { ...Mock.TransformedCloud, provider: 'AWS', distance: NaN }
        const cloud3 = { ...Mock.TransformedCloud, provider: 'Upcloud',distance: NaN }
        const clouds = [cloud1, cloud2, cloud3]
        const sortedClouds = [cloud2, cloud1, cloud3]
        const received = clouds.sort(distanceComparator)
        expect(received).not.toEqual(sortedClouds)
        expect(received).toEqual(clouds)
    });

    // happy case
    it('should rank cloud with shortest distance first', () => {
        const cloud1 = { ...Mock.TransformedCloud, distance: 10 }
        const cloud2 = { ...Mock.TransformedCloud, distance: 1 }
        const cloud3 = { ...Mock.TransformedCloud, distance: 100 }
        const clouds = [cloud1, cloud2, cloud3]
        const sortedClouds = [cloud2, cloud1, cloud3]
        const received = clouds.sort(distanceComparator)
        expect(received).toEqual(sortedClouds)
    });
})