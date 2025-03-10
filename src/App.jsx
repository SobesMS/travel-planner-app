import TripCard from './components/TripCard';

export default function App({ trips }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start space-y-3 p-4">
      {trips && trips.length > 0 ? (
        trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))
      ) : (
        <p className="text-gray-600">No trips available.</p>
      )}
    </div>
  );
}