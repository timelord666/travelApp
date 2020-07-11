export function update(length, weather, day, pics) {
    const ul = document.querySelector('.trips'); // find our lsit
    const li = document.createElement('li'); // create item

    if (pics.totalHits > 0) { // check for image

    li.innerHTML = `       
        <div class="length">
            <p>
                Length of the trip: ${length} day(s)
            </p>
        </div>
        <div class="weather">
            <p>Wind speed: ${weather.data[day].wind_spd}</p>
            <p>High temp: ${weather.data[day].high_temp} <br> 
                Low temp: ${weather.data[day].low_temp} 
            </p>
            <p> Weather: ${weather.data[day].weather.description} </p>
        </div>
        <div class="pic">
            <img src="${pics.hits[0].webformatURL}" alt="city pic">
        </div>
    `;
        // filling item with data
    } else {
        li.innerHTML = `
        <div class="length">
            <p>
                Length of the trip: ${length} day(s)
            </p>
        </div>
        <div class="weather">
            <p>Wind speed: ${weather.data[day].wind_spd}</p>
            <p>High temp: ${weather.data[day].high_temp} <br> 
                Low temp: ${weather.data[day].low_temp} 
            </p>
            <p> Weather: ${weather.data[day].weather.description} </p>
        </div>
        <div class="pic">
            <img src="https://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png" alt="city pic">
        </div>
    `; // same data but default image
    } 

    ul.appendChild(li); // add on the page
}