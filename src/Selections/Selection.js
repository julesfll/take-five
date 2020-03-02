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
            radius: '1000',
            time: '11',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.radiusChange = this.radiusChange.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    radiusChange(value) {
        this.setState({ radius: value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({ price: this.state.price, radius: this.state.radius });
    }
    render() {
        return (
            <div className="selection">
                <h1>How much?</h1>
                <Step1 handleChange={this.handleChange} />
                <h3>{'$'.repeat(this.state.price)}</h3>

                <h1>How far?</h1>
                <Step2 radiusChange={this.radiusChange}/>
                <h3>{this.state.radius} meters (at most)</h3>
                {/* <Step3 handleChange={this.handleChange}/>
                <h1>{this.state.time}</h1> */}
                <Button onClick={this.handleSubmit}>
                    Submit
                </Button>
            </div>

        );
    }
}