import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ5YW5sb3BlenMiLCJhIjoiY2t0OHNuamhnMTR5ODJ3cGxlcnF5OWg1OCJ9.ZYmJvqeqJ40HbkMbnUW_cw';

if( !navigator.geolocation ) {
  alert('Tu navegador no soporta geolocalización');
  throw new Error('Tu navegador no soporta geolocalización');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);