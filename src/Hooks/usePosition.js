/**
 * Modified code from https://github.com/trekhleb/use-position
 */

import { useState, useEffect } from 'react';

const defaultSettings = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0,
};

export const usePosition = (settings = defaultSettings) => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);
    const [isLoadingMap, setIsLoadingMap] = useState(true);

    const onChange = ({ coords, timestamp }) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            timestamp,
        });
    };

    const onError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        setIsLoadingMap(true);
        const geo = navigator.geolocation;
        if (!geo) {
            setError('Geolocation is not supported');
            return;
        }
        geo.getCurrentPosition(onChange, onError, settings);
        setIsLoadingMap(false);

    }, [settings]);
    return { ...position, error, isLoadingMap };
};