import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../util/auth.service";
import { useState } from "react";
import { ErrorResponse } from "../../../types/return.types";
import "./login-form.css";

function LoginForm() {
    //username and password state
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    //error states
    const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [otherError, setOtherError] = useState<string[]>([]);

    //hook used to navigate to other pages
    const navigate = useNavigate();

    const login = async () => {
        try {
            await AuthService.login(username, password);  
            navigate("/");
        } catch (error) {
            const e = error as ErrorResponse;
            if(e.status === 400) {
                setOtherError([]);
                setUsernameErrors(e.errors.Username);
                setPasswordErrors(e.errors.Password);
            } else {
                setUsernameErrors([]);
                setPasswordErrors([]);
                setOtherError(e.errors.Error);
            }
        }
    }

    return (
        <div>
            <form>
                <label><h1 className="error">{otherError}</h1></label><br />
                <label htmlFor="username">Username</label><br />
                <input value={username} onChange={e => setUsername(e.target.value)} type="text" id="username" /><br />
                <label><h1 className="error">{usernameErrors}</h1></label><br />
                <label htmlFor="password">Password</label><br />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" /><br />
                <label><h1 className="error">{passwordErrors}</h1></label><br />
                <button data-cy="login-button" onClick={login}>Login</button>
            </form>
            <br />
            <Link to="/register">Register</Link>
        </div>
    );
}

export default LoginForm;