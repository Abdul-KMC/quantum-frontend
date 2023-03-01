import "./App.css";
import LoginSignupPage from "./Pages/login";
import RegistrationPage from "./Pages/registration";
import Table from "./Pages/table";
import Navbar from "./Pages/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LoginSignupPage />} />
            <Route exact path="/Login" element={<LoginSignupPage />} />
            <Route exact path="/Registration" element={<RegistrationPage />} />
            <Route exact path="/Table" element={<Table />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
