import {IUser} from './iuser';
import User from './user';
import { UserType } from './userType';

let UsersRepository: User[] = [];

let user = new User();
user.id = 1;
user.userName = "jimiz";
user.userType = UserType.silver;
user.email = "jimiz@cx.com";
UsersRepository.push(user);

user = new User();
user.id = 2;
user.userName = "ela";
user.userType = UserType.diamond;
user.email = "eka@cx.com";
UsersRepository.push(user);

user = new User();
user.id = 3;
user.userName = "john";
user.userType = UserType.bronze;
user.email = "jhon@cx.com";
UsersRepository.push(user);

export {UsersRepository};