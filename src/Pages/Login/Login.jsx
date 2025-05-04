import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, setUser, passwordReset } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    // login user
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.code;
        setError(errorMessage);
      });
  };

  // password reset
  const handlePasswordReset = () => {
    const email = emailRef.current.value;
    setError("");
    passwordReset(email)
      .then(() => {
        alert("Send a password reset email, check your email");
      })
      .catch((error) => {
        const errorMessage = error.code;
        setError(errorMessage);
      });
  };
  return (
    <div className="flex justify-center mt-16">
      <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl">
        <div className="card-body items-center p-16">
          <div className="w-full">
            <h2 className="text-4xl font-semibold text-center">
              Login your account
            </h2>
            <div className="divider mt-8"></div>
            <form onSubmit={handleLogin} className="mx-8">
              <fieldset className="fieldset">
                {/* email */}
                <label className="label text-xl font-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="input w-full py-5 bg-base-300"
                  placeholder="Email"
                  required
                />
                {/* password */}
                <label className="label text-xl font-semibold mt-4">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="input w-full py-5 bg-base-300"
                  placeholder="Password"
                  required
                />

                <div>
                  <a onClick={handlePasswordReset} className="link link-hover">
                    Forgot password?
                  </a>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="btn btn-primary mt-4">
                  Login
                </button>
              </fieldset>
              <p className="font-semibold text-center mt-5">
                Don’t Have An Account ?{" "}
                <Link
                  to="/auth/register"
                  className="text-red-500
              "
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
