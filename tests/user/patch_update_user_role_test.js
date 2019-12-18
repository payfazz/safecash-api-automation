const { expect } = require('chai');
const api = require('../../page-objects/user/patch_update_user_role.js');
const authHelper = require('../../helper/token.js');
const userCredential = require('../../helper/userCredential.json');
const cases = require('../../test-cases/user/patch_update_user_role_testcase.js');
const testData = require('../../helper/user/user.json');

describe('@userRole PATCH update user role', () => {
    let token;
    before(async () => {
        const response = await authHelper.getBillfazzToken.getToken(userCredential.admin);
        token = response.body.token;
    });

    it(`@happy ${cases.scenario.postOK.desc}`, async () => {
        const response = await api.patchUpdateUserRole(testData.userId.changeRoleId, testData.updateUserRole, token);
        expect(response.status).to.equal(cases.scenario.postOK.response);
    });

    it(`@neg ${cases.scenario.postWithoutAuth.desc}`, async () => {
        const response = await api.patchUpdateUserRole(testData.userId.changeRoleId, testData.updateUserRole);
        expect(response.status).to.equal(cases.scenario.postWithoutAuth.response);
    });
    
    it(`@neg ${cases.scenario.postInvalidAuth.desc}`, async () => {
        const response = await api.patchUpdateUserRole(testData.userId.valid, testData.updateUserRole, userCredential.invalidToken);
        expect(response.status).to.equal(cases.scenario.postInvalidAuth.response);
    });
});
