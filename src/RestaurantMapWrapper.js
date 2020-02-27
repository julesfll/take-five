import React from 'react';
import MapContainer from './MapContainer';
import { usePosition } from 'use-position';
import { useYelpHook } from './YelpHook';
import { RestaurantCards } from './RestaurantCards';

export function RestaurantMapWrapper(props) {
    const { latitude, longitude, timestamp, accuracy, error } = usePosition();
    const [{ data }, setLoc] = useYelpHook({ lat: '38.036214', lng: '-78.509277' });
    // pos = {lat: (latitude + ''), lng: (longitude + '')};

    return (
        <div>
            <div className="mapContainer">
                <MapContainer userLocation={{ lat: latitude, lng: longitude }} data={data} />
            </div>
            <div className="mapContainer">
                <RestaurantCards data={data}/>
                <h1>(Demo API retrieval)</h1>
                <ul>
                    <li>
                        {JSON.stringify(data.businesses[0])}
                    </li>
                </ul>
            </div>
        </div>
    )
}