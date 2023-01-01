import { useContext } from 'react'
import { MapContext, PlacesContext } from '../context'

export const BtnMyLocation = () => {

    const { map, isMapReady } = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext);

    const onClick = () => {
        if(!isMapReady) throw new Error('Map is not ready');
        if(!userLocation) throw new Error('User location is not ready');

        map?.flyTo({
            zoom: 9,
            center: userLocation,
        });

    }

  return (
    <button 
        className="btn btn-primary"
        onClick={onClick}
        style={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 999,
        }}
        >
        <i className="fas fa-map-marker-alt"></i>
        <span> My Location</span>
    </button>
  )
}
