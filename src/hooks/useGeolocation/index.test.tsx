import { renderHook } from "@testing-library/react-hooks";
import { DefaultCoords, Status } from "../../utils/constants";
import { mockGeolocationResponse, mockNavigatorGeolocation } from "../../../test/testHelper";
import useGeolocation from ".";

describe('useGeolocation', () => {
  const getCurrentPositionMock = mockNavigatorGeolocation();

  describe('when get geolocation succeed', () => {

    beforeEach(() => {
      mockGeolocationResponse(getCurrentPositionMock, Status.Success, { latitude: 500, longitude: 200 })
    })

    it('should populate userLatitude, userLongitude and geolocationStatus', () => {
      const { result } = renderHook(() => useGeolocation());
      expect(result.current.userLatitude).toBe(500)
      expect(result.current.userLongitude).toBe(200)
      expect(result.current.geolocationStatus).toBe(Status.Success)
    })

  })

  describe('when get geolocation failed', () => {

    beforeEach(() => {
      mockGeolocationResponse(getCurrentPositionMock, Status.Failure)
    })

    it('should populate userLatitude, userLongitude and geolocationStatus', () => {
      const { result } = renderHook(() => useGeolocation());
      expect(result.current.userLatitude).toBe(DefaultCoords.lat)
      expect(result.current.userLongitude).toBe(DefaultCoords.lon)
      expect(result.current.geolocationStatus).toBe(Status.Failure)
    })

  })

})