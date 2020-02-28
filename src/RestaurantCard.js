import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class RestaurantCard extends React.Component {
    render() {
        const rest = this.props.restaurant;
        const card = <div>
            {rest && (               
                <Card>
                    <Card.Img variant="top" src={rest.image_url} />
                    <Card.Body>
                        <Card.Title>{rest.name}</Card.Title>
                        <Card.Subtitle style={{ 'text-transform': 'uppercase', color: 'grey' }}>{rest.categories[0].title}</Card.Subtitle>
                        <Card.Text>
                            {rest.price}, {rest.rating} stars
                        </Card.Text>
                        <Button href={rest.url} variant="primary">Find on Yelp</Button>
                    </Card.Body>
                </Card>
            )}
        </div>;

        return card;
    }
}