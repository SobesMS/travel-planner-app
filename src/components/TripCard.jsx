import React from "react";
import { Link } from 'react-router-dom';

export default function TripCard({ trip }) {
  return (
    <Link
      to={`/trip/${trip.id}`}
      className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg relative group h-24 focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-0 group-hover:duration-300"
    >
      {/* Bottom White Fill */}
      <div className="absolute inset-0 bg-white z-0"></div>

      {/* Map Image that covers 66% width with gradient */}
      <div className="absolute inset-y-0 left-0 w-2/3 z-0 relative">
        <img
          src={trip.image || '/map-placeholder.jpg'}
          alt="Trip Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/100"></div>
      </div>

      {/* Content that overlays the map */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-end h-full p-4">
        <h2 className="text-xl font-bold text-gray-800 text-right truncate w-full">{trip.name}</h2>
        <p className="text-sm text-gray-600 text-right truncate w-full">{trip.dates}</p>
      </div>
    </Link>
  );
}