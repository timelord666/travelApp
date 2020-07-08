import './styles/style.scss';
import { getCoordinates } from './js/geo';
import { getWeather } from './js/weather';
import { getPic } from './js/pics';
import { update } from './js/uiUpdate';

const trips = [];
const btn = document.querySelector('.add');

btn.addEventListener('click', handler);

function handler(e) {
       e.preventDefault();

       const address = document.querySelector('#address').value;
       let date = document.querySelector('#date').valueAsDate;
       let endDate = document.querySelector('#dateEnd').valueAsDate;

       if (endDate < date) {
           console.log('end date can not be lesser than date');
           return;
           
       }

       console.log('here');

       console.log(date.getDate());
       let weatherObj;
       let picsObj;

       let day = date.getDate();
       let endDay = endDate.getDate();
       let currentDay = new Date();
       let tripLength = endDay - day;
       currentDay = currentDay.getDate();
       day = day - currentDay;
       day = day > 15 ? 15 : day;

       console.log(day);


       if (address && date && endDate) {
           getCoordinates(address)
               .then(data => {
                   console.log(data.address);
                   getWeather(data.address.lat, data.address.lng)
                       .then(weather => {


                        weatherObj = weather;
                           //console.log('done');



                           console.log(weather.data[day].valid_date);

                       })
                       .then(() => {
                           console.log(data.address.adminName1);
                           getPic(data.address.adminName1)
                               .then(pics => {

                                    picsObj = pics;
                                    console.log(pics.hits[0].webformatURL);
                                    console.log(tripLength);
                                    
                               })
                               .then(() => {
                                   update(tripLength, weatherObj, day, picsObj);
                               })

                       })


               })




           console.log(date);
           const data = {
               date
           }
           trips.push(data);



       } else {
           console.log('u have to enter address and/or dates');

       }
}

export {
    getCoordinates,
    getWeather
}







