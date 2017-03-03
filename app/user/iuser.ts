import {IPerson} from '../core/iperson';
import {UserType} from './userType';

export interface IUser extends IPerson {

    userType: UserType;
    email: string
}