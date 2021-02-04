import React from "react";
import { connect } from "react-redux";
import { loadItems } from "../redux/actions/loadItems";

const table_heading = [
  {
    title: "Customer ID",
    key: 1,
  },
  {
    title: "Name",
    key: 2,
  },

  {
    title: "email",
    key: 3,
  },
  {
    title: "phone",
    key: 4,
  },
  {
    title: "website",
    key: 5,
  },
  {
    title: "company",
    key: 6,
  },
  {
    title: "address",
    key: 7,
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
                    props.homeItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.website}</td>
                        <td>
                          <span>Name </span>
                          <br /> {item.company.name}
                          <table className="innerTable">
                            <tr>
                              <td colSpan={2}>
                                <span>
                                  Details
                                  <br />
                                </span>
                                {item.company.catchPhrase}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span>Address</span> <br />
                                {item.company.catchPhrase}
                              </td>
                              <td>
                                <span>
                                  Locality
                                  <br />
                                </span>
                                {item.company.bs}
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td>
                          <table className="innerTable">
                            <tr colSpan={2}>
                              <td colSpan={2}>{item.address.street}</td>
                            </tr>

                            <tr>
                              <td colSpan={2}>
                                <span>
                                  suite
                                  <br />
                                </span>
                                {item.address.suite}
                              </td>
                            </tr>
                            <tr className="no_pad">
                              <td colSpan={1}>
                                <span>
                                  city
                                  <br />
                                </span>
                                {item.address.city}
                              </td>
                              <td colSpan={1}>
                                <span>
                                  zipcode
                                  <br />
                                </span>
                                {item.address.zipcode}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    ))}
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
