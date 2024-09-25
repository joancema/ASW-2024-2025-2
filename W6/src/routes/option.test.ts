import request from 'supertest';
import express from 'express';
import {optionRouter} from '.'

// test router options using supertest
describe('option router', () => {
    const app = express()
    app.use('/option', optionRouter)
    it('should return all options', async () => {
        const res = await request(app).get('/option')
        expect(res.status).toBe(200)
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'Option 1'
            },
            {
                id: 2,
                name: 'Option 2'
            }
        ])
    })
    it('should return option with id 1', async () => {
        const res = await request(app).get('/option/1')
        expect(res.status).toBe(200)
        expect(res.body).toEqual({
            id: 1,
            name: 'Option 1'
        })
    })
    it('should return 404 for option with id 3', async () => {
        const res = await request(app).get('/option/3')
        expect(res.status).toBe(404)
        expect(res.text).toBe('Option not found')
    })
})
