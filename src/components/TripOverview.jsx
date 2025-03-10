import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TripOverview({ trip }) {
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="relative bg-blue-600 p-4 flex flex-col items-center justify-center">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition duration-300 text-3xl font-bold"
          >
            ←
          </button>
          <h1 className="text-3xl font-bold text-white text-center">{trip.name}</h1>
          <p className="text-md text-white text-center">{trip.dates}</p>
        </div>

        <div className="p-6 space-y-4">
          {/* Google Maps Embed */}
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              title="Trip Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(trip.name)}`}
            ></iframe>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">Itinerary</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {trip.itinerary.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}