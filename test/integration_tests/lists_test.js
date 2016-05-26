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

  // afterEach(function(done) {
  //     knex.migrate.rollback().then(function() {
  //       knex.migrate.latest()
  //         .then(function() {
  //           return knex.seed.run().then(function() {
  //             done()
  //           })
  //         })
  //     })
  // });

  describe('/GET lists', function() {

    it('should return all lists', function(done) {
      chai.request(server)
      .get('/lists')
      .end(function(err, res) {
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.should.have.property('lists');
        res.body.should.have.property('items');
        res.body.status.should.equal('success');
        res.body.lists.length.should.equal(4);
        res.body.lists[0].name.should.equal('Current List');
        // res.body.data[0].description.should.equal('Say the Shema and before and after brochos twice daily at the propper time');
        // res.body.data[0].interval.should.equal(2);
        // res.body.data[0].period.should.equal('daily');
        // res.body.data[0].parent_habit_id.should.equal(0);
        // res.body.data[0].category_id.should.equal(1);
        // res.body.data[0].public.should.equal(true);
        // res.body.data[0].cost.should.equal('1.00');
      done()
      })
    })
  })

  // describe('/GET single habit', function() {

  //   it('should return a single habit', function(done) {
  //     // Students.findOne(function (err, student) {
  //       chai.request(server)  
  //       .get('/habits/1')
  //       .end(function(err, res) {
  //         res.status.should.equal(200);
  //         res.type.should.equal('application/json');
  //         res.body.should.be.a('object');
  //         res.body.should.have.property('data')
  //         res.body.status.should.equal('success')
  //         res.body.data.length.should.equal(1);
  //         res.body.data[0].habit.should.equal('Shema');
  //         res.body.data[0].description.should.equal('Say the Shema and before and after brochos twice daily at the propper time');
  //         res.body.data[0].interval.should.equal(2);
  //         res.body.data[0].period.should.equal('daily');
  //         res.body.data[0].parent_habit_id.should.equal(0);
  //         res.body.data[0].category_id.should.equal(1);
  //         res.body.data[0].public.should.equal(true);
  //         res.body.data[0].cost.should.equal('1.00');
  //       done()
  //       });
  //     // })
  //   });
  // });

  // describe('/POST habits', function() {

  //   it('should add a new habit', function(done) {
  //     chai.request(server)
  //     .post('/habits')
  //     .send({
  //       habit: 'Check Email',
  //       description: 'Check and respond to email twice a day',
  //       interval: 2,
  //       period: 'daily',
  //       parent_habit_id: 0,
  //       category_id: 3,
  //       public: true,
  //       cost: 1.25
  //     })
  //     .end(function(err, res) {
  //       chai.request(server)
  //       .get('/habits')
  //       .end(function(err, res) {
  //         res.status.should.equal(200);
  //         res.type.should.equal('application/json');
  //         res.body.should.be.a('object');
  //         res.body.should.have.property('data')
  //         res.body.status.should.equal('success')
  //         res.body.data.length.should.equal(4);
  //         res.body.data[3].habit.should.equal('Check Email');
  //         res.body.data[3].description.should.equal('Check and respond to email twice a day');
  //         res.body.data[3].interval.should.equal(2);
  //         res.body.data[3].period.should.equal('daily');
  //         res.body.data[3].parent_habit_id.should.equal(0);
  //         res.body.data[3].category_id.should.equal(3);
  //         res.body.data[3].public.should.equal(true);
  //         res.body.data[3].cost.should.equal('1.25');
  //         parseFloat(res.body.data[3].cost).should.equal(parseFloat('1.25'));
  //         done()
  //       })
  //     })
  //   })
  // })

});