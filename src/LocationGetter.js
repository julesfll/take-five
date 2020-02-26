import React from 'react';
import { geolocated } from 'react-geolocated';

class LocationGetter extends React.Component {
    render() {
        return <div></div>
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(LocationGetter);