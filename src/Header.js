import React from 'react';
import logo from './logo.png';
import Row from 'react-bootstrap/Row';

export class Header extends React.Component {
    render() {
        return(
            <Row className="d-flex align-items-center header">
                <img
                    className="Logo"
                    src={logo}
                    alt="logo"
                    height="80px"
                    width="80px"
                />
                <h1 className="Title">TakeFive</h1>
            </Row>
        )
    }
}