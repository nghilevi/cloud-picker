import CloudPicker from "./components/CloudPicker";
import './App.scss';
import ErrorBoundary from './ErrorBoundary';
import useClouds from "./hooks/useClouds";

const App = () => {
    const { userLatitude, userLongitude, clouds, geolocationStatus, rawCloudsStatus } = useClouds()
    return (
        <div className="app">
            <ErrorBoundary>
                <CloudPicker
                    userLatitude={userLatitude}
                    userLongitude={userLongitude}
                    clouds={clouds}
                    geolocationStatus={geolocationStatus}
                    rawCloudsStatus={rawCloudsStatus}
                />
            </ErrorBoundary>
        </div>
    );
}

export default App;