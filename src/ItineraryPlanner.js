import React, { useState } from 'react';

const activitiesData = {
  Toronto: ['Ripley\'s Aquarium', 'CN Tower', 'Yonge-Dundas Square', 'Royal Ontario Museum', 'Toronto Islands'],
  Niagara: ['White water walk', 'Niagara Cruises', 'Niagara Fury', 'Niagara Skywheel', 'Journey behind the falls'],
};

const ItineraryPlanner = () => {
  const [itinerary, setItinerary] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState({});

  const handleAddCity = () => {
    const newCity = {
      id: Date.now(),
      name: '',
      days: 1,
      selectedActivities: []
    };

    setItinerary([...itinerary, newCity]);
    setSelectedActivities({ ...selectedActivities, [newCity.id]: [] });
  };

  const handleRemoveCity = (id) => {
    setItinerary(itinerary.filter((city) => city.id !== id));
    setSelectedActivities((prevSelectedActivities) => {
      const updatedSelectedActivities = { ...prevSelectedActivities };
      delete updatedSelectedActivities[id];
      return updatedSelectedActivities;
    });
  };

  const handleCityChange = (id, value) => {
    setItinerary((prevItinerary) => {
      const updatedItinerary = prevItinerary.map((city) => {
        if (city.id === id) {
          return { ...city, name: value };
        }
        return city;
      });
      return updatedItinerary;
    });
  };

  const handleDaysChange = (id, value) => {
    setItinerary((prevItinerary) => {
      const updatedItinerary = prevItinerary.map((city) => {
        if (city.id === id) {
          return { ...city, days: value };
        }
        return city;
      });
      return updatedItinerary;
    });
  };

  const handleActivityChange = (id, selectedOptions) => {
    setSelectedActivities({ ...selectedActivities, [id]: selectedOptions });
  };

  const handleAddActivity = (cityId) => {
    const selectedOptions = selectedActivities[cityId];
    setItinerary((prevItinerary) => {
      const updatedItinerary = prevItinerary.map((city) => {
        if (city.id === cityId) {
          return { ...city, selectedActivities: [...city.selectedActivities, ...selectedOptions] };
        }
        return city;
      });
      return updatedItinerary;
    });
    setSelectedActivities((prevSelectedActivities) => {
      const updatedSelectedActivities = { ...prevSelectedActivities };
      updatedSelectedActivities[cityId] = [];
      return updatedSelectedActivities;
    });
  };
  
  return (
    <div>
      <h2>Itinerary Planner</h2>
      <h3>Plan your trip here</h3>

      {itinerary.map((city) => (
        <div key={city.id}>
          <label>
            City:
            <input
              type="text"
              value={city.name}
              onChange={(e) => handleCityChange(city.id, e.target.value)}
            />
          </label>

          <label>
            Days:
            <input
              type="number"
              value={city.days}
              onChange={(e) => handleDaysChange(city.id, parseInt(e.target.value))}
            />
          </label>

          <label>
            Activities:
            <select
              multiple
              value={selectedActivities[city.id]}
              onChange={(e) =>
                handleActivityChange(city.id, Array.from(e.target.selectedOptions, (option) => option.value))
              }
            >
              {activitiesData[city.name]?.map((activity) => (
                <option key={activity} value={activity}>
                  {activity}
                </option>
              ))}
            </select>
          </label>

          <button onClick={() => handleAddActivity(city.id)}>Add Activity</button>

          <button onClick={() => handleRemoveCity(city.id)}>Remove City</button>
        </div>
      ))}

      <button onClick={handleAddCity}>Add City</button>

      <button>Save</button>
    </div>
  );
};

export default ItineraryPlanner;
