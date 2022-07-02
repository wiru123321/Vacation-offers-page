import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [offers, setOffers] = useState([])

  const fetchOffers = async () => {
    try {
      const res = await fetch('/api/offers', {
        method: 'GET',
      })
      const json = await res.json()
      setOffers(json.offers)
      console.log(json.offers)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchOffers()
  }, [])

  return (
    <div className="App">
      {offers.map(
        ({
          id,
        }) => (
          <div key={id}>id{id}</div>
        ))}
    </div>
  );
}

export default App;
