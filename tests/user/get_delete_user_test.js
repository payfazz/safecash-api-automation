const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const api = require('../../page-objects/user/get_delete_user.js');
const authHelper = require('../../helper/token.js');
const userCredential = require('../../helper/userCredential.json');
const testData = require('../../helper/user/user.json');
const cases = require('../../test-cases/user/get_delete_user_testcases.js');

describe('@deleteUser GET Request Delete User', () => {
  let token;
  before(async () => {
    const response = await authHelper.getBillfazzToken.getToken(userCredential.adminExternal);
    token = response.body.token;
  });

  it(`@happy ${cases.scenario.getOK.desc}`, async () => {
    const response = await api.getDelUser(testData.deleteUser.validId, token);
    expect(response.status).to.equal(cases.scenario.getOK.response);
  });

  it(`@neg ${cases.scenario.getWithoutAuth.desc}`, async () => {
    const response = await api.getDelUser(testData.deleteUser.validId);
    expect(response.status).to.equal(cases.scenario.getWithoutAuth.response);
  });

  it(`@neg ${cases.scenario.getInvalidAuth.desc}`, async () => {
    const response = await api.getDelUser(testData.deleteUser.validId, userCredential.invalidToken);
    expect(response.status).to.equal(cases.scenario.getWithoutAuth.response);
  });
});
