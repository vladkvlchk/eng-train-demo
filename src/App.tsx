import React from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";
import Account from "./components/Account";
import TrainField from "./components/TrainField";
import Home from "./pages/Home";
import Result from "./pages/Result";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Test from "./pages/Test";

const App: React.FC = () => {
  return (
    <div className={styles.wallpaper}>
      <div className={styles.app}>
        <Routes>
          <Route
            path=""
            element={
              <>
                <Home />
                {/* <Account /> */}
              </>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="/test/:id/:result" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
