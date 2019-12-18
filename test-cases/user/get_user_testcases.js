const global = require('../../helper/global.js');

const scenario = ({
  getOK: {
    desc: 'GET list user OK',
    response: global.response.ok,
  },
  getWithoutAuth: {
    desc: 'GET list user without auth',
    response: global.response.unauthorized,
  },
  getInvalidAuth: {
    desc: 'GET list user using other user Auth',
    response: global.response.invalidAuth,
  },
});

module.exports = {
  scenario,
};
