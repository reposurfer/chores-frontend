import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../util/auth.service";
import { useEffect, useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const navigate = useNavigate();

    const login = async () => {
        const response = await AuthService.login(username, password);
        if (response.errors) {
            setUsernameErrors(response.errors.Username);
            setPasswordErrors(response.errors.Password);
        } else {
            localStorage.setItem('token', response.token);
            //redirect to overview page
            navigate("/");
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="username">Username</label><br />
                <input value={username} onChange={e => setUsername(e.target.value)} type="text" id="username" /><br />
                <label>{usernameErrors}</label><br />
                <label htmlFor="password">Password</label><br />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" /><br />
                <label>{passwordErrors}</label><br />
                <a onClick={login}>Login</a>
            </form>
        </div>
    );
}

export default LoginForm;