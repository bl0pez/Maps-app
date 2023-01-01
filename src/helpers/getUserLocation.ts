export const getUserLocation = async(): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {  
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolve([coords.longitude, coords.latitude]); // position [lng, lat]
            },
            (error) => {
                alert('No se pudo obtener la ubicación');
                reject();
            }
        )
    });
}