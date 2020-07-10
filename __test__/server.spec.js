import request from 'supertest';
import '@babel/polyfill';
import app from '../src/server/app';


describe('get key', () => {
    test('status',  async () => {
        const response = await request(app).get('/key');
        expect(response.status).toBe(200);
        
        
    })
})

