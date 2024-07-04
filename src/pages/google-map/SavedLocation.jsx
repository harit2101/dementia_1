import React, { useEffect, useState } from 'react';
import { Storage } from '@capacitor/storage';

const SavedLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const loadLocations = async () => {
      const result = await Storage.get({ key: 'locations' });
      const savedLocations = result.value ? JSON.parse(result.value) : [];
      setLocations(savedLocations);
    };

    loadLocations();
  }, []);

  return (
    <div>
      <h2>Saved Locations</h2>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            {location.name} (Lat: {location.lat}, Lng: {location.lng})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedLocations;
