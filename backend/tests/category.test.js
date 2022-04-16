const supertest = require('supertest')
const app = require('../src/app')



describe('Endpoints Categories tests', () => {

    it('Should GET Categories', async ()=> {
        const res = await supertest(app).get('/api/categories')

        expect(res.statusCode).toEqual(200)
        expect(res.body[0].id).toBeTruthy()
        expect(res.body[0].name).toBeTruthy()
    })

    it('Should GET One Category', async ()=> {
        const res = await supertest(app).get('/api/categories/1')

        expect(res.statusCode).toEqual(200)
        expect(res.body.id).toBeTruthy()
        expect(res.body.name).toBeTruthy()
    })  

    it('Should Post Category', async () => {
        const category = {
            "name": "SmartNote"
        }
        const res = await supertest(app).post('/api/categories').send(category)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('name', 'SmartNote')
        
    })

    it('Should Put Category', async () => {
        const category = {   
            "id": 11,
            "name": "SmartTablet"
        }
        const res = await supertest(app).put('/api/categories').send(category)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('name', 'SmartTablet')

    })

    it('Should Delete Category', async () => {
        const category = {   
            "id": 11,
            "name": "SmartTablet"
        }
        const res = await supertest(app).delete('/api/categories/40')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message', 'Categoria Excluida')

    })
})