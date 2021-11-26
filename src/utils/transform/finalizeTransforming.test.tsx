import { finalizeTransforming } from "./finalizeTransforming"

    describe('finalizeTransforming', () => {
        let cloudsByAWS, cloudsByAzure, emptyClouds, transformedClouds: any, finalTransformedClouds: any

        describe('on invalid data', () => {
            
            beforeEach(() => {
                
                emptyClouds = {
                    'nearestRegion': '',
                    '': [{ name: '' }, { name: '' }],
                    '': [{ name: '' }]
                }

                transformedClouds = {
                    '': { ...emptyClouds, '': [] },
                    '': { ...emptyClouds }
                }

                finalTransformedClouds = {'': {'': [{'name': ''}], 'regions': ['']}, 'providers': ['']}

            })

            it('should transform to empty service cloud', () => {
                const received = finalizeTransforming(transformedClouds)
                expect(received).toEqual(finalTransformedClouds)
            })

        })

        describe('on valid data', () => {

            beforeEach(() => {
                // *** BEFORE finalizeTransforming ***
                cloudsByAWS = {
                    'nearestRegion': 'Europe',
                    'Europe': [{ name: 'cloud1' }, { name: 'cloud2' }],
                    'South Asia': [{ name: 'cloud3' }],
                    'North America': [{ name: 'cloud4' }, { name: 'cloud5' }, { name: 'cloud6' }],
                    'East Asia': [{ name: 'cloud7' }, { name: 'cloud8' }],
                }
    
                cloudsByAzure = {
                    'nearestRegion': 'Europe',
                    'Europe': [{ name: 'cloud9' }, { name: 'cloud10' }, { name: 'cloud11' }],
                    'South Asia': [{ name: 'cloud14' }],
                    'North America': [{ name: 'cloud12' }, { name: 'cloud13' }]
                }
    
                /* 
                    there is region without service cloud e.g Africa in this case 
                    but there is no 'regions' field and no 'providers' field in the transformedClouds boject
                */
                transformedClouds = {
                    'Amazon Web Services': { ...cloudsByAWS, 'Africa': [] },
                    'Azure': { ...cloudsByAzure }
                }
    
                // *** AFTER/EXPECTED finalizeTransforming ***
                finalTransformedClouds = {
                    'Amazon Web Services': { ...cloudsByAWS, regions: ['East Asia', 'Europe', 'North America', 'South Asia'] },
                    'Azure': { ...cloudsByAzure, regions: ['Europe', 'North America', 'South Asia'] },
                    providers: ['Amazon Web Services', 'Azure']
                }
            })
    
            it('should strip out region with empty service cloud', () => {
                const received = finalizeTransforming(transformedClouds)
                expect(received['Amazon Web Services']['Africa']).toBe(undefined)
            })
    
            it('should add providers list', () => {
                const received = finalizeTransforming(transformedClouds)
                expect(received.providers).toEqual(finalTransformedClouds.providers)
            })
    
            it('should add regions list in each cloud service', () => {
                const received = finalizeTransforming(transformedClouds)
                expect(received['Amazon Web Services'].regions).toEqual(finalTransformedClouds['Amazon Web Services'].regions)
                expect(received['Azure'].regions).toEqual(finalTransformedClouds['Azure'].regions)
            })
        })


    })
