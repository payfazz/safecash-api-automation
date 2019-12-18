const global = require('../../helper/global.js');

const scenario = ({
  getOK: {
    desc: 'GET delete user OK',
    response: global.response.noContent,
  },
  getWithoutAuth: {
    desc: 'GET delete user without auth',
    response: global.response.unauthorized,
  },
  getInvalidAuth: {
    desc: 'GET delete user using other user Auth',
    response: global.response.invalidAuth,
  },
});

module.exports = {
  scenario,
};
