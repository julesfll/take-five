import React from 'react';
import { RestaurantCard } from './RestaurantCard';
import CardDeck from 'react-bootstrap/CardDeck';


export function RestaurantCardContainer(props) {
    const restaurants = props.data.businesses;

    // Checks to ensure data is loaded
    if (props.data && restaurants.length !== 0) {
        return (
            <CardDeck style={{
                display: 'flex',
                flexDirection: 'row',
                margin: 0,
                width: '100%',
            }} >
                {restaurants.map((item, index) => (
                    <RestaurantCard key={index} restaurant={item} />
                ))}
            </CardDeck>
        )

        // Displays error message if no results are found
    } else if (restaurants.length === 0 && !props.isLoading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5em' }}>
                <h1>No results found <span role="img" aria-label="shrug">🤷‍♂️</span></h1>
                <h2>Try increasing the radius or choosing more price options.</h2>
            </div>
        );
    } else {
        return null;
    }
}