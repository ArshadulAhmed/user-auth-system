import React from "react";
import { connect } from "react-redux";
import { logOutUser } from "../redux/actions/authentication";
import { Link } from "react-router-dom";

function Header(props) {
  const handleLogOutUser = () => {
    if (props.isLoggedInUser) {
      props.logOutUser();
    }
  };
  if (!props.isLoggedInUser) {
    return null;
  }
  return (
    <div className="header">
      <p>
        <Link to="/">Home</Link>
      </p>

      <p onClick={handleLogOutUser}>Logout</p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedInUser: state.userAuth.data && state.userAuth.data.accessToken,
  };
}

const mapDispatchToProps = {
  logOutUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
