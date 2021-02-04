import React, { useState } from "react";
import { connect } from "react-redux";
import { authSignup } from "../redux/actions/authentication";
import { Button } from "../components/CommonComponents";
import { Link } from "react-router-dom";
import { DefaultLoading } from "../components/DefaultLoading";

function SignUp(props) {
  const handleRegistration = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    props.authSignup(
      data.get("username"),
      data.get("email"),
      data.get("password")
    );
  };
  return (
    <React.Fragment>
      <div className="signUp">
        <form onSubmit={handleRegistration}>
          <input type="text" placeholder="Enter Username" name="username" />
          <input type="text" placeholder="Enter Email" name="email" />
          <input type="text" placeholder="Enter Password" name="password" />
          <Button label="Submit" />
        </form>
      </div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  authSignup,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
