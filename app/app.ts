import User from './user/user';
import {UserType} from './user/userType';

var user1 = new User("shimiz", UserType.bronze);

console.log(user1.userName);
console.log(user1.userType);
