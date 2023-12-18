import ReactDOM from "react-dom/client";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HowItWorks from "./pages/HowItWorks";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";



export default function App() {
  return (
      <BrowserRouter>
       <Routes> 
          <Route path={'/'} element={<HowItWorks />} />
          <Route path={"whoweare"} element={<WhoWeAre/>} />
          <Route path={"whatwedo"} element={<WhatWeDo />} />
          <Route path={"contactus"} element={<ContactUs />} />
          <Route path={"signin"} element={<SignIn />} />
       </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
