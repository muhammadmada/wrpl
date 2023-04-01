import loginStyles from '../styles/Login.module.css';
const Login = () => {
    return (
        <div>
            <div className={loginStyles.box}>
                <h1>Log In</h1>
                <div>
                </div>
                <form className={loginStyles.form}>
                    <div>
                        <div>
                         <label htmlFor="email">Email</label>
                        </div>
                        <div>
                            <input type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div>
                            <input type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div>
                    <label htmlFor="remember">Remember Me</label>
                    <input type="checkbox" name="remember" id="remember" />
                    </div>
                    <button className={loginStyles.button} type="submit">
                        <a href="/dashboard">Log In</a>
                    </button>
                </form>
            </div> 
        </div>
    )
}

export default Login;