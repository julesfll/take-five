import React from 'react';

export class InfoCard extends React.Component {
    render() {
        return (
            <h2>{this.props.name}</h2>
        )
    }
}