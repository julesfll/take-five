import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }
    onSliderChange = (value) => {
        this.setState({ value });
        this.props.radiusChange(value);
    }
    render() {
        return (
            <div>
                <Slider
                    name="radius"
                    value={this.state.value}
                    onChange={this.onSliderChange}
                    defaultValue={1}
                    min={0.5}
                    max={2}
                    step={0.05}
                />
            </div>
        )
    }
}