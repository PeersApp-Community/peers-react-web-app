
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";


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
