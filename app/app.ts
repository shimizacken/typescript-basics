import {UserLoader} from './user/userLoader';

new UserLoader().load(1).then((user) => {

    console.log("user name: ", user.userName);
    console.log("user type: ", user.userType);

});