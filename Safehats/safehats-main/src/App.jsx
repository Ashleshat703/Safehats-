import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import page for routing 
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import CompanyAuth from "./pages/CompanyAuth/CompanyAuth";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import UserAuth from "./pages/UserAuth/UserAuth";

function App() {
  return (
      <BrowserRouter>
        <Routes >
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/company" element={<CompanyAuth />} />
          <Route path="/auth/user" element={<UserAuth />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

//this to check code push working fine
