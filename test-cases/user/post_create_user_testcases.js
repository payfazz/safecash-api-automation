const global = require('../../helper/global.js');

const scenario = ({
  postOK: {
    desc: 'POST create user OK',
    response: global.response.created,
  },
  postUnprocessData: {
    descBlankUsername: 'POST create user with blank username',
    response: global.response.unprocessable,
  },
  postInvalidData: {
    descBlankRoleId: 'POST create user with blank role id',
    descDuplicateData: 'POST create user with duplicate username',
    response: global.response.conflict,
  },
  postWithoutAuth: {
    desc: 'POST create user without auth',
    response: global.response.unauthorized,
  },
  postInvalidAuth: {
    desc: 'POST create user using other user Auth',
    response: global.response.unauthorized,
  },
});

module.exports = {
  scenario,
};