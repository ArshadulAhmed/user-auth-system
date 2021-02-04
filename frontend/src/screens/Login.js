import React from "react";
import { connect } from "react-redux";
import { authLogin } from "../redux/actions/authentication";
import { Button } from "../components/CommonComponents";
import { Link } from "react-router-dom";
import { DefaultLoading } from "../components/DefaultLoading";

function Login(props) {
  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    props.authLogin(data.get("username"), data.get("password"));
  };
  return (
    <React.Fragment>
      <div className="signUp">
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Enter Username" name="username" />
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
  authLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
