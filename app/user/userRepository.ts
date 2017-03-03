import {IUser} from './iuser';
import User from './user';
import { UserType } from './userType';

let user1 = new User();
user1.id = 1;
user1.userName = "jimiz";
user1.userType = UserType.silver;
user1.email = "jimiz@cx.com";

let user2 = new User();
user2.id = 2;
user2.userName = "ela";
user2.userType = UserType.diamond;
user2.email = "eka@cx.com";

let user3 = new User();
user3.id = 3;
user3.userName = "john";
user3.userType = UserType.bronze;
user3.email = "jhon@cx.com";

export let UsersRepository: IUser[] = [user1, user2, user3];