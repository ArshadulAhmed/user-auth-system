import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import "../assets/mainLayout.css";

function MainLayout(props) {
  let history = useHistory();
  if (!props.isLoggedInUser) {
    console.log(history.location.pathname);
    if (history.location.pathname === "/registration") {
      history.push("/registration/");
    } else {
      history.push("/login/");
    }
  }

  return (
    <div className="mainLayout">
      <div className="site-layout">
        <Header />

        {props.children}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedInUser: state.userAuth.data && state.userAuth.data.accessToken,
  };
}
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
