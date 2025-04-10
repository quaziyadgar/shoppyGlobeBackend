const request = require('supertest');
const app = require('../index.js'); // Adjust path to your index.js

describe('GET /api/products', () => {
  it('should return a list of products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Products fetched successfully');
    expect(res.body).toHaveProperty('products');
  });
});