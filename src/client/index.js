import './styles/style.scss';
import { getCoordinates } from './js/geo';
import { getWeather } from './js/weather';
import { getPic } from './js/pics';


const trips = [];
const btn = document.querySelector('#generate');

btn.addEventListener('click', handler);

function handler(e) {
       e.preventDefault();

       const address = document.querySelector('#address').value;
       let date = document.querySelector('#date').valueAsDate;

       console.log('here');

       console.log(date.getDate());

       let day = date.getDate();
       let currentDay = new Date();
       currentDay = currentDay.getDate();
       day = day - currentDay;
       day = day > 15 ? 15 : day;

       console.log(day);


       if (address && date) {
           getCoordinates(address)
               .then(data => {
                   console.log(data.address);
                   getWeather(data.address.lat, data.address.lng)
                       .then(weather => {



                           //console.log('done');



                           console.log(weather.data[day].valid_date);

                       })
                       .then(() => {
                           console.log(data.address.adminName1);
                           getPic(data.address.adminName1)
                               .then(pics => {
                                   console.log(pics.hits[0].webformatURL);

                               })

                       })


               })




           console.log(date);
           const data = {
               date
           }
           trips.push(data);



       } else {
           console.log('u have to enter address');

       }
}

export {
    getCoordinates,
    getWeather
}







