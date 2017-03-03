import User from './user';
import { UserType } from './userType';
import { IUser } from './iuser';
import { UsersRepository } from './userRepository';

export class UserLoader {

    load(id: number): Promise<IUser> {

        // todo: add logic for loading user from db

        let promise = new Promise<IUser>((resolve, reject) => {

            UsersRepository.forEach(user => {

                if (user.id == id) {

                    resolve(user);
                }
            });
        });

        return promise;
    }
}