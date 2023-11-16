import React from "react";
import Dashboardmenu from "../components/Dashboardmenu";
import { Route, Routes } from "react-router-dom";
import Wallet from "./Wallet";
import Header from "../components/Header";
import NotFound from "../components/NotFound";

type Props = {};

const Index = (props: Props) => {
  return (
    <div className="flex font-popp">
      <div className="flex justify-center ">
        <Dashboardmenu />
      </div>
      <div className="flex-1">
        <Header />

        <Routes>
          <Route path="/" element={<Wallet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;
