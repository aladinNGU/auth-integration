import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  // console.log("from signup", userInfo);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    // Hero with form
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-4 mt-20">
      <h1 className="text-2xl font-bold text-center mt-4">
        Please Sign Up Now!
      </h1>
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <div className="relative">
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link className="text-blue-400" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
