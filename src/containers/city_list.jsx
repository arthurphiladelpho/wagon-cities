import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  render() {
    return (
      <div className="city-list col-sm-7">
        { this.props.cities.map((city) => {
          return (
            <City key={city.name} city={city} />
          );
        })}
      </div>
    );
  }
}

export default CityList;
