var expect = require('chai').use(require('sinon-chai')).expect;
var express = require('express');
var supertest = require('supertest');
import competences from './api_competences';

describe('Lecture json compétences', function () {

  var api;
  
  before(function () {
    var app = express();
    app.listen('3333');

    api = require('../api')(app);
  });

  it("doit retourner un code 200", function (done) {
      supertest(api)
       .get('/api/competences/techniques')
       .expect(200, done);

  });



});