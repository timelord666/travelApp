import { update } from '../src/client/js/uiUpdate';

describe('uiUpdate function', () => {
    test('update ui', () => {
        document.body.innerHTML = `
            <ul class="trips">
                    
            </ul>
        `;



        const weather = {
            data: [
                {
                    wind_spd: 2,
                    high_temp: 25,
                    low_temp: 12,
                    weather: {
                        description: 'clouds'
                    }
                }
            ]
        }

        const pics = {
            hits: [
                {
                    webformatURL: 'someURL'
                }
            ]
        }


        update(5, weather, 0, pics);
        const pic = document.querySelector('.pic').innerHTML;

        
        expect(pic).toEqual(`
            <img src="someURL" alt="city pic">
        `);

        
    })
})