import { renderHook } from "@testing-library/react-hooks";
import { mockFetchResponse } from "../../../test/testHelper";
import { Status } from "../../utils/constants";

import useRawClouds from ".";

describe('useRawClouds', () => {

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('on fetch clouds success', () => {

    beforeEach(() => {
      mockFetchResponse(Status.Success)
    })

    it('should populate rawClouds and set rawCloudsStatus to Success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useRawClouds());
      await waitForNextUpdate();
      expect(result.current.rawClouds).toEqual(['cloud'])
      expect(result.current.rawCloudsStatus).toBe(Status.Success)
    })
  })

  describe('on fetch clouds failure', () => {

    beforeEach(() => {
      mockFetchResponse(Status.Failure)
    })

    it('should populate rawClouds and set rawCloudsStatus to Success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useRawClouds());
      await waitForNextUpdate();
      expect(result.current.rawClouds).toEqual([])
      expect(result.current.rawCloudsStatus).toBe(Status.Failure)
    })
  })

})