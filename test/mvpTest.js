'use strict';

const chai                = require('chai');
const chaiHttp            = require('chai-http');
const { app } = require('../app');
const expect = chai.expect;
chai.use(chaiHttp);

describe('app.js', function() {

// note the use of nested `describe` blocks.
// this allows us to make clearer, more discrete tests that focus
// on proving something small

  it('check status code', function() {

        expect(res).to.have.status(200);
        // otherwise our db seeding didn't work

    });
  })
