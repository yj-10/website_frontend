import logo from "./logo.svg";
import "./App.css";
import "./global.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Error from "./Pages/404/Error";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import Parts from "./Pages/Parts/Parts";
import Industries from "./Pages/Industries/Industries";
import Service from "./Pages/Service/Service";
import Laboratery from "./Pages/R&D/Laboratery";
import Layout from "./Pages/Layout";
import Project from "./Pages/Project/Project";
import Gallery from "./Pages/Gallery/Gallery";
import Career from "./Pages/Career/Career";
import FRPFan from "./Component/Product/subProduct/FRPFan";

import FanBlads from "./Component/Product/subProduct/FanBlads";
import Rcc_Cooling_tower from "./Component/Product/subProduct/Rcc_Cooling_tower";
import WoodenCooling from "./Component/Product/subProduct/woodenCooling";
import Gearbox from "./Component/Product/subProduct/GearBox";
import CTITips from "./Component/service/SubServices/CTITips";
import TPTesting from "./Component/service/SubServices/TPTesting";
import Reconstruction from "./Component/service/SubServices/Reconstruction";
import GearboxDIagonstics from "./Component/service/SubServices/GearboxDIagonstics";
import FFEAnalysis from "./Component/service/SubServices/FFEAnalysis";
import ESProgram from "./Component/service/SubServices/ESProgram";
import MTesting from "./Component/service/SubServices/MTesting";
import Privacy from "./Pages/Privacy/Privacy";
import Terms from "./Pages/Terms/Terms";
import EnquireInfo from "./Pages/Enquiry/EnquireInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/FRPFan" element={<FRPFan />} />
          <Route path="/FanBlads" element={<FanBlads />} />
          <Route path="/Rcc_Cooling_tower" element={<Rcc_Cooling_tower />} />
          <Route path="/WoodenCooling" element={<WoodenCooling />} />
          <Route path="/Gearbox" element={<Gearbox />} />

          <Route path="/Career" element={<Career />} />
          <Route path="/Parts" element={<Parts />} />
          <Route path="/Industries" element={<Industries />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/CTITips" element={<CTITips />} />
          <Route path="/MTesting" element={<MTesting />} />
          <Route path="/ESProgram" element={<ESProgram />} />
          <Route path="/FFEAnalysis" element={<FFEAnalysis />} />
          <Route path="/GearboxDIagonstics" element={<GearboxDIagonstics />} />
          <Route path="/Reconstruction" element={<Reconstruction />} />

          <Route path="/TPTesting" element={<TPTesting />} />

          <Route path="/Project" element={<Project />} />
          <Route path="/Laboratery" element={<Laboratery />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="*" element={<Error />} />
          <Route path="EnquireInfo" element={<EnquireInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
