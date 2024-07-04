import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
import { Storage } from '@capacitor/storage';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const SearchLocation= () => {
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const inputRef = useRef(null);

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const onAutocompleteLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const location = place.geometry.location;
        map?.setCenter(location);
        map?.setZoom(15);
        const marker = new google.maps.Marker({
          position: location,
          map: map,
          title: place.name,
        });
        saveLocation(place.name || '', location.lat(), location.lng());
      }
    }
  };

  const saveLocation = async (name , lat , lng ) => {
    const existingData = await Storage.get({ key: 'locations' });
    const locations = existingData.value ? JSON.parse(existingData.value) : [];
    locations.push({ name, lat, lng });
    await Storage.set({ key: 'locations', value: JSON.stringify(locations) });
    alert('Location saved!');
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCN62pnW4rjC7GZt8uokOl3cO2UCEdas3w" libraries={['places']}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Search for a place"
        style={{
          position: 'absolute',
          top: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      />
      <Autocomplete
        onLoad={onAutocompleteLoad}
        onPlaceChanged={onPlaceChanged}
      >
        <input ref={inputRef} type="text" placeholder="Search for a place" style={{ width: '100%' }} />
      </Autocomplete>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
      />
    </LoadScript>
  );
};

export default SearchLocation;
