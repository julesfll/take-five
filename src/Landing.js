import React from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import splash from './Images/splash.png';

export class Landing extends React.Component {
    render() {
        return (
            <Row className="landingWrap">
                <Col className="titleWrap">
                    <h1 style={{marginBottom: '0.5em'}}>Five restaurants. Five minutes.</h1>
                    <Button onClick={() => this.props.onChange('Selection')}>
                        Get Started
                    </Button>
                </Col>
                <Col className="landingImage">
                    <img
                        src={splash}
                        alt="splash"
                    />
                </Col>
            </Row>

        )
    }
}