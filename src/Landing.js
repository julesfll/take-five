import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import splash from './splash.png';

export class Landing extends React.Component {
    render() {
        return (
            <div className="landingWrap">
                <div className="titleWrap">
                    <h1>Five restaurants. Five minutes.</h1>
                    <Button onClick={() => this.props.onChange('RestaurantMap')}>
                        Get Started
                    </Button>
                </div>
                <div>
                    <img
                        className="landingImage"
                        src={splash}
                        alt="splash"
                    />
                </div>
            </div>

        )
    }
}