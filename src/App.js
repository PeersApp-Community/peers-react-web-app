import Logo from "./components/Logo";
import Login from "./components/auth/Login";
import AuthWrapper from "./components/auth/AuthWrapper";
import Register from "./components/auth/Register";
import OTP from "./components/auth/OTP";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Logo />} />

          {/* Authentication */}
          <Route path="/auth" element={<AuthWrapper />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="otp" element={<OTP />} />
          </Route>

          {/* Not foune page should we include it */}
          <Route path="*" element={<Logo />} />
        </Routes>
        <GlobalStyle />
      </div>
    </Router>
  );
}

export default App;
