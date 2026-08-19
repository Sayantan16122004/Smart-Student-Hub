import "../../styles/Login.css";

function Login() {
    return (
        <div className="login-page">
            <div className="login-container">

                <h4 className="college-name">
                    Hooghly Engineering & Technology College
                </h4>

                <h1>User Login</h1>

                <form>

                    <label className="font-size">
                        <b>User Role</b>
                    </label>

                    <div className="role-options">
                        <input
                            type="radio"
                            name="role"
                            value="Student"
                        />
                        <label>Student</label>

                        <input
                            type="radio"
                            name="role"
                            value="Faculty"
                        />
                        <label>Faculty</label>

                        <input
                            type="radio"
                            name="role"
                            value="Admin"
                        />
                        <label>Admin</label>
                    </div>

                    <label className="font-size">
                        <b>User ID:</b>
                    </label>

                    <input
                        type="text"
                        name="username"
                        placeholder="Enter user name"
                        className="input-box"
                        required
                    />

                    <label className="font-size">
                        <b>Password:</b>
                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="input-box"
                        required
                    />

                    <div className="buttons">
                        <input type="submit" value="Login" />
                        <p>Forgot Password?</p>
                    </div>

                </form>

            </div>
            
        </div>
    );
}

export default Login;