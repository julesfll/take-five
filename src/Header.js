import React from 'react';
import logo from './Images/logo.png';
import ghLogo from './Images/gh-logo.png';
import Row from 'react-bootstrap/Row';

export class Header extends React.Component {
    render() {
        return (
            <Row className="header" style={{
                margin: 0,
                width: '100%',
            }}>
                <img
                    className="Logo"
                    src={logo}
                    alt="logo"
                    height="80px"
                    width="80px"
                />
                <h1 className="Title">TakeFive</h1>
                <a
                    href="https://github.com/julesfll/take-five"
                    target="_blank"
                    style={{ marginLeft: 'auto', marginRight: '15px' }}>
                    <img
                        src={ghLogo}
                        alt="github link"
                        height="50px"
                        width="50px"
                        style={{ cursor: 'pointer' }}
                    />
                </a>
            </Row >
        )
    }
}