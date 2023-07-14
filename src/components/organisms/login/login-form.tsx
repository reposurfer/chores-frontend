function LoginForm() {
    //TODO: Add form logic and break imput down into molecules
    return (
        <div>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;