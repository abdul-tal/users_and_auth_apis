// const UsersAndAuthApis = require('users_and_auth_apis');
const { DefaultApi, User } = require('./src');

const api = new DefaultApi()
const body = new User(); // {User}
const user = {
    "name": "Abdul Rahman-client-2",
    "email": "email-client-2",
    "password": "password"

};
const requestBody = User.constructFromObject(user);

const callback = function(error, data, response) {
  if (error) {
    console.log('\n\n----errorrrrr------')
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ');
    console.log(data);
  }
};
api.registerPost(requestBody, callback);
