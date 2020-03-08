import React from 'react';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import Button from 'react-bootstrap/Button';

export class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '1',
            radius: 1,
            time: (Math.floor((new Date()).getTime() / 1000)), // Current time in UTC
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    changeValue(state, value) {
        this.setState({ [state]: value });
    }
    // Passes selection data to Body where it will be passed to YelpHook
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({
            price: (this.state.price).toString(),
            radius: this.state.radius,
            time: this.state.time
        });
        console.log('Selection time: ' + this.state.time);
    }
    render() {
        const item = new Date(this.state.time * 1000);

        return (
            <div className="selection">
                <h1>How much?</h1>
                <Step1 handleChange={this.changeValue} />

                <h1>How far?</h1>
                <Step2 handleChange={this.changeValue} />
                <h3>{parseFloat(this.state.radius).toFixed(2)} miles</h3>

                <h1>When to eat?</h1>
                <Step3 handleChange={this.changeValue} />
                <h3>{item.getHours() > 12 ? (item.getHours() - 12) + ' pm' : item.getHours() + ' am'} today</h3>

                <Button onClick={this.handleSubmit}>
                    Submit
                </Button>
            </div>

        );
    }
}