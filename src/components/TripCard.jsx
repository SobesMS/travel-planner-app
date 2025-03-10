import React from "react";

export default function TripCard() {
  return (
    <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg relative group border-2 border-black h-24">
      {/* Background Map Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/map-placeholder.jpg"
          alt="Trip Map"
          className="w-full h-full object-cover"
        />
        {/* Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/100"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-end h-full p-4">
        <h2 className="text-xl font-bold text-gray-800 text-right">Paris Getaway</h2>
        <p className="text-sm text-gray-600 text-right">June 14 - June 20, 2025</p>
      </div>
    </div>
  );
}