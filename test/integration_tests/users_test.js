process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var knex = require('../../src/server/db/knex');
var should = chai.should();

chai.use(chaiHttp);


describe('habitList routes', function() {

  // describe('API routes', function() {

  beforeEach(function(done) {
      knex.migrate.rollback().then(function() {
        knex.migrate.latest()
          .then(function() {
            return knex.seed.run().then(function() {
              done()
            })
          })
          // done()
      })
  });

    // describe('/POST habits', function() {

    it('should update a user', function(done) {
      chai.request(server)
      .post('/users/edit/3')
      .send({
        id: 3,
        fname: 'test',
        lname: 'testing',
        email: 'test@test.com',
        schedule_type: 'd',
        schedule: [2,5]
      })
      .end(function(err, res) {
        chai.request(server)
        .get('/users')
        .end(function(err, res) {
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.be.a('object');
          res.body.should.have.property('users')
          res.body.status.should.equal('success')
          res.body.users.length.should.equal(3);
          res.body.users[2].fname.should.equal('test');
          res.body.users[2].lname.should.equal('testing');
          res.body.users[2].email.should.equal('test@test.com');
          res.body.users[2].schedule_type.should.equal('d');
          res.body.users[2].schedule.should.equal('[2,5]');
  //         res.body.data[3].category_id.should.equal(3);
  //         res.body.data[3].public.should.equal(true);
  //         res.body.data[3].cost.should.equal('1.25');
  //         parseFloat(res.body.data[3].cost).should.equal(parseFloat('1.25'));
          done()
        });
      });
    });
  });