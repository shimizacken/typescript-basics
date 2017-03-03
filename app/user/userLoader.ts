import User from './user';
import {UserType} from './userType';
import {IUser} from './iuser';

export class UserLoader {

    load(id: number) : IUser {
        
        // todo: add logic for loading user from db

        let user  = new User();
        user.userName = "jimiz";
        user.userType = UserType.silver;
        user.email = "jimiz@cx.com";

        return user;
    }
}