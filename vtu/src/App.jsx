import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashboardLayout from "./Components/DashboardLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deposit from "./Components/Dashboard/Screens/Deposit";
import Upgrade from "./Components/Dashboard/Screens/Upgrade";
import Airtime from "./Components/Dashboard/Screens/Airtime";
import Bills from "./Components/Dashboard/Screens/Bills";

function App() {
  return (
    <>
      {/* <Header />

      <Services />
      <Footer /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="upgrade_package" element={<Upgrade />} />
            <Route path="airtime_purchase" element={<Airtime />} />
            <Route path="bill_purchase" element={<Bills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
