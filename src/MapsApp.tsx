import { PlacesProvider } from './context';
import { Home } from './screens';

import './index.css';

export const MapsApp = () => {
  return (
    <PlacesProvider>
        <Home />
    </PlacesProvider>
  )
}
