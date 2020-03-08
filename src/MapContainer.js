import React from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import { InfoCard } from './InfoCard';
import locMarker from './img/locMarker.png';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMarker: {},
            showingInfoWindow: false,
            selectedPlace: {}
        };

        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    // Show marker label on click
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = (props) => {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
    };

    render() {

        const style = {
            width: '100%',
            height: '100%',
        }

        const containerStyle = {
            height: '50vh',
            display: 'flex',
        }

        const restaurants = this.props.data.businesses;
        const { google } = this.props;

        return (
            <Map
                google={this.props.google}
                initialCenter={this.props.userLocation}
                style={style}
                containerStyle={containerStyle}
                disableDefaultUI={true}
                scaleControl={true}
                zoomControl={true}
            >
                { /* Markers for all restaurants on the map */}
                {restaurants.map((item, index) => (
                    <Marker
                        key={index}
                        onClick={this.onMarkerClick}
                        position={{ lat: item.coordinates.latitude, lng: item.coordinates.longitude }}
                        name={item.name} />
                ))}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose} >
                    <InfoCard name={this.state.selectedPlace.name} />
                </InfoWindow>

                {/* Marker for user position (blue dot) */}
                <Marker icon={{
                    url: locMarker,
                    anchor: new google.maps.Point(32, 32),
                    scaledSize: new google.maps.Size(32, 32),
                }}
                    position={this.props.userLocation}
                />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD36RySHl1eB3TTrqqzGnHB-02J4WB6mhE')
})(MapContainer);