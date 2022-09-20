export class User {
    private _username: string;
    private _password: string;

    constructor(username: string, password: string) {
        this._username = username;
        this._password = password;
    }

    public get username(): string {
        return this._username;
    }

    public set username(value: string) {
        this._username = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }
}

export const STANDARD_USER = new User('standard_user', 'secret_sauce');
export const LOCKED_OUT_USER = new User('locked_out_user', 'secret_sauce');
export const PROBLEM_USER = new User('problem_user', 'secret_sauce');
export const PERFORMANCE_GLITCH_USER = new User('performance_glitch_user', 'secret_sauce');
