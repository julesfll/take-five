import React, { useMemo } from 'react';
import MapContainer from './MapContainer';
import { usePosition } from './Hooks/usePosition.js';
import { useYelpHook } from './Hooks/YelpHook';
import { RestaurantCardContainer } from './RestaurantCardContainer.js';

export function RestaurantMapWrapper(props) {
    const { latitude, longitude, timestamp, accuracy, error, isLoadingMap } = usePosition();
    const pos = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude])
    const [{ data, isLoading }] = useYelpHook(pos, props.selData);
    
    return (
        <div>
            <div className="mapContainer">
                {isLoadingMap ? (<div>Map loading...</div>) : (
                    <MapContainer userLocation={{ lat: latitude, lng: longitude }} data={data} />
                )}
            </div>
            <div>
                <RestaurantCardContainer data={data} isLoading={isLoading}/>
            </div>
        </div>
    )
}