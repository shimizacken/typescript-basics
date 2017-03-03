import {UserType} from './UserType';

/**
 * User
 */
export default class User {

    private _userName: string;
    private _userType: UserType;
    private _email: string;

    constructor(userName: string, userType: UserType) {
        
        this._userName = userName;
        this._userType = userType;
    }

    get userType() : UserType {

        return this._userType;
    }

    get userName() : string {
        
        return this._userName;
    }

    set userName(userName: string) {
        this._userName = userName;
    }

    set userType(userType: UserType) {
        this._userType = userType;
    }
}