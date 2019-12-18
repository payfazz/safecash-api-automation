/* eslint no-unused-vars: off */

const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL_BILLFAZZ);

const Path = '/user';

function patchUpdateUserRole(userId, body, token) {
  return api.patch(`${Path}/${userId}`)
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + token)
    .send(body);
}

module.exports = {
  patchUpdateUserRole,
};
