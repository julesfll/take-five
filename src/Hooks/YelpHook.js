import { useState, useEffect } from 'react';
import axios from 'axios';

export const useYelpHook = (loc, selData) => {
    const radius_m = Math.trunc(parseFloat(selData.radius) * 1609.34) + '';
    const API_KEY = 's4fNt_-ND4nCviBOL3gPAGg7NDDJaes9eUvsvQ6f4DWmY6fMWqHPiVbznBdCpFyZFSGSteUujFIxvB8OAq0nzpC8xEMGQ2x0ZbHQ97pb6C3x7MtsTqW3nw28NAVTXnYx';
    const config = {
        headers: { Authorization: `Bearer ${API_KEY}` },
        params: {
            term: 'restaurant',
            latitude: '',
            longitude: '',
            radius: radius_m,
            sort_by: 'rating',
            price: selData.price,
            open_at: selData.time,
        }
    }

    const [data, setData] = useState({ businesses: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        config.params.latitude = loc.lat;
        config.params.longitude = loc.lng;
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, config);
            setData(result.data);
            setIsLoading(false);
        };

        fetchData();
    }, [loc])

    return [{ data, isLoading }];
}
