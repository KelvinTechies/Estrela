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
import Cable from "./Components/Dashboard/Screens/Cable";
import Profile from "./Components/Dashboard/Screens/Profile";
import Referrals from "./Components/Dashboard/Screens/Referrals";
import Transactions from "./Components/Dashboard/Screens/Transactions";
import Data from "./Components/Dashboard/Screens/Data";

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
            <Route path="cable_purchase" element={<Cable />} />
            <Route path="settings" element={<Profile />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="all_transactions" element={<Transactions />} />
            <Route path="data_purchase" element={<Data />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
