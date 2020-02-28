import React from 'react';
import MapContainer from './MapContainer';
import { usePosition } from './usePosition.js';
import { useYelpHook } from './YelpHook';
import { RestaurantCardContainer } from './RestaurantCardContainer.js';


export function RestaurantMapWrapper(props) {
    const { latitude, longitude, timestamp, accuracy, error, isLoadingMap } = usePosition();
    const pos = { lat: '0', lng: '0' };
    const [{ data, isLoading }, setLoc] = useYelpHook(pos);


    // const [{ data }, setLoc] = useYelpHook({ lat: '38.036214', lng: '-78.509277' });

    return (
        <div>
            <div className="mapContainer">
                {isLoadingMap ? (<div>MAMAPMAPMAPMAPMAP</div>) : (
                    <MapContainer userLocation={{ lat: latitude, lng: longitude }} data={data} />
                )}
            </div>
            <div className="mapContainer">
                <button onClick={event => setLoc({ lat: latitude, lng: longitude })}>Get Info</button>
                <RestaurantCardContainer data={data} />
                {/* {isLoading ? (<div>Loading...</div>)
                    : (<div width="100vw">{ JSON.stringify(data.businesses[0])}</div>)
                } */}
            </div>
        </div>
    )
}