import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class RestaurantCard extends React.Component {
    render() {
        const rest = this.props.restaurant;
        if (rest) {
            const card =
                (
                    <Card style={{ flex: 1, marginTop: '1em' }}>
                        <Card.Img variant="top" src={rest.image_url} style={{'object-fit': 'cover', height: '10vw'}}/>
                        <Card.Body>
                            <Card.Title>{rest.name}</Card.Title>
                            <Card.Subtitle style={{ 'textTransform': 'uppercase', color: 'grey' }}>{rest.categories[0].title}</Card.Subtitle>
                            <Card.Text>
                                {rest.price}, {rest.rating} stars
                        </Card.Text>
                            <Button href={rest.url} target="_blank" variant="primary">Find on Yelp</Button>
                        </Card.Body>
                    </Card>
                )
            return card;
        } else {
            return null
        }
    }
}