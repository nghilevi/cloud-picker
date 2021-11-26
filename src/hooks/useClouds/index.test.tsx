
import { renderHook } from '@testing-library/react-hooks'
import { mockFetchResponse, mockGeolocationResponse, mockNavigatorGeolocation } from '../../../test/testHelper';
import { Status } from '../../utils/constants';
import useClouds from '.';
import * as transform from '../../utils/transform/transformCloudsData';

describe('useClouds', () => {
    const getCurrentPositionMock = mockNavigatorGeolocation();
    const transformCloudsDataSpy = jest.spyOn(transform, 'transformCloudsData');

    describe('initially', () => {
        it('should return empty clouds data object with the right format', () => {
            const { result } = renderHook(() => useClouds())
            expect(transformCloudsDataSpy).not.toHaveBeenCalled();
            expect(result.current.clouds).toEqual({ "providers": [] })
        });
    })

    describe('when clouds data has been fetched', () => {

        beforeEach(() => {
            mockFetchResponse(Status.Success)
        })

        describe('and after geolocation has been fetched successfully', () => {

            beforeEach(() => {
                mockGeolocationResponse(getCurrentPositionMock, Status.Success, { latitude: 500, longitude: 200 })
            })

            it('should call transformCloudsData', async () => {
                const { result, waitForNextUpdate } = renderHook(() => useClouds())
                await waitForNextUpdate();

                expect(transformCloudsDataSpy).toHaveBeenCalled();
                expect(result.current.geolocationStatus).toBe(Status.Success)
            });

        })

        describe('and after geolocation has FAILED to fetched', () => {

            beforeEach(() => {
                mockGeolocationResponse(getCurrentPositionMock, Status.Failure)
            })

            it('should still call transformCloudsData', async () => {
                const { result, waitForNextUpdate } = renderHook(() => useClouds())
                await waitForNextUpdate();

                expect(transformCloudsDataSpy).toHaveBeenCalled();
                expect(result.current.geolocationStatus).toBe(Status.Failure)
            });

        })

    })

    describe('when clouds data has FAILED to fetch', () => {

        beforeEach(() => {
            mockFetchResponse(Status.Failure)
        })

        describe('and after geolocation has been fetched successfully', () => {

            beforeEach(() => {
                mockGeolocationResponse(getCurrentPositionMock, Status.Success, { latitude: 500, longitude: 200 })
            })

            it('should NOT call transformCloudsData', async () => {
                const { result, waitForNextUpdate } = renderHook(() => useClouds())
                await waitForNextUpdate();

                expect(transformCloudsDataSpy).not.toHaveBeenCalled();
                expect(result.current.rawCloudsStatus).toBe(Status.Failure)
                expect(result.current.geolocationStatus).toBe(Status.Success)
            });

        })

        describe('and after geolocation has FAILED to fetched', () => {

            beforeEach(() => {
                mockGeolocationResponse(getCurrentPositionMock, Status.Failure)
            })

            it('should NOT call transformCloudsData', async () => {
                const { result, waitForNextUpdate } = renderHook(() => useClouds())
                await waitForNextUpdate();

                expect(transformCloudsDataSpy).not.toHaveBeenCalled();
                expect(result.current.rawCloudsStatus).toBe(Status.Failure)
                expect(result.current.geolocationStatus).toBe(Status.Failure)
            });

        })

    })

})