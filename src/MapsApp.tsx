import { PlacesProvider, MapProvider } from './context';
import { Home } from './screens';

import './index.css';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <Home />
      </MapProvider>
    </PlacesProvider>
  )
}
