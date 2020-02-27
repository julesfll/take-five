import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useYelpHook = (initialLoc) => {
    const API_KEY = 's4fNt_-ND4nCviBOL3gPAGg7NDDJaes9eUvsvQ6f4DWmY6fMWqHPiVbznBdCpFyZFSGSteUujFIxvB8OAq0nzpC8xEMGQ2x0ZbHQ97pb6C3x7MtsTqW3nw28NAVTXnYx';
    const config = {
        headers: { Authorization: `Bearer ${API_KEY}` },
        params: {
            term: 'food',
            latitude: '38.036214',
            longitude: '-78.509277',
            radius: '1000',
            sort_by: 'rating'
        }
    }
    const [data, setData] = useState({ businesses: [] });
    const [loc, setLoc] = useState(initialLoc);
    useEffect(() => {
        config.params.latitude = loc.lat;
        config.params.longitude = loc.lng;
        const fetchData = async () => {
            const result = await axios(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, config);
            setData(result.data);
        };

        fetchData();
    }, [loc])
    return [{data}, setLoc];
}
