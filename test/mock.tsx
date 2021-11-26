import { Clouds, RawCloud } from "../src/utils/types"

const CloudsFetchedFromAPI: RawCloud[] = [{
  "cloud_description": "Africa, South Africa - Amazon Web Services: Cape Town",
  "cloud_name": "aws-af-south-1",
  "geo_latitude": -33.92,
  "geo_longitude": 18.42,
  "geo_region": "africa"
}, {
  "cloud_description": "Africa, South Africa - Azure: South Africa North",
  "cloud_name": "azure-south-africa-north",
  "geo_latitude": -26.198,
  "geo_longitude": 28.03,
  "geo_region": "africa"
}, {
  "cloud_description": "Asia, Bahrain - Amazon Web Services: Bahrain",
  "cloud_name": "aws-me-south-1",
  "geo_latitude": 26.07,
  "geo_longitude": 50.55,
  "geo_region": "south asia"
}, {
  "cloud_description": "Asia, Hong Kong - Amazon Web Services: Hong Kong",
  "cloud_name": "aws-ap-east-1",
  "geo_latitude": 22.5,
  "geo_longitude": 114.0,
  "geo_region": "east asia"
}, {
  "cloud_description": "Asia, Hong Kong - Azure: East Asia",
  "cloud_name": "azure-eastasia",
  "geo_latitude": 22.5,
  "geo_longitude": 114.0,
  "geo_region": "southeast asia"
}, {
  "cloud_description": "Asia, Hong Kong - Google Cloud: Hong Kong",
  "cloud_name": "google-asia-east2",
  "geo_latitude": 22.5,
  "geo_longitude": 114.0,
  "geo_region": "east asia"
}, {
  "cloud_description": "Asia, India - Amazon Web Services: Mumbai",
  "cloud_name": "aws-ap-south-1",
  "geo_latitude": 19.13,
  "geo_longitude": 72.89,
  "geo_region": "south asia"
}, {
  "cloud_description": "Asia, India - Azure: Central India",
  "cloud_name": "azure-india-central",
  "geo_latitude": 19.08,
  "geo_longitude": 72.88,
  "geo_region": "south asia"
}, {
  "cloud_description": "Asia, India - Azure: South India",
  "cloud_name": "azure-india-south",
  "geo_latitude": 13.08,
  "geo_longitude": 80.27,
  "geo_region": "south asia"
}, {
  "cloud_description": "Asia, India - Azure: West India",
  "cloud_name": "azure-india-west",
  "geo_latitude": 19.13,
  "geo_longitude": 72.89,
  "geo_region": "south asia"
}]

const CloudsAfterTransformation: Clouds = {
  "Amazon Web Services": {
    "South Asia": [
      {
        "description": "Asia, Bahrain - Amazon Web Services: Bahrain",
        "distance": 5074,
        "latitude": 26.07,
        "longitude": 50.55,
        "name": "aws-me-south-1",
        "provider": "Amazon Web Services",
        "region": "South Asia"
      },
      {
        "description": "Asia, India - Amazon Web Services: Mumbai",
        "distance": 7179,
        "latitude": 19.13,
        "longitude": 72.89,
        "name": "aws-ap-south-1",
        "provider": "Amazon Web Services",
        "region": "South Asia"
      }
    ],
    "nearestRegion": "South Asia",
    "regions": [
      "South Asia"
    ]
  },
  "Azure": {
    "South Asia": [
      {
        "description": "Asia, India - Azure: West India",
        "distance": 7179,
        "latitude": 19.13,
        "longitude": 72.89,
        "name": "azure-india-west",
        "provider": "Azure",
        "region": "South Asia"
      },
      {
        "description": "Asia, India - Azure: Central India",
        "distance": 7182,
        "latitude": 19.08,
        "longitude": 72.88,
        "name": "azure-india-central",
        "provider": "Azure",
        "region": "South Asia"
      },
      {
        "description": "Asia, India - Azure: South India",
        "distance": 8202,
        "latitude": 13.08,
        "longitude": 80.27,
        "name": "azure-india-south",
        "provider": "Azure",
        "region": "South Asia"
      }
    ],
    "nearestRegion": "South Asia",
    "regions": [
      "South Asia"
    ]
  },
  "Google Cloud": {
    "East Asia": [
      {
        "description": "Asia, Hong Kong - Google Cloud: Hong Kong",
        "distance": 9590,
        "latitude": 22.5,
        "longitude": 114,
        "name": "google-asia-east2",
        "provider": "Google Cloud",
        "region": "East Asia"
      }
    ],
    "nearestRegion": "East Asia",
    "regions": [
      "East Asia"
    ]
  },
  providers: [
    "Amazon Web Services",
    "Azure",
    "Google Cloud"
  ]
}

const TransformedCloud = {
  "description": "Asia, India - Azure: West India",
  "distance": 7179,
  "latitude": 19.13,
  "longitude": 72.89,
  "name": "azure-india-west",
  "provider": "Azure",
  "region": "South Asia"
}

export { CloudsFetchedFromAPI, CloudsAfterTransformation, TransformedCloud }