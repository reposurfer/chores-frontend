import { useState } from "react";
import AuthService from "../../../util/auth.service";
import { useNavigate } from "react-router-dom";
import { ErrorResponse } from "../../../types/return.types";

function RegisterForm() {
    //username, password, confirm password, firstname and lastname state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    //error states
    const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [confirmPasswordErrors, setConfirmPasswordErrors] = useState<string[]>([]);
    const [firstnameErrors, setFirstnameErrors] = useState<string[]>([]);
    const [lastnameErrors, setLastnameErrors] = useState<string[]>([]);
    const [otherErrors, setOtherErrors] = useState<string[]>([]);

    //hook used to navigate to other pages
    const navigate = useNavigate();
    
    const register = async () => {
        const roles: string[] = ['Master'];

        try {
            await AuthService.register(username, firstname, lastname, password, confirmPassword, roles);
            navigate("/");
        } catch (error) {
            const e = error as ErrorResponse;
            console.log(e);
            console.log(e.status);
            console.log(e.errors);
            if(e.status === 400) {
                setOtherErrors([]);
                setUsernameErrors(e.errors.Username);
                setPasswordErrors(e.errors.Password);
                setConfirmPasswordErrors(e.errors.ConfirmPassword);
                setFirstnameErrors(e.errors.FirstName);
                setLastnameErrors(e.errors.LastName);
            } else {
                setOtherErrors(e.errors.Errors);
                setUsernameErrors([]);
                setPasswordErrors([]);
                setConfirmPasswordErrors([]);
                setFirstnameErrors([]);
                setLastnameErrors([]);
            }
        } 
    }

    return (
        <div>
            <form>
                <label><h1 className="error">{otherErrors}</h1></label><br />
                <label htmlFor="username">Username</label><br />
                <input onChange={e => setUsername(e.target.value)} type="text" id="username" /><br />
                <label><h1 className="error">{usernameErrors}</h1></label><br />
                <label htmlFor="password">Password</label><br />
                <input onChange={e => setPassword(e.target.value)} type="password" id="password" /><br />
                <label><h1 className="error">{passwordErrors}</h1></label><br />
                <label htmlFor="confirm-password">Confirm Password</label><br />
                <input onChange={e => setConfirmPassword(e.target.value)} type="password" id="confirm-password" /><br />
                <label><h1 className="error">{confirmPasswordErrors}</h1></label><br />
                <label htmlFor="firstname">Firstname</label><br />
                <input onChange={e => setFirstname(e.target.value)} type="text" id="firstname" /><br />
                <label><h1 className="error">{firstnameErrors}</h1></label><br />
                <label htmlFor="lastname">Lastname</label><br />
                <input onChange={e => setLastname(e.target.value)} type="text" id="lastname" /><br />
                <label><h1 className="error">{lastnameErrors}</h1></label><br />
                <a onClick={register}>Register</a>
            </form>
        </div>
    )
}

export default RegisterForm;