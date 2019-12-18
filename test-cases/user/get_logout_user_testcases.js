const global = require('../../helper/global.js');

const scenario = ({
  getOK: {
    desc: 'GET logout user OK',
    response: global.response.noContent,
  },
  getWithoutAuth: {
    desc: 'GET logout user without auth',
    response: global.response.unauthorized,
  },
  getInvalidAuth: {
    desc: 'GET logout user using other user Auth',
    response: global.response.invalidAuth,
  },
});

module.exports = {
  scenario,
};
