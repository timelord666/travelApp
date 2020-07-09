import request from 'supertest';
import '@babel/polyfill';
import server from '../src/server/server';


describe('get key', () => {
    test('status',  async () => {
        const response = await request(server).get('/key');
        expect(response.status).toBe(200);
        
        
    })
})

