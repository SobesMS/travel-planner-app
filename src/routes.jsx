import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import TripOverview from './components/TripOverview';

const trips = [
  {
    id: 'paris',
    name: 'Paris Getaway',
    dates: 'June 14 - June 20, 2025',
    image: '/map-placeholder.jpg',
    itinerary: [
      'Flight to Paris',
      'Check-in at hotel',
      'Visit the Eiffel Tower',
      'Dinner at Le Jules Verne',
    ],
  },
  {
    id: 'maui',
    name: 'Maui Escape',
    dates: 'July 10 - July 20, 2025',
    image: '/map-placeholder.jpg',
    itinerary: [
      'Flight to Maui',
      'Beach day in Kaanapali',
      'Road to Hana tour',
      'Snorkeling at Molokini',
    ],
  },
  {
    id: 'tokyo',
    name: 'Tokyo Adventure',
    dates: 'September 5 - September 15, 2025',
    image: '/map-placeholder.jpg',
    itinerary: [
      'Flight to Tokyo',
      'Explore Shibuya and Shinjuku',
      'Visit Tokyo Tower',
      'Day trip to Mt. Fuji',
    ],
  },
  {
    id: 'rome',
    name: 'Rome Historical Tour',
    dates: 'October 1 - October 10, 2025',
    image: '/map-placeholder.jpg',
    itinerary: [
      'Flight to Rome',
      'Colosseum tour',
      'Visit Vatican City',
      'Toss a coin in Trevi Fountain',
    ],
  },
  {
    id: 'newyork',
    name: 'New York City Lights',
    dates: 'December 20 - December 27, 2025',
    image: '/map-placeholder.jpg',
    itinerary: [
      'Flight to NYC',
      'Broadway show',
      'Central Park tour',
      'Statue of Liberty visit',
    ],
  },
];

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App trips={trips} />} />
        {trips.map((trip) => (
          <Route
            key={trip.id}
            path={`/trip/${trip.id}`}
            element={<TripOverview trip={trip} />}
          />
        ))}
      </Routes>
    </Router>
  );
}