import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const DestinationPage = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        navigateToDestination(searchValue);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [searchValue]);

  const navigateToDestination = (query) => {
    const destinations = [
      { name: 'Niagara Falls', path: '/niagara-falls' },
      { name: 'Toronto', path: '/toronto' },
      { name: 'Vancouver', path: '/vancouver' },
      { name: 'Banff', path: '/banff' },
      { name: 'Montreal', path: '/montreal' },
    ];

    const matchedDestination = destinations.find((destination) =>
      destination.name.toLowerCase().includes(query.toLowerCase())
    );

    if (matchedDestination) {
      history.push(matchedDestination.path);
    }
  };

  return (
    <div>
      <section className="search-section">
        <input
          type="text"
          placeholder="Search by name, city, or province"
          value={searchValue}
          onChange={handleSearch}
        />
      </section>
      <section className="top-places-section">
        <h2>Top Places</h2>
        <div className="top-places">
          <div className="place">
            <img src="toronto.jpg" alt="Toronto" />
            <Link to="/toronto">Toronto</Link>
          </div>
          <div className="place">
            <img src="vancouver.jpg" alt="Place 2" />
            <Link to="/vancouver">Vancouver</Link>
          </div>
          <div className="place">
            <img src="Niagara.jpg" alt="Niagara Falls" />
            <Link to="/Niagara">Niagara Falls</Link>
          </div>
          <div className="place">
            <img src="Banff.jpg" alt="Banff" />
            <Link to="/banff">Banff</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;

