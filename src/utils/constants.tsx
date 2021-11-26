
const CLOUDS_API_URL = 'https://api.aiven.io/v1/clouds'

enum Status { //use string as it is easier to debug e.g while testing
    Default = 'Default',
    Loading = 'Loading',
    Success = 'Success',
    Failure = 'Failure',
    Unavailable = 'Unavailable'
}

enum ErrorText {
    Error = 'Something went wrong',
    TryAgain = 'Please try again later!'
}

enum GeolocationStatusText {
    Default = 'The Prime Meridian (Greenwich) geolocation is used by default to find the nearest service cloud.',
    Loading = 'Fetching geolocation...',
    Success = 'The service cloud list is ranked dynamically based on the shortest distance to your coordination at:',
    Failure = 'We can not get your geolocation.',
    Unavailable = 'Geolocation is not available on your device!'
}

// use const here since computed values are not permitted in an enum string
// ref: https://github.com/microsoft/TypeScript/issues/40793
const CloudsStatusText = {
    Loading: 'Fetching clouds... Please wait a few seconds ... Thank you!',
    Failure: 'Data loaded failed' + ErrorText.TryAgain // possible a mechanism to automatically reconnect or retry 
}

enum SelectedOptionText {
    Selected = 'You selected:',
    Unselected = 'Please select cloud service in the list below filtering by Service Cloud Provider and Region.'
}

// The latitude of Prime Meridian (Greenwich)
enum DefaultCoords {
    lat = 51.477928, lon = -0.001545
}

const DefaultEmptyCloud = {
    description: '',  
    name: '', 
    provider: '', 
    region: '',
    distance: NaN,
    latitude: NaN, 
    longitude: NaN
}

export { Status, DefaultCoords, CLOUDS_API_URL, GeolocationStatusText, CloudsStatusText, SelectedOptionText, DefaultEmptyCloud, ErrorText };