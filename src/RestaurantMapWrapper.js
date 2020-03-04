import React, { useMemo } from 'react';
import MapContainer from './MapContainer';
import { usePosition } from './Hooks/usePosition.js';
import { useYelpHook } from './Hooks/YelpHook';
import { RestaurantCardContainer } from './RestaurantCardContainer.js';

export function RestaurantMapWrapper(props) {
    const { latitude, longitude, error, isLoadingMap } = usePosition();
    const pos = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude])
    const [{ data, isLoading }] = useYelpHook(pos, props.selData);

    return (
        <div>
            <div className="mapContainer">
                {isLoadingMap ? (<div>Map loading...</div>) : (
                    <MapContainer userLocation={{ lat: latitude, lng: longitude }} data={data} />
                )}
            </div>
            {error && <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5em' }}>
                <h1>{error}</h1>
            </div>}
            <div style={{ height: '50vh' }}>
                <RestaurantCardContainer data={data} isLoading={isLoading} />
            </div>
        </div>
    )
}