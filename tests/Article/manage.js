const request = require('supertest');
const app = require('../../src/app');

const data = require('./data');

let article;
describe('Manage articles', () => {
  it('Should list all articles', (done) => {
    request(app)
      .get(`${data.basePath}/`)
      .expect((res) => {
        const { body } = res;

        console.log(body, 'body');

        if (!body.data) throw Error('Not returned data');
        if (!body.pagination.total) throw Error('Not paginated');

        article = body.data.pop();
      })
      .expect(200, done);
  });

  it('Should paginate articles', (done) => {
    request(app)
      .get(`${data.basePath}?perPage=1`)
      .expect((res) => {
        const { body } = res;

        if (body.pagination.perPage != 1) throw Error('Not Paginated');
      })
      .expect(200, done);
  });

  it('Should get an article', (done) => {
    request(app)
      .get(`${data.basePath}/${article._id}`)
      .expect((res) => {
        const { body } = res;

        if (body._id != article._id) throw Error('Not same article');
      })
      .expect(200, done);
  });

  it('Should reject an article with invalid id', (done) => {
    request(app).get(`${data.basePath}/usinginvalid`).expect(404, done);
  });

  it('Should edit an article', (done) => {
    request(app)
      .put(`${data.basePath}/${article._id}`)
      .send({ title: 'Edited article' })
      .expect((res) => {
        const { body } = res;

        if (body.title != 'Edited article') throw Error('Not edited');
      })
      .expect(200, done);
  });

  it('Should delete an article', (done) => {
    request(app).delete(`${data.basePath}/${article._id}`).expect(200, done);
  });

  it('Should article be deleted', (done) => {
    request(app).get(`${data.basePath}/${article._id}`).expect(404, done);
  });
});
