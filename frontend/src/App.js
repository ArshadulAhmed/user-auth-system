import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import BaseRoutes from "./routing/BaseRoutes";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <MainLayout>
            <BaseRoutes />
          </MainLayout>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
