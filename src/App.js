import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import DestinationPage from './DestinationPage';
import Toronto from './Toronto';
import Niagara from './Niagara';
import ContactUsPage from './ContactUsPage';
import ItineraryPlanner from './ItineraryPlanner';

function App() {
  const [currentPage, setCurrentPage] = useState('destinations');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header onPageChange={handlePageChange} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/destinations" component={DestinationPage} />
        <Route exact path="/Toronto" component={Toronto} />
        <Route exact path="/Niagara" component={Niagara} />
        <Route exact path="/contact-us" component={ContactUsPage} />
        <Route exact path="/ItineraryPlanner" component={ItineraryPlanner} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
