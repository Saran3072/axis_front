import Landing from "./components/landing";
import Signinhr from "./components/signinhr";
import Signupa from "./components/signupa";
import Signuphr from "./components/signuphr";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signupoption from "./components/signupoption";
import Profilehr from "./components/profilehr";
import Jobdetailsa from "./components/jobdetails-a";
import Jdrounds from "./components/jd-rounds";
import Jobposting from "./components/job-posting";
import Dashboarda from "./components/dashboard-a";
import Application from "./components/application";
import Assesment from "./components/assesment";
import Dashboardhr from "./components/dashboard-hr";
import Applied from "./components/applied";
import Profilea from "./components/profile-a";
import Signina from "./components/signina";
import Signinoption from "./components/signinoption";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signinoption" element={<Signinoption />} />
        <Route path="/signinhr" element={<Signinhr />} />
        <Route path="/signina" element={<Signina />} />
        <Route path="/signupa" element={<Signupa />} />
        <Route path="/signuphr" element={<Signuphr />} />
        <Route path="/signupoption" element={<Signupoption />} />
        <Route path="/job-posting" element={<Jobposting />} />
        <Route path="/profilehr" element={<Profilehr />} />
        <Route path="/jd-rounds/:id" element={<Jdrounds />} />
        <Route path="/jobdetails-a/:id" element={<Jobdetailsa />} />
        <Route path="/dashboard-a" element={<Dashboarda />} />
        <Route path="/application/:id" element={<Application />} />
        <Route path="/assesment" element={<Assesment />} />
        <Route path="/dashboard-hr" element={<Dashboardhr />} />
        <Route path="/applied" element={<Applied />} />
        <Route path="/profile-a" element={<Profilea />} />
      </Routes>
    </>
  );
}

export default App;
