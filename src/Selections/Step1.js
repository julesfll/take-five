import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export class Step1 extends React.Component {
    render() {
        return (
            <div>
                {[1, 2, 3, 4].map((item, index) => (
                    <Button
                        style={{ fontSize: '1.5em' }}
                        className="priceButton"
                        key={index}
                        name="price"
                        variant="light"
                        value={item}
                        onClick={this.props.handleChange}>
                        {'$'.repeat(item)}
                    </Button>


                ))}
            </div>
        )
    }
}