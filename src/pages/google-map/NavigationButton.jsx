import React from 'react';
import { Browser } from '@capacitor/browser';
import { IonButton } from '@ionic/react';

const navigateToLocation = (lat, lng) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  Browser.open({ url });
};

const NavigationButton = () => {
  return (
    <IonButton onClick={() => navigateToLocation(37.7749, -122.4194)}>
      Navigate to San Francisco
    </IonButton>
  );
};

export default NavigationButton;
