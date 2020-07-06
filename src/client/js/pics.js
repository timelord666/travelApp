export async function getPic(query) {

    const keyResp = await fetch('/pickey');
    let key;



    try {
        key = await keyResp.json();

    } catch (e) {
        console.log(e);

    }

    if (key) {
        console.log(key);


        const url = `https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(query)}&image_type=photo&category=travel`;

        const response = await fetch(url);

        try {
            const data = await response.json();
            return data;
        } catch(e) {
            console.log(e);
            
        }



    }
}