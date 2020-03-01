import React from 'react';
import { render } from 'react-dom';

export class InfoCard extends React.Component {
    render() {
        return (
            <h2>{this.props.name}</h2>
        )
    }
}