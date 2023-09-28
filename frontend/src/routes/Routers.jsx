import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Doctors from "../pages/Doctors/Doctors";
import Login from "../pages/Login";
import Services from "../pages/Services";
import SignUp from "../pages/SignUp";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Routers;
