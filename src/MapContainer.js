import React from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import { InfoCard } from './InfoCard';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markerData: [],
            activeMarker: {},
            showingInfoWindow: false,
        };
        this.handleMouseoverMarker = this.handleMouseoverMarker.bind(this);
    }
    handleMouseoverMarker = (props, marker, e) =>
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true,
        })

    render() {

        const style = {
            width: '100%',
            height: '100%',
        }

        const containerStyle = {
            width: '90vw',
            height: '50vh',
        }

        return (
                <Map
                    google={this.props.google} //need to remove restaurants and extraneous info from showing
                    initialCenter={this.props.userLocation}
                    style={style}
                    containerStyle={containerStyle}
                >
                    <Marker
                        onMouseover={this.handleMouseoverMarker}
                        name={'Demo marker'}
                        position={this.userLocation}/>
                    
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        >
                        <InfoCard />
                    </InfoWindow>
                </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD36RySHl1eB3TTrqqzGnHB-02J4WB6mhE')
}) (MapContainer);