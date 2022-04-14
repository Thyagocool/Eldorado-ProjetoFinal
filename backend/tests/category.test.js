const request = require('supertest')
const app = require('../src/app')

describe('Endpoints Categories tests', () => {
    const category = {
        "id": 1,
        "name": "Smartphone"
    }
    it('Should GET Categories', async ()=> {
        const res = await request(app).get('/api/categories/:1')
        expect(category).toHaveProperty('id', 1)
        expect(category).toHaveProperty('name', 'Smartphone')
    })
})