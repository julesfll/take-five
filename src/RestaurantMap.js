import React from 'react';
import MapContainer from './MapContainer';
import LocationGetter from './LocationGetter';

export class RestaurantMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLocation: {lat: '38.036461', lng: '-78.506335'},
        };

        this.updateLocation = this.updateLocation.bind(this);
    }

    updateLocation(lat, lng) {
        this.setState({userLocation: {lat, lng}})
    }
    render() {
        return(
            <div>
                <MapContainer userLocation={this.state.userLocation}/>
                <LocationGetter changeLoc={this.updateLocation}/>
            </div>
        )
    }
}