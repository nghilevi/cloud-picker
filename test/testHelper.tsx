/*
This implementation is inspired from these answers:
    shared utils functions for testing with jest
    https://stackoverflow.com/a/61115990/2515839
    
    mockNavigatorGeolocation
    https://stackoverflow.com/a/67019816/2515839
*/

import { Status } from "../src/utils/constants";

const mockNavigatorGeolocation = () => {
    const getCurrentPositionMock = jest.fn();
    const geolocation = {
        getCurrentPosition: getCurrentPositionMock
    };
    Object.defineProperty(global.navigator, 'geolocation', {
        value: geolocation,
        enumerable: true,
        writable: false, configurable: false
    });
    return getCurrentPositionMock;
};

const mockGeolocationResponse = (
    getCurrentPositionMock: any,
    status: string,
    response: { latitude: number, longitude: number } = { latitude: 0, longitude: 0 } // TODO use DefaultCoords
) => {

    if (status === Status.Success) {
        getCurrentPositionMock.mockImplementation((success: Function, rejected: Function) =>
            success({
                coords: response
            })
        );
    } else if (status === Status.Failure) {
        getCurrentPositionMock.mockImplementation((success: Function, rejected: Function) =>
            rejected({
                code: '',
                message: '',
                PERMISSION_DENIED: '',
                POSITION_UNAVAILABLE: '',
                TIMEOUT: '',
            })
        );
    }
}

const mockFetchResponse = (status: string, response: { clouds: any[] } = { clouds: ['cloud'] }) => {
    if (status === Status.Success) {
        jest.spyOn(global, 'fetch').mockImplementation(
            jest.fn(() =>
                Promise.resolve({
                    json: () => Promise.resolve(response),
                }),
            ) as jest.Mock
        )
    } else {
        jest.spyOn(global, 'fetch').mockResolvedValue(
            new Promise((resolve, reject) => {
                reject();
            })
        )
    }
}

export { mockNavigatorGeolocation, mockGeolocationResponse, mockFetchResponse }