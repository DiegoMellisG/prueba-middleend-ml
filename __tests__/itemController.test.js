const request = require('supertest');
const app = require('../index');

describe('dataController tests', () => {

    test('itemProcess con parámetros válidos ', async() => {
        
        const res = await request(app).get('/items/MLA1125816882').set('x-auth-token', process.env.X_AUTH_TOKEN);
        expect(res.status).toEqual(200);
    })

    test('itemProcess con parámetros inválidos ', async() => {
        
        const res = await request(app).get('/items/MLA1125816').set('x-auth-token', process.env.X_AUTH_TOKEN);
        expect(res.status).toEqual(500);
    })

    test('itemProcess con token no autorizado ', async() => {
        
        const res = await request(app).get('/items/MLA1125816').set('x-auth-token', 'test');
        expect(res.status).toEqual(401);
    })

    test('itemProcess sin header x-auth-token ', async() => {
        
        const res = await request(app).get('/items/MLA1125816');
        expect(res.status).toEqual(401);
    })

    test('itemProcess con token que envía datos mocketeados', async() => {
        
        const res = await request(app).get('/items/MLA1125816').set('x-auth-token', process.env.X_AUTH_TOKEN_MOCK);
        expect(res.status).toEqual(200);
    })
})