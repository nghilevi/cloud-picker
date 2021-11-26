import { CloudsFetchedFromAPI } from "../../../test/mock";
import { DefaultEmptyCloud } from "../constants";
import { RawCloud } from "../types";
import { rawCloudMap } from "./rawCloudMap";

describe('rawCloudMap', () => {
    // unhappy cases
    it('should map invalid rawCloud to default transformedCloud case 1', () => {
        const emptyRawCloud = {} as unknown as RawCloud
        
        expect(rawCloudMap({
            lat: null as unknown as number, 
            lon: undefined as unknown as number
        })(null as unknown as RawCloud)).toEqual(DefaultEmptyCloud)

        expect(rawCloudMap({
            lat: null as unknown as number, 
            lon: undefined as unknown as number
        })(emptyRawCloud)).toEqual(DefaultEmptyCloud)

    });

    it('should map invalid rawCloud to default transformedCloud case 2', () => {
        const emptyRawCloud = {} as unknown as RawCloud
        
        expect(rawCloudMap({
            lat: null as unknown as number, 
            lon: undefined as unknown as number
        })(emptyRawCloud)).toEqual(DefaultEmptyCloud)

    });

    // happy case
    it('should map rawCloud to transformedCloud', () => {
        expect(rawCloudMap({lat: 0, lon: 0})(CloudsFetchedFromAPI[0])).toEqual({
            'description': 'Africa, South Africa - Amazon Web Services: Cape Town',
            'distance': 4233,
            'latitude': -33.92,
            'longitude': 18.42,
            'name': 'aws-af-south-1',
            'provider': 'Amazon Web Services',
            'region': 'Africa',
        })
    })

})