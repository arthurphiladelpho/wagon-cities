import React from 'react';

const City = (props) => {
  return (
    <div className="city card-container">
      <div className="card">
        {props.city.name}
      </div>
    </div>
); };
export default City;
