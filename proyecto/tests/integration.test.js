const request = require('supertest');
const { app } = require('../src/index');

describe('Rutas principales', () => {
  test('GET / debe devolver mensaje de bienvenida', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('pipeline');
  });

  test('GET /suma debe devolver el resultado correctamente', async () => {
    const res = await request(app).get('/suma?a=5&b=7');
    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(12);
  });
});
