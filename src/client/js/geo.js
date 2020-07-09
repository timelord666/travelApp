export async function getCoordinates(address) {
    address = encodeURIComponent(address);
    const url = 'http://api.geonames.org/geoCodeAddressJSON?q=' + address + '&username=timelord';

    let response = await fetch(url);


    try {
        let data = await response.json();
        return data;

    } catch(e) {
        console.log(e);
    }
}




