import { ErrorResponse, SuccessfulLoginResponse } from '../types/return.types';

//this class contains methods for authenticating users
class AuthService {
    //given a username and password, this method will attempt to login the user
    //if successful, it will return a SuccessfulLoginResponse object
    //if unsuccessful, it will throw an ErrorResponse object
    static async login(username: string, password: string) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({ username: username, password: password }),
        };
        console.log(requestOptions);
        const response = await fetch(`${process.env.REACT_APP_API_URL}Account/login`, requestOptions)
            .catch((error: Error) => {
                const err: ErrorResponse = { status: 500, errors: { "Error": [error.message] } };
                console.log(err.errors.Error[0]);
                
                throw err;
            });
            console.log(response);
            
            //TODO: refactor error response codes that will be set in backend
        if (response.ok) {
            const successfulLoginResponse: SuccessfulLoginResponse = await response.json().catch((error: Error) => {
                const err: ErrorResponse = { status: 500, errors: { "Error": [error.message] } };
                throw err;
            });
            localStorage.setItem('token', successfulLoginResponse.token);
            return successfulLoginResponse;
        } else if (response.status === 400) {
            const badRequestResponse: ErrorResponse = await response.json().catch((error: Error) => {
                const err: ErrorResponse = { status: 500, errors: { "Error": [error.message] } };
                throw err;
            });
            throw badRequestResponse;
        } else if (response.status === 401) {
            const unauthorizedResponse: ErrorResponse = { status: response.status, errors: { "Error": ["Invalid username or password"] } };
            throw unauthorizedResponse;
        } else if (response.status === 500) {
            const internalServerErrorResponse: ErrorResponse = { status: response.status, errors: { "Error": ["Internal server error"] } };
            throw internalServerErrorResponse;
        } else {
            const unexpectedResponse: ErrorResponse = { status: response.status, errors: { "Error": ["Unexpected error"] } };
            throw unexpectedResponse;
        }
    }

    //this method will attempt to logout the user
    //it will remove the JWT token from local storage
    static async logout() {
        localStorage.removeItem('token');
    }

    //this method will attempt to register a user
    //if successful, it will return a SuccessfulLoginResponse object
    //if unsuccessful, it will throw an ErrorResponse object
    static async register(username: string, firstname: string, lastname: string, password: string, confirmPassword: string, roles: string[]) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, firstname: firstname, lastname: lastname, password: password, confirmPassword: confirmPassword, roles: roles })
        };

        const response = await fetch(`${process.env.REACT_APP_API_URL}Account/register`, requestOptions)
        .catch((error: Error) => {
            console.log('WTF');
            const err: ErrorResponse = { status: 500, errors: { "Errors": [error.message] } };
            throw err;
        });

        if (response.ok) {
            const loginResponse: SuccessfulLoginResponse = await this.login(username, password).catch((error: Error) => {
                console.log(error);
                const err: ErrorResponse = { status: 500, errors: { "Errors": [error.message] } };
                throw err;
            });
            return loginResponse;
        } else if (response.status === 400) {
            console.log('BAD REQUEST HOMIE');
            const json = await response.json().catch((error: Error) => {
                const err: ErrorResponse = { status: 500, errors: { "Errors": [error.message] } };
                throw err;
            });
            if(json.errors) {
                const badRequestResponse: ErrorResponse = json;
                console.log(badRequestResponse);
                throw badRequestResponse;
            } else {
                const badRequestResponse: ErrorResponse = { status: 500, errors: {"Errors": Object.values(json)} };
                throw badRequestResponse;
            }
        }
    }
}

export default AuthService;