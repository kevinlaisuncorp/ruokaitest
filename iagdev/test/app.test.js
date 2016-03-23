var request = require('supertest');
var app = require('../app');

request(app)
  .get('/api/helloworld')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '24')
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
  });
