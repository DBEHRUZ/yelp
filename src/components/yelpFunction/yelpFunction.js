import React from 'react';

function YelpFunction({ restaurant, description, city, handleSubmit, handleDelete }) {
  return (
    <div className="card">
      <h3>{restaurant.name}</h3>
      <p className="des">{restaurant.description}</p>
      <p className="city">{restaurant.city}</p>
      <button onClick={handleDelete} className="del">Delete</button>
    </div>
  );
}

export default YelpFunction;
