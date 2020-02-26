import React from 'react';
import logo from './logo.png';

export class Header extends React.Component {
    render() {
        return(
            <div className="container header">
                <img
                    className="Logo"
                    src={logo}
                    alt="logo"
                    height="80px"
                    width="80px"
                />
                <h1 className="Title">TakeFive</h1>
            </div>
        )
    }
}