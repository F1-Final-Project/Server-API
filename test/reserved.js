process.env.NODE_ENV = 'test';const Reserved = require('db-worker/lib/models/reserved');const config = require('config');const chai = require('chai');const chaiHttp = require('chai-http');const server = require('../index');const should = chai.should();chai.use(chaiHttp);describe('Reserved', () => {    beforeEach((done) => {        Reserved.deleteMany({}, (err) => {            done();        });    });    describe('/GET reserved', () => {        it('it should not GET without auth token', (done) => {            chai.request(server)                .get('/reserved')                .end((err, res) => {                    res.should.have.status(401);                    done();                });        });        it('it should GET all the reserved', (done) => {            chai.request(server)                .get('/reserved')                .set('x-access-token', config.TOKEN)                .end((err, res) => {                    res.should.have.status(200);                    res.body.should.be.a('array');                    res.body.length.should.be.eql(0);                    done();                });        });    });    describe('/POST reserved', () => {        it('it should POST a reserved', (done) => {            const data = {                date: new Date(),                table: 10,                client: "test",                phone: "test"            };            chai.request(server)                .post('/reserved')                .send(data)                .end((err, res) => {                    res.should.have.status(201);                    res.body.should.have.property('message').eql('Successfully created!');                    done();                });        });    });    describe('/GET/:id reserved', () => {        it('it should GET a reserved by the given id', (done) => {            let data = new Reserved({                date: new Date(),                table: 10,                client: "test",                phone: "test"            });            data.save((err, reserved) => {                chai.request(server)                    .get('/reserved/' + reserved.id)                    .set('x-access-token', config.ADMIN_TOKEN)                    .send(reserved)                    .end((err, res) => {                        res.should.have.status(200);                        res.body.should.be.a('object');                        res.body.should.have.property('date');                        res.body.should.have.property('table');                        res.body.should.have.property('client');                        res.body.should.have.property('phone');                        res.body.should.have.property('_id').eql(reserved.id);                        done();                    });            });        });    });    describe('/PUT/:id reserved', () => {        it('it should UPDATE a reserved given the id', (done) => {            let data = new Reserved({                date: new Date(),                table: 10,                client: "test",                phone: "test"            });            data.save((err, reserved) => {                chai.request(server)                    .put('/reserved/' + reserved.id)                    .set('x-access-token', config.ADMIN_TOKEN)                    .send({                        date: new Date(),                        table: 1000,                        client: "test",                        phone: "test"                    })                    .end((err, res) => {                        res.should.have.status(200);                        res.body.should.have.property('message').eql('Successfully updated!');                        done();                    });            });        });    });    describe('/DELETE/:id reserved', () => {        it('it should DELETE a reserved given the id', (done) => {            let data = new Reserved({                date: new Date(),                table: 10,                client: "test",                phone: "test"            });            data.save((err, reserved) => {                chai.request(server)                    .delete('/reserved/' + reserved.id)                    .set('x-access-token', config.ADMIN_TOKEN)                    .end((err, res) => {                        res.should.have.status(200);                        res.body.should.have.property('message').eql('Successfully deleted!');                        done();                    });            });        });    });});