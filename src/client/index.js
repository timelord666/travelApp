import './styles/style.scss';
import { getCoordinates } from './js/geo';
import { getWeather } from './js/weather';
import { getPic } from './js/pics';
import { update } from './js/uiUpdate';

const btn = document.querySelector('.add'); 

btn.addEventListener('click', handler); 

function handler(e) { // main function
       e.preventDefault();
       const address = document.querySelector('#address').value;
       let date = document.querySelector('#date').valueAsDate;
       let endDate = document.querySelector('#dateEnd').valueAsDate; // get data frm user
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
       day = day > 15 ? 15 : day;  // calculating  dates

       if (address && date && endDate) { // validation
           getCoordinates(address) // first api
               .then(data => {
                   getWeather(data.address.lat, data.address.lng) // second api
                       .then(weather => {
                        weatherObj = weather; // saving for future
                       })
                       .then(() => {
                           getPic(data.address.adminName1 || data.address.adminName2 || data.address.locality || data.address.street) 
                               .then(pics => { // third api, didn't find any comment about previous issue, so solved in my way
                                    picsObj = pics; // save for future
                                    
                               })
                               .then(() => {
                                   update(tripLength, weatherObj, day, picsObj); // updating the ui
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







