import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import BaseRoutes from "./routing/BaseRoutes";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <MainLayout>
              <BaseRoutes />
            </MainLayout>
          </Router>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;
