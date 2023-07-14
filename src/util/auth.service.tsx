class AuthService {
    static async login(username: string, password: string) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password })
        };
        const reponse = await fetch(`${process.env.REACT_APP_API_URL}Account/login`, requestOptions);
        const data = await reponse.json();
        return data;
    }
}

export default AuthService;