import React, { useState } from 'react';
import YelpFunction from '../yelpFunction/yelpFunction';
import { API } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import '../yelp.css';

const YelpForm = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [formData, setFormData] = useState({
    restaurant: '',
    description: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.restaurant,
      description: formData.description,
      city: formData.city
    };

    // Add API call or database logic here to save the data
    // For example, using AWS Amplify:
    // await API.post('restaurantAPI', '/restaurants', { body: data });

    setRestaurants([...restaurants, data]);
    setFormData({
      restaurant: '',
      description: '',
      city: ''
    });
  };

  const handleDelete = (index) => {
    const updatedRestaurants = [...restaurants];
    updatedRestaurants.splice(index, 1);
    setRestaurants(updatedRestaurants);
  };

  return (
    <div className="yelp">
      <form onSubmit={handleSubmit}>
        <label>
          Restaurant:
          <input
            type="text"
            name="restaurant"
            value={formData.restaurant}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="crt">Create</button>
      </form>
      <div className="card-list">
        {restaurants.map((restaurant, index) => (
          <YelpFunction
            key={index}
            restaurant={restaurant}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default YelpForm;
