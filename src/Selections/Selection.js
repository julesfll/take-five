import React from 'react';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import Button from 'react-bootstrap/Button';

export class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            price: '1',
            radius: '1',
            time: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.radiusChange = this.radiusChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.timeChange = this.timeChange.bind(this);
    }
    priceChange(value) {
        this.setState({ price: value.toString() })
    }
    radiusChange(value) {
        this.setState({ radius: value });
    }
    timeChange(value) {
        this.setState({ time: value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({ price: this.state.price, radius: this.state.radius, time: this.state.time });
    }
    render() {
        const item = new Date(this.state.time * 1000);

        return (
            <div className="selection">
                <h1>How much?</h1>
                <Step1 priceChange={this.priceChange} />

                <h1>How far?</h1>
                <Step2 radiusChange={this.radiusChange} />
                <h3>{parseFloat(this.state.radius).toFixed(2)} miles</h3>

                <h1>When to eat?</h1>
                <Step3 timeChange={this.timeChange} />
                <h3>{item.getHours() > 12 ? (item.getHours() - 12) + ' pm' : item.getHours() + ' am'} today</h3>
                
                <Button onClick={this.handleSubmit}>
                    Submit
                </Button>
            </div>

        );
    }
}