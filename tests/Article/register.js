const request = require('supertest');
const app = require('../../src/app');

const data = require('./data');

describe('Article Registration', () => {
  it('Should validate body', (done) => {
    request(app).post(`${data.basePath}/`).send({}).expect(400, done);
  });

  it('Should register an article', (done) => {
    request(app)
      .post(`${data.basePath}/`)
      .send(data.articles[0])
      .expect(201, done);
  });

  it('Should register second article', (done) => {
    request(app)
      .post(`${data.basePath}/`)
      .send(data.articles[1])
      .expect(201, done);
  });

  it('Should register third article', (done) => {
    request(app)
      .post(`${data.basePath}/`)
      .send(data.articles[2])
      .expect(201, done);
  });

  it('Should register forth article', (done) => {
    request(app)
      .post(`${data.basePath}/`)
      .send(data.articles[3])
      .expect(201, done);
  });
});
