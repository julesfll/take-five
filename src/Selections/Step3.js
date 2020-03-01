import React from 'react';
import Button from 'react-bootstrap/Button';
import DateTimePicker from 'react-datetime-picker';

export class Step3 extends React.Component {
    render() {
        const currentTime = new Date();
    
        return (
            <div>
                <Button
                    variant="light"
                    name="time"
                    value={currentTime}
                    onClick={this.props.handleChange}
                >Now</Button>
                {/* <Button
                        key={index}
                        name="price"
                        variant="light"
                        value={item}
                        onClick={this.props.handleChange}>
                        {'$'.repeat(item)}
                    </Button> */}
            </div>
        )
    }
}