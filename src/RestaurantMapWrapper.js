import React, { useMemo } from 'react';
import MapContainer from './MapContainer';
import { usePosition } from './usePosition.js';
import { useYelpHook } from './YelpHook';
import { RestaurantCardContainer } from './RestaurantCardContainer.js';


export function RestaurantMapWrapper(props) {
    const { latitude, longitude, timestamp, accuracy, error, isLoadingMap } = usePosition();
    const pos = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude])
    const [{ data, isLoading }] = useYelpHook(pos);


    // const [{ data }, setLoc] = useYelpHook({ lat: '38.036214', lng: '-78.509277' });

    return (
        <div>
            <div className="mapContainer">
                {isLoadingMap ? (<div>MAMAPMAPMAPMAPMAP</div>) : (
                    <MapContainer userLocation={{ lat: latitude, lng: longitude }} data={data} />
                )}
            </div>
            <div>
                <RestaurantCardContainer data={data} />
            </div>
        </div>
    )
}