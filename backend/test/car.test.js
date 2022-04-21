const express = require('express');
const request = require('supertest');
const chai=require('chai')
const carRoute = require('../dist/routes/cars');
const app = express();
const expect = chai.expect

chai.use(require('chai-like'));
chai.use(require('chai-things')); // Don't swap these two

app.use(express.json());

app.use('/', carRoute);


describe('Integration tests for the cars API', () => {
    it('GET /api/cars/getByDateAsc - success -  get all the cars sorted by date async ', async () => {
        const { body, statusCode } = await request(app).get('/api/cars/getByDateAsc');
    
        expect(body.data).to.be.an('array').that.contains.something.like({"make": "Volvo"});

        expect(statusCode).to.equal(200);
    });
});