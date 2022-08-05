import React, { useState } from "react";
import "./ResetPassword.css";

function ResetPassword() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please re-type password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };

  return (
    <div className="reset-form container">
      <h2 className="reset-form-header mb-4">Reset Password</h2>
      <div className="form-body">
        <form>
          <label className="mb-0">
            {" "}
            <span>
              <strong> Username</strong>
            </span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={input.username}
            onChange={onInputChange}
            onBlur={validateInput}
          ></input>
          {error.password && (
            <div>
              {" "}
              <span className="error"> {error.username}</span>
            </div>
          )}

          <label className="mt-2 mb-0">
            {" "}
            <strong> Password</strong>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
          ></input>
          {error.password && (
            <div>
              {" "}
              <span className="error"> {error.password}</span>
            </div>
          )}

          <label className="mt-2 mb-0">
            {" "}
            <strong> Confirm Password</strong>
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-type Password"
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
          ></input>
          {error.confirmPassword && (
            <div>
              <span className="error"> {error.confirmPassword}</span>{" "}
            </div>
          )}

          <div className=" mt-5 d-flex reset-btn ">
            <button type="submit"> Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
