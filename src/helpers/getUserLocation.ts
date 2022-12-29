export const getUserLocation = async(): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolve([coords.latitude, coords.longitude]);
            },
            (error) => {
                alert('No se pudo obtener la ubicación');
                reject();
            }
        )
    });
}