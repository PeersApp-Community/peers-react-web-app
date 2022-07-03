import Logo from "./components/Logo";
import Login from "./components/auth/Login";
import AuthWrapper from "./components/auth/AuthWrapper";
import Register from "./components/auth/Register";
import OTP from "./components/auth/OTP";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Learning from "./components/Learning";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Download from "./components/Download";
import { FAQS } from "./components/styles/learnStyles";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="faqs" element={<FAQS />} /> */}
          
          {/* Home page */}
          {/* <Route path="/" element={<Logo />} /> */}

          {/* Authentication */}
          {/* <Route path="/auth" element={<AuthWrapper />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="otp" element={<OTP />} />
          </Route> */}

          {/* Not foune page should we include it */}
          {/* <Route path="*" element={<Logo />} /> */}

          {/* <Route path="/" element={<Learning />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
