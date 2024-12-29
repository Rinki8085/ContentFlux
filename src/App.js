import AllRoutes from "./Routes/AllRoutes";
import Navbar from './Component/Navbar';
import ContactForm from "./Component/ContactForm";
import Footer from "./Component/Footer";
import './App.css';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  let { pathname } = useLocation();

  return (
    <>
      <Navbar/>
      <AllRoutes/>
      {pathname!=="/thankyou" && <ContactForm />}
      <Footer />
    </>
  );
}

export default App;
