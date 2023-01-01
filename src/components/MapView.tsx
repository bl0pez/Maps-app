import { useContext, useLayoutEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import { PlacesContext, MapContext } from '../context';
import { Loading } from './';

export const MapView = () => {
    const { isLoading, userLocation } = useContext(PlacesContext);
    const { setMap } = useContext(MapContext);
    

    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if( !isLoading){
            const map = new Map({
                container: mapDiv.current!,
                style: 'mapbox://styles/mapbox/streets-v10', // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 9, // starting zoom
                });

            setMap(map);

        }
    }, [ isLoading ])

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
        </div>
    )
}
