import React,{Suspense} from "react"
import LandingPage from "./layouts/landingpage";
import LoginPage from "./layouts/authentication/sign-in";
import Signup from "./layouts/authentication/sign-up";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={null}>
    <Routes>
    <Route exact path="/" element={ <LandingPage/>} />
    <Route exact path="/authentication-signin" element={ <LoginPage />} />
    <Route exact path="/authentication-signup" element={ <Signup />} />
  </Routes>
  </Suspense>
  );
}

export default App;
