import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [isChecked, setIsChecked] = useState(false);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkBoxError, setCheckBoxError] = useState("");
  const navigate = useNavigate()

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    // name validation
    {
      name.length < 4
        ? setNameError("Name should be contain 4 characters")
        : setNameError("");
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (password.length < minLength) {
      return setPasswordError("Password must be at least 8 characters long.");
    } else if (!hasUpperCase) {
      return setPasswordError(
        "Password must contain at least one uppercase letter."
      );
    } else if (!hasLowerCase) {
      return setPasswordError(
        "Password must contain at least one lowercase letter."
      );
    } else if (!hasNumber) {
      return setPasswordError("Password must contain at least one number.");
    } else {
      setPasswordError("");
    }

    if (!isChecked) {
      return setCheckBoxError("You must agree to the terms and conditions.");
    } else {
      setCheckBoxError("");
    }

    // create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/")
          })
          .catch((error) => {
            setUser(user);
            console.log(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center mt-16">
      <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl">
        <div className="card-body items-center p-16">
          <div className="w-full">
            <h2 className="text-4xl font-semibold text-center">
              Register your account
            </h2>
            <div className="divider mt-8"></div>
            <form onSubmit={handleRegistration} className="mx-8">
              <fieldset className="fieldset">
                {/* name */}
                <label className="label text-xl font-semibold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full py-5 bg-base-300"
                  placeholder="Enter your name"
                  required
                />
                {nameError ? (
                  <p className="text-sm text-red-500">{nameError}</p>
                ) : (
                  ""
                )}
                {/* photo url */}
                <label className="label text-xl font-semibold mt-4">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input w-full py-5 bg-base-300"
                  placeholder="Enter your Photo URL"
                  required
                />
                {/* email */}
                <label className="label text-xl font-semibold mt-4">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
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
                {passwordError ? (
                  <p className="text-sm text-red-500">{passwordError}</p>
                ) : (
                  ""
                )}
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="checkbox"
                  />
                  <span>Accept Term & Conditions</span>
                </div>
                {checkBoxError ? (
                  <p className="text-sm text-red-500">{checkBoxError}</p>
                ) : (
                  ""
                )}
                <button type="submit" className="btn btn-primary mt-4">
                  Register
                </button>
              </fieldset>
              <p className="font-semibold text-center mt-5">
                Already Have An Account ?{" "}
                <Link
                  to="/auth/login"
                  className="text-red-500
                "
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
