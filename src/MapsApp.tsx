import { PlacesProvider } from './context';
import { Home } from './screens';

import './index.css';
import { MapProvider } from './context/map/MapProvider';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <Home />
      </MapProvider>
    </PlacesProvider>
  )
}
