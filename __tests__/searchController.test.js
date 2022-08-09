const request = require('supertest');
process.env.PORT = 3032
const app = require('../index');

describe('dataController tests', () => {

    test('searchProcess con parámetros válidos ', async() => {
        
        const res = await request(app).get('/search/MLA/test').set('x-auth-token', process.env.X_AUTH_TOKEN);
        expect(res.status).toEqual(200);
    })

    test('searchProcess con parámetros válidos y datos mocketeados ', async() => {
        
        const res = await request(app).get('/search/MLA/test').set('x-auth-token', process.env.X_AUTH_TOKEN_MOCK);
        expect(res.status).toEqual(200);
    })

    test('searchProcess sin header x-auth-token ', async() => {
        
        const res = await request(app).get('/search/MLA/test');
        expect(res.status).toEqual(401);
    })

    test('searchProcess con header x-auth-token no autorizado', async() => {
        
        const res = await request(app).get('/search/MLA/test').set('x-auth-token', 'test');
        expect(res.status).toEqual(401);
    })

    test('searchProcess con parámetro site inválido ', async() => {
        
        const res = await request(app).get('/search/MLC/test').set('x-auth-token', process.env.X_AUTH_TOKEN);
        expect(res.status).toEqual(400);
    })

    test('searchProcess con query params válidos', async() => {
        
        const res = await request(app).get('/search/MLA/test?limit=10&offset=2').set('x-auth-token', process.env.X_AUTH_TOKEN);
        expect(res.status).toEqual(200);
    })

    test('searchProcess con query params válidos agregando sort', async() => {
        
        const res = await request(app).get('/search/MLA/test?limit=10&offset=2&sort=price_asc').set('x-auth-token', process.env.X_AUTH_TOKEN);
        expect(res.status).toEqual(200);
    })

    test('searchProcess con query params válidos agregando sort no permitido', async() => {
        
        const res = await request(app).get('/search/MLA/test?limit=10&offset=2&sort=category').set('x-auth-token', process.env.X_AUTH_TOKEN);
        expect(res.status).toEqual(400);
    })

})