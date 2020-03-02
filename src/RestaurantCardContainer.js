import React from 'react';
import { RestaurantCard } from './RestaurantCard';
import CardDeck from 'react-bootstrap/CardDeck';


export class RestaurantCardContainer extends React.Component {
    render() {
        const restaurants = this.props.data.businesses.slice(0, 5);
        if (this.props.data && restaurants.length != 0) {
            return (
                <CardDeck style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: 0,
                    width: '100%'
                }} >
                    {restaurants.map((item, index) => (
                        <RestaurantCard key={index} restaurant={item} />
                    ))}
                </CardDeck>
            )
        } else if (restaurants.length === 0 && !this.props.isLoading) {
            return (
                <div>
                    <h1>No results found :(</h1>
                    <h2>Try increasing the radius or choosing more price options.</h2>
                </div>
            );
        } else {
            return null;
        }
    }
}