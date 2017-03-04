import User from './user';
import { UserType } from './userType';
import { IUser } from './iuser';
import { UsersRepository } from './userRepository';
import {ILoader} from '../core/iloader'

export class UserLoader implements ILoader<IUser> {

    load<IUser>(id: number): Promise<User> {

        // todo: add logic for loading user from db

        let promise = new Promise<User>((resolve, reject) => {

            UsersRepository.forEach(user => {

                if (user.id == id) {

                    resolve(user);
                }
            });
        });

        return promise;
    }
}