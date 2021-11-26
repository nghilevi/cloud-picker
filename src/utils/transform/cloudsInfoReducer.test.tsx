import { DefaultEmptyCloud } from "../constants";
import { cloudsInfoReducer } from "./cloudsInfoReducer";

describe('cloudsInfoReducer', () => {
    
    let originalCloud, reducedCloud

    // happy case
    it('should transform original cloud object to become an object with provider name as key', () => {
        
        originalCloud = {
            description: "Asia, Bahrain - Amazon Web Services: Bahrain",
            provider: 'Amazon Web Services',
            name: "aws-me-south-1",
            latitude: 10,
            longitude: 10,
            region: "south asia",
            distance: 1
        }
        
        reducedCloud = {
            "Amazon Web Services": {
                "nearestRegion": "south asia",
                "south asia": [
                    {
                        "description": "Asia, Bahrain - Amazon Web Services: Bahrain",
                        "latitude": 10,
                        "longitude": 10,
                        "name": "aws-me-south-1",
                        "provider": "Amazon Web Services",
                        "region": "south asia",
                        distance: 1
                    },
                ],
            },
        }

        expect(cloudsInfoReducer({}, originalCloud)).toEqual(reducedCloud)

    });
    
    // unhappy case
    it('should transform empty cloud object to correct format', () => {
        
        originalCloud = DefaultEmptyCloud

        reducedCloud = {
            '': {
                'nearestRegion': '',
                '': [
                    {
                        'description': '',
                        'name': '',
                        'provider': '',
                        'region': '',
                        'latitude': NaN,
                        'longitude': NaN,
                        'distance': NaN
                    },
                ],
            },
        }

        expect(cloudsInfoReducer({}, originalCloud)).toEqual(reducedCloud)

    })

})
