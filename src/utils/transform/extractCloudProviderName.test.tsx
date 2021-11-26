import { extractCloudProviderName } from "./extractCloudProviderName";

describe('extractCloudProviderName', () => {

    // unhappy cases
    it('should return empty string on invalid cloud provider name', () => {
        expect(extractCloudProviderName(null as unknown as string)).toBe('')
        expect(extractCloudProviderName(undefined as unknown as string)).toBe('')
        expect(extractCloudProviderName(1 as unknown as string)).toBe('')
        expect(extractCloudProviderName('')).toBe('')
        expect(extractCloudProviderName('Im a random string')).toBe('')
    });

    // happy cases
    it('should extract cloud provider name', () => {
        expect(extractCloudProviderName('Region, Country Name - Cloud Provider Name: Region Specific')).toBe('Cloud Provider Name')
    });
})