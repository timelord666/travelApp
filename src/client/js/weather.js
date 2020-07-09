export async function getWeather(lat, lng) {
    const keyResp = await fetch('/key');
    let key;



    try {
        key = await keyResp.json();
 
    } catch(e) {
        console.log(e);
        
    }


    if (key) {

        
        





        const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${key}`;



        const dataResp = await fetch(url);
        

        try {
            const data = await dataResp.json();
            return data;
        } catch(e) {
            console.log(e);
            
        }

    }

}