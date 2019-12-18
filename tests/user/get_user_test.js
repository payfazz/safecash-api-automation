const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const api = require('../../page-objects/user/get_user.js');
const authHelper = require('../../helper/token.js');
const userCredential = require('../../helper/userCredential.json');
const cases = require('../../test-cases/user/get_user_testcases.js');
const jsonData = require('../../helper/schema/user/list_user_schema.json');

describe('@userTest GET Request User List', () => {
  let token;
  before(async () => {
    const response = await authHelper.getBillfazzToken.getToken(userCredential.admin);
    token = response.body.token;
  });

  it(`@happy ${cases.scenario.getOK.desc}`, async () => {
    const response = await api.getUser(token);
    expect(response.status).to.equal(cases.scenario.getOK.response);
    expect(response.body).to.be.jsonSchema(jsonData.getResponseValidSchema);
  });

  it(`@neg ${cases.scenario.getWithoutAuth.desc}`, async () => {
    const response = await api.getUser();
    expect(response.status).to.equal(cases.scenario.getWithoutAuth.response);
  });

  it(`@neg ${cases.scenario.getInvalidAuth.desc}`, async () => {
    const response = await api.getUser(userCredential.invalidToken);
    expect(response.status).to.equal(cases.scenario.getWithoutAuth.response);
  });
});
