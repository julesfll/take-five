import { useState, useEffect } from 'react';
import axios from 'axios';

export const useYelpHook = (loc, selData) => {
    // Convert radius from miles to meters
    console.log('Hook time ' + selData.time);
    const radius_m = Math.trunc(parseFloat(selData.radius) * 1609.34);
    const API_KEY = 's4fNt_-ND4nCviBOL3gPAGg7NDDJaes9eUvsvQ6f4DWmY6fMWqHPiVbznBdCpFyZFSGSteUujFIxvB8OAq0nzpC8xEMGQ2x0ZbHQ97pb6C3x7MtsTqW3nw28NAVTXnYx';
    const config = {
        headers: { Authorization: `Bearer ${API_KEY}` },
        params: {
            term: 'restaurant',
            latitude: loc.lat,
            longitude: loc.lng,
            radius: radius_m,
            // sort_by: 'rating', // disabled because API would pull restaurants from really far away if no well-rated restaurants nearby were found
            price: selData.price,
            open_at: selData.time,
            limit: 5, // only retrieves 5 restaurants
        }
    }

    const [data, setData] = useState({ businesses: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios('https://cors-anywhere.herokuapp.com/'+'https://api.yelp.com/v3/businesses/search', config);
            setData(result.data);
            setIsLoading(false);
        };

        fetchData();
    }, [loc])

    return [{ data, isLoading }];
}
