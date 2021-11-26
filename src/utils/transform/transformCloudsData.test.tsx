import { transformCloudsData } from "./transformCloudsData";
import * as Mock from '../../../test/mock'
import { DefaultCoords } from "../constants";

describe('transformCloudsData', () => {

    describe('should transform clouds data fetched from the API to the form that can be feed into CloudPicker component', () => {
        
        it('case 1', () => {
            const rawClouds = Mock.CloudsFetchedFromAPI
            const transformedClouds = Mock.CloudsAfterTransformation
            const received = transformCloudsData(rawClouds, DefaultCoords)
            expect(received).toEqual(transformedClouds)
        });

        it('case 2: on of the cloud has wrong format', () => {

            const rawClouds = [
                {
                    "cloud_description": "Africa, South Africa - Amazon Web Services: Cape Town",
                    "cloud_name": "aws-af-south-1",
                    "geo_latitude": -33.92,
                    "geo_longitude": 18.42,
                    "geo_region": "africa"
                },
                {
                    "cloud_description": "",
                    "cloud_name": undefined,
                    "geo_latitude": NaN,
                    "geo_longitude": NaN,
                    "geo_region": null
                }
            ]

            const transformedClouds = {
                '': {
                  '': [
                    {
                      "description": "",
                      "distance": NaN,
                      "latitude": NaN,
                      "longitude": NaN,
                      "name": "",
                      "provider": "",
                      "region": ""
                    }
                  ],
                  "regions": [""]
                },
                "Amazon Web Services": {
                  "Africa": [
                    {
                      "description": "Africa, South Africa - Amazon Web Services: Cape Town",
                      "distance": 9664,
                      "latitude": -33.92,
                      "longitude": 18.42,
                      "name": "aws-af-south-1",
                      "provider": "Amazon Web Services",
                      "region": "Africa"
                    }
                  ],
                  "nearestRegion": "Africa",
                  "regions": [
                    "Africa"
                  ]
                },
                providers: [
                  '',
                  "Amazon Web Services"
                ]
            }

            const received = transformCloudsData(rawClouds, DefaultCoords)

            expect(received).toEqual(transformedClouds)

        });

    })

})