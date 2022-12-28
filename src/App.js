import React,{Suspense} from "react"
import LandingPage from "./layouts/landingpage";
import LoginPage from "./layouts/authentication/sign-in";
import Signup from "./layouts/authentication/sign-up";
import Dashboard from "./layouts/dashboard";
import SignupBanner from "./layouts/signupbanner";
import StudentSignup from "./layouts/authentication/student-signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={null}>
    <Routes>
    <Route exact path="/" element={ <LandingPage/>} />
    <Route exact path="/authentication-signin" element={ <LoginPage />} />
    <Route exact path="/authentication-parent-signup" element={ <Signup />} />
    <Route exact path="/authentication-student-signup" element={ <StudentSignup />} />
    <Route exact path="/dashboard" element={ <Dashboard />} />
    <Route exact path="/signup-selection" element={ <SignupBanner />} />
  </Routes>
  </Suspense>
  );
}

export default App;
