/* eslint no-unused-vars: off */

const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL_BILLFAZZ);

const Path = '/user';

function getUser(token) {
  return api.get(Path)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + token);
}
module.exports = {
  getUser,
};
