import React from 'react';
import { RestaurantCard } from './RestaurantCard';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export class RestaurantCardContainer extends React.Component {
    render() {
        const restaurants = this.props.data.businesses.slice(0, 5);

        return (<div >
            {this.props.data &&
                <Container>
                    <Row>
                        {restaurants.map((item, index) => (
                            <RestaurantCard key={index} restaurant={item} />
                        ))}
                    </Row>
                </Container>
            }
        </div>);
    }
}