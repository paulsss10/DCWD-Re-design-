import React from "react";
import '../../Styles/_dashboard.scss';
import Banner from "./banner";
import Features from "./Components/Features";
import Services from "./Components/Services";
import Navbar from "./navbar";
import Ribbon from "./ribbon";

const Dashboard = () => {
  return (
    <div>
        <Ribbon />
        <Banner />
        <Navbar />
        <div className="content_container">
            <Features />
            <Services />
        </div>
        
    </div>
  );
};

export default Dashboard;
