import React from 'react';
import { Landing } from './Landing.js';
import { RestaurantMapWrapper } from './RestaurantMapWrapper';

export class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: 'landing'};
        this.changePage = this.changePage.bind(this);
    }
    changePage = (name) => this.setState({page: name}); 

    render() {
        const out = this.state.page === 'landing' ? <Landing onChange={this.changePage}/> : <RestaurantMapWrapper />;
        // const out = <RestaurantMapWrapper />;
        return out;
    }
}