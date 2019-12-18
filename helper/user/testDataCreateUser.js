const createUser = require('./user.json');

function createUserBlankUsername() {
  const validData = createUser.validBody;
  const blankUsername = JSON.parse(JSON.stringify(validData));
  blankUsername.username = "";
  return blankUsername;
}

function createUserBlankRoleId() {
  const validData = createUser.validBody;
  const blankRoleId = JSON.parse(JSON.stringify(validData));
  blankRoleId.roleId = [];
  return blankRoleId;
}

function errorMessageInvalidData() {
  const message = `validator.validation failed`;
  return message;
}

function errorMessageDuplicateData() {
  const message = `Duplicate username`;
  return message;
}


module.exports = {
  createUserBlankUsername,
  createUserBlankRoleId,
  errorMessageInvalidData,
  errorMessageDuplicateData
};
