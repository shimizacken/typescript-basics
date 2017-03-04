import { UserLoader } from './user/userLoader';

let user1 = new UserLoader().load(1);
let user2 = new UserLoader().load(2);
let user3 = new UserLoader().load(3);

Promise.all([user1, user2, user3]).then((values) => {

    values.forEach(user => {
        console.log("user name: ", user.userName);
    });
});