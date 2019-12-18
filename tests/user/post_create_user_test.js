const { expect } = require('chai');
const api = require('../../page-objects/user/post_create_user.js');
const authHelper = require('../../helper/token.js');
const userCredential = require('../../helper/userCredential.json');
const cases = require('../../test-cases/user/post_create_user_testcases.js');
const testData = require('../../helper/user/user.json');
const getPreProcessData = require('../../helper/user/testDataCreateUser.js');

describe('@createUser POST create user', () => {
    let token;
    before(async () => {
        const response = await authHelper.getBillfazzToken.getToken(userCredential.admin);
        token = response.body.token;
    });

    it(`@happy ${cases.scenario.postOK.desc}`, async () => {
        const response = await api.postCreateUser(testData.validBody, token);
        expect(response.status).to.equal(cases.scenario.postOK.response);
    });

    it(`@neg ${cases.scenario.postInvalidData.descDuplicateData}`, async () => {
        const response = await api.postCreateUser(testData.validBody, token);
        expect(response.status).to.equal(cases.scenario.postInvalidData.response);
        expect(response.body.message).to.equal(getPreProcessData.errorMessageDuplicateData());
    });

    it(`@neg ${cases.scenario.postUnprocessData.descBlankUsername}`, async () => {
        const response = await api.postCreateUser(getPreProcessData.createUserBlankUsername(), token);
        expect(response.status).to.equal(cases.scenario.postUnprocessData.response);
        expect(response.body.message).to.equal(getPreProcessData.errorMessageInvalidData());
    });

    it(`@neg ${cases.scenario.postWithoutAuth.desc}`, async () => {
        const response = await api.postCreateUser(testData.validBody);
        expect(response.status).to.equal(cases.scenario.postWithoutAuth.response);
    });
    
    it(`@neg ${cases.scenario.postInvalidAuth.desc}`, async () => {
        const response = await api.postCreateUser(testData.validBody, userCredential.invalidToken);
        expect(response.status).to.equal(cases.scenario.postInvalidAuth.response);
    });
});
