import { useContext, useLayoutEffect, useRef } from 'react';
import { PlacesContext } from '../context';
import { Map } from 'mapbox-gl';
import { Loading } from './';

export const MapView = () => {
    const { isLoading, userLocation } = useContext(PlacesContext);
    console.log({userLocation});
    
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if( !isLoading){
            const map = new Map({
                container: mapDiv.current!,
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 9, // starting zoom
                });
        }
    }, [ isLoading, userLocation ])

    if (isLoading) {
        return (<Loading />)
    }


    return (
        <div ref={mapDiv}
            style={{
                height: '100%',
                width: '100%',
                position: 'fixed',
                top: 0,
            }}
        >
            {userLocation?.join(', ')}
        </div>
    )
}
