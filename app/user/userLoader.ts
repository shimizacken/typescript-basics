import User from './user';
import { UserType } from './userType';
import { IUser } from './iuser';

export class UserLoader {

    load(id: number): Promise<IUser> {

        // todo: add logic for loading user from db

        let promise = new Promise<IUser>((resolve, reject) => {

            let user = new User();
            user.userName = "jimiz";
            user.userType = UserType.silver;
            user.email = "jimiz@cx.com";

            resolve(user);
        });

        return promise;
    }
}