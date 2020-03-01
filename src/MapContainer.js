import React from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import { InfoCard } from './InfoCard';

const personIcon = 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOTUgMTE4Ljc1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA5NSA5NSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTQ3LjQ5OSw5MC4zOTVjMjMuNjUzLDAsNDIuODk2LTE5LjI0Myw0Mi44OTYtNDIuODk1UzcxLjE1Miw0LjYwNSw0Ny40OTksNC42MDVDMjMuODQ3LDQuNjA1LDQuNjA1LDIzLjg0OCw0LjYwNSw0Ny41ICBTMjMuODQ3LDkwLjM5NSw0Ny40OTksOTAuMzk1eiBNMjMuNTA1LDc3LjMxM2MxLjIyNy01Ljc1NSwxMS4xOC0xNS40LDIzLjk5NC0xNS40czIyLjc2OSw5LjY0NSwyMy45OTQsMTUuNCAgYy02LjU3LDUuMjk4LTE0LjkxNiw4LjQ4LTIzLjk5NCw4LjQ4UzMwLjA3NSw4Mi42MTEsMjMuNTA1LDc3LjMxM3ogTTQ3LjQ5OSw5LjIwN2MyMS4xMTUsMCwzOC4yOTUsMTcuMTc4LDM4LjI5NSwzOC4yOTMgIGMwLDEwLjIwNy00LjAyMiwxOS40ODYtMTAuNTU1LDI2LjM1OGMtMi40MTYtNS44NzQtOS4wNTctMTEuODIyLTE3LjMzLTE0LjcyM2M2LjI5OC0zLjYyLDEwLjU1Mi0xMC40MTEsMTAuNTUyLTE4LjE4MSAgYzAtMTEuNTU4LTkuNDAzLTIwLjk2MS0yMC45NjItMjAuOTYxYy0xMS41NTgsMC0yMC45Niw5LjQwMy0yMC45NiwyMC45NjFjMCw3Ljc3LDQuMjU0LDE0LjU2MSwxMC41NTEsMTguMTgxICBjLTguMjczLDIuOTAxLTE0LjkxNSw4Ljg0OS0xNy4zMywxNC43MjNDMTMuMjI4LDY2Ljk4NSw5LjIwNiw1Ny43MDcsOS4yMDYsNDcuNUM5LjIwNiwyNi4zODUsMjYuMzg1LDkuMjA3LDQ3LjQ5OSw5LjIwN3ogICBNNDcuNDk5LDU3LjMxMmMtOS4wMjEsMC0xNi4zNTgtNy4zMzgtMTYuMzU4LTE2LjM1OGMwLTkuMDIxLDcuMzM4LTE2LjM2LDE2LjM1OC0xNi4zNmM5LjAyMSwwLDE2LjM2LDcuMzM5LDE2LjM2LDE2LjM2ICBDNjMuODU5LDQ5Ljk3NCw1Ni41MjEsNTcuMzEyLDQ3LjQ5OSw1Ny4zMTJ6Ii8+PC9zdmc+';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMarker: {},
            showingInfoWindow: false,
            selectedPlace: {}
        };

        this.onMarkerHover = this.onMarkerHover.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onMarkerHover = (props, marker, e) =>
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
            width: '100vw',
            height: '50vh',
        }

        const restaurants = this.props.data.businesses.slice(0, 5);
        const { google } = this.props;

        return (
            <Map
                google={this.props.google} //need to remove restaurants and extraneous info from showing
                initialCenter={this.props.userLocation}
                style={style}
                containerStyle={containerStyle}
                streetViewControl={false}
                disableDefaultUI={true}
                scaleControl={true}
                zoomControl={true}
            >
                {restaurants.map((item, index) => (
                    <Marker
                        key={index}
                        onClick={this.onMarkerHover}
                        position={{ lat: item.coordinates.latitude, lng: item.coordinates.longitude }}
                        name={item.name} />


                ))}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose} >
                    <InfoCard name={this.state.selectedPlace.name} />
                </InfoWindow>
                <Marker icon={{
                    url: 'data:image/svg+xml;base64,' + personIcon,
                    anchor: new google.maps.Point(32, 32),
                    scaledSize: new google.maps.Size(48, 48)
                }} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD36RySHl1eB3TTrqqzGnHB-02J4WB6mhE')
})(MapContainer);