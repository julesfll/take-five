import React from 'react';

export class RestaurantCards extends React.Component {
    render() {
        const restaurants = [];
        console.log(this.props.data);
        const restBlock = this.props.data.businesses;
        for(let i = 0;i < 5;i++) {
            restaurants.push({
                name: restBlock.name
            })
        }
        return (
            <div className="restCards">
                <h1>Restaurant Name #1 {restaurants[0].name}</h1>
                <ul>
                    <li>
                        Category
                    </li>
                    <li>
                        Image?
                    </li>
                    <li>
                        Address (hyperlinked with Google Maps)
                    </li>
                    <li>
                        Price
                    </li>
                    <li>
                        Rating
                    </li>
                    <li>
                        Website
                    </li>
                </ul>
            </div>
        )
    }
}