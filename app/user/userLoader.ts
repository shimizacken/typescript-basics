import User from './user';
import {UserType} from './userType';

export class UserLoader {

    load(id: number) : User {
        
        // todo: add logic for loading user from db

        let user  = new User();
        user.userName = "jimiz";
        user.userType = UserType.silver;
        user.userEmail = "jimiz@cx.com";

        return user;
    }
}