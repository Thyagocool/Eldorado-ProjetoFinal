const supertest = require('supertest')
const app = require('../src/app')

describe('Endpoints Devices tests', () => {

    it('Should GET Devices', async ()=> {
        const res = await supertest(app).get('/api/devices')

        expect(res.statusCode).toEqual(200)
        expect(res.body[0].id).toBeTruthy()
        expect(res.body[0].name).toBeTruthy()
    })

    it('Should GET One Device', async ()=> {
        const res = await supertest(app).get('/api/devices/1')

        expect(res.statusCode).toEqual(200)
        expect(res.body.id).toBeTruthy()
        expect(res.body.name).toBeTruthy()
    })  

    it('Should Post Device', async () => {
        const device =  {
            "name": "Iphone XR 15",
            "category_id": 3, 
            "color": "SPACE GRAY",
            "partnumber": 11554466
        }
        const res = await supertest(app).post('/api/devices').send(device)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('name', 'Iphone XR 15')
        expect(res.body).toHaveProperty('category_id', 3)
        expect(res.body).toHaveProperty('color', 'SPACE GRAY')
        expect(res.body).toHaveProperty('partnumber', 11554466)
        
    })

    it('Should Put Device', async () => {
        const device = {   
            "id": 4,
            "name": "Iphone XR 5"
        }
        const res = await supertest(app).put('/api/devices').send(device)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('name', 'Iphone XR 5')

    })

    it('Should Delete Device', async () => {
        const device = {   
            "id": 4,
            "name": "Iphone XR 5"
        }
        const res = await supertest(app).delete('/api/devices/10')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message', 'Dispositivo Excluido')

    })
})