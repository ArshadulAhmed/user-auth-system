import React, { useState } from "react";
import { connect } from "react-redux";
import { loadItems } from "../redux/actions/loadItems";
import { DefaultLoading } from "../components/DefaultLoading";

const table_heading = [
  {
    title: "Product ID",
    key: 1,
  },
  {
    title: "Title",
    key: 2,
  },

  {
    title: "Image",
    key: 3,
  },
];

function Dashboard(props) {
  React.useEffect(() => {
    props.loadItems();
  }, []);

  return (
    <React.Fragment>
      <div className="main">
        <div className="topBar">
          <p className="pageTitle Dashboard">Dashboard</p>
          <p className="guest">Welcome, {props.userName && props.userName}</p>

          <div justify="center" className="main_">
            <div className="table_main">
              <table className="table_inner">
                <thead>
                  <tr>
                    {table_heading.map((item, key) => (
                      <th key={key}>{item.title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {props.homeItems &&
                    props.homeItems.map((item, index) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                          <img
                            src={item.thumbnailUrl}
                            alt={item.title}
                            title={item.title}
                            className="table_data_image"
                          />
                        </td>
                      </tr>
                    ))}
                  )
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    userName: state.userAuth.data && state.userAuth.data.username,
    isLoggedInUser: state.userAuth.data && state.userAuth.data.accessToken,
    homeItems: state.LoadIInitialltems.data,
  };
}

const mapDispatchToProps = {
  loadItems,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
