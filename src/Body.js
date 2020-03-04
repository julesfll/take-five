import React from 'react';
import { Landing } from './Landing.js';
import { RestaurantMapWrapper } from './RestaurantMapWrapper';
import { Selection } from './Selections/Selection';

export class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: 'Landing', selData: {price: '1', radius: 1, time: (Math.floor((new Date()).getTime() / 1000))} };
        this.changePage = this.changePage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changePage = (name) => this.setState({ page: name });
    handleSubmit = (input) => {
        this.setState({
            page: 'RestaurantMap',
            selData: input
        });
    }
    render() {
        var out;
        switch (this.state.page) {
            case 'RestaurantMap':
                out = <RestaurantMapWrapper selData={this.state.selData}/>;
                break;
            case 'Selection':
                out = <Selection onSubmit={this.handleSubmit} />;
                break;
            default:
                out = <Landing onChange={this.changePage} />;
        }
        return out;
    }
}