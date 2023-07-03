import React from 'react';

const Niagara = () => {
  return (
    <div>
      <h2>Niagara Falls</h2>
      <img src="Niagara1.jpg" alt="Niagara Falls" />
      <div className="attractions-section">
        <h3>Niagara Attractions</h3>
        <div className="attractions">
          <div className="attraction">
            <img src="whitewaterwalk.jpg" alt="White Water Walk" />
            <p>White Water Walk</p>
          </div>
          <div className="attraction">
            <img src="niagaracruises.jpg" alt="Niagara Cruises" />
            <p>Niagara Cruises</p>
          </div>
          <div className="attraction">
            <img src="fury.jpg" alt="Niagara Fury" />
            <p>Niagara Fury</p>
          </div>
          <div className="attraction">
            <img src="journeybehind.jpg" alt="Journey behind the falls" />
            <p>Journey behind the Falls</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Niagara;
