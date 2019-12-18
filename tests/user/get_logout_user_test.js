const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const api = require('../../page-objects/user/get_logout_user.js');
const authHelper = require('../../helper/token.js');
const userCredential = require('../../helper/userCredential.json');
const cases = require('../../test-cases/user/get_logout_user_testcases.js');

describe('@logoutUser GET Request Logout User', () => {
  let token;
  before(async () => {
    const response = await authHelper.getBillfazzToken.getToken(userCredential.admin);
    token = response.body.token;
  });

  it(`@happy ${cases.scenario.getOK.desc}`, async () => {
    const response = await api.getUserLogOut(token);
    expect(response.status).to.equal(cases.scenario.getOK.response);
  });

  it(`@neg ${cases.scenario.getWithoutAuth.desc}`, async () => {
    const response = await api.getUserLogOut();
    expect(response.status).to.equal(cases.scenario.getWithoutAuth.response);
  });

  it(`@neg ${cases.scenario.getInvalidAuth.desc}`, async () => {
    const response = await api.getUserLogOut(userCredential.invalidToken);
    expect(response.status).to.equal(cases.scenario.getWithoutAuth.response);
  });
});
