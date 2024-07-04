
import React, { useEffect } from 'react';
import { GoogleMap } from '@capacitor/google-maps';

const Map = () => {
  useEffect(() => {
    const initializeMap = async () => {
      const map = await GoogleMap.create({
        id: 'google-map',
        element: document.getElementById('map'),
        apiKey: 'AIzaSyCN62pnW4rjC7GZt8uokOl3cO2UCEdas3w',
        config: {
          center: {
            lat: 37.7749, // Change to your latitude
            lng: -122.4194, // Change to your longitude
          },
          zoom: 12,
        },
      });

      await map.addMarker({
        coordinate: {
          lat: 37.7749, // Change to your latitude
          lng: -122.4194, // Change to your longitude
        },
        title: 'San Francisco',
        snippet: 'This is a cool place',
      });
    };

    initializeMap();
  }, []);

  return (
    <div id="map" style={{ height: '100%', width: '100%' }}></div>
  );
};

export default Map;

