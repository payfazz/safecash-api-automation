const global = require('../../helper/global.js');

const scenario = ({
  postOK: {
    desc: 'PATCH update user role OK',
    response: global.response.ok,
  },
  postWithoutAuth: {
    desc: 'PATCH update user role without auth',
    response: global.response.unauthorized,
  },
  postInvalidAuth: {
    desc: 'PATCH update user role using other user Auth',
    response: global.response.unauthorized,
  },
});

module.exports = {
  scenario,
};