import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DefaultLoading } from "../components/DefaultLoading";
import "../assets/mainLayout.css";

function HomePage(props) {
  return (
    <React.Fragment>
      <div className="main">
        <div className="topBar">
          <p>Landing Page</p>
        </div>
      </div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
