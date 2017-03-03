import {UserLoader} from './user/userLoader';

let user = new UserLoader().load(1);

console.log("user name: ", user.userName);
console.log("user type: ", user.userType);
