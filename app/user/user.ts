import {UserType} from './userType';
import {IUser} from './iuser';

/**
 * User
 */
export default class User implements IUser {

    private _userName: string;
    private _userType: UserType;
    private _email: string;

    constructor(userName?: string, userType?: UserType) {
        
        this._userName = userName;
        this._userType = userType;
    }

    get userType() : UserType {

        return this._userType;
    }

    get userName() : string {
        
        return this._userName;
    }

    get email() {
        return this._email;
    }

    set userName(userName: string) {
        this._userName = userName;
    }

    set userType(userType: UserType) {
        this._userType = userType;
    }

    set email(email: string) {
        this._email = email;
    }
}