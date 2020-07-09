import './styles/style.scss';
import { getCoordinates } from './js/geo';
import { getWeather } from './js/weather';
import { getPic } from './js/pics';
import { update } from './js/uiUpdate';


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
       let weatherObj;
       let picsObj;

       let day = date.getDate();
       let endDay = endDate.getDate();
       let currentDay = new Date();
       let tripLength = endDay - day;
       currentDay = currentDay.getDate();
       day = day - currentDay;
       day = day > 15 ? 15 : day;




       if (address && date && endDate) {
           getCoordinates(address)
               .then(data => {
                   getWeather(data.address.lat, data.address.lng)
                       .then(weather => {
                        weatherObj = weather;
                       })
                       .then(() => {
                           getPic(data.address.adminName1)
                               .then(pics => {
                                    picsObj = pics;
                               })
                               .then(() => {
                                   update(tripLength, weatherObj, day, picsObj);
                               })
                       })
               })
       } else {
           console.log('u have to enter address and/or dates');
       }
}

export {
    getCoordinates,
    getWeather
}







