import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../assets/mainLayout.css";

function MainLayout(props) {
  return (
    <div className="mainLayout">
      <div className="site-layout">{props.children}</div>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
