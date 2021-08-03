import React, { useState } from "react";
import "../../../Styles/_services.scss";
import ZoneSVG from "../../../resources/zone-svg.svg";
import OnlinePaymentSVG from "../../../resources/onlineinquiry.svg";
import OnlineCalc from "../../../resources/onlineCalcu-svg.svg";
import OnlineBill from "../../../resources/billInquiry-svg.svg";
import TextBlast from "../../../resources/textBlast-svg.svg";

const Services = () => {
  const [services, setServices] = useState([
    {
      imgURL: ZoneSVG,
      title: "Know your where your DCWD zone.",
      subtitle: "",
    },
    {
      imgURL: OnlinePaymentSVG,
      title: "Bill Inquiry",
      subtitle: "24/7 secure online access to review your bill.",
    },

    {
      imgURL: OnlineCalc,
      title: "Bill Calculator",
      subtitle: "Know and Calculate your bill consumptions.",
    },
    {
      imgURL: OnlineBill,
      title: "Apply for Online Bill",
      subtitle: "Enhance Transparency. Enforce Accountability.",
    },

    {
      imgURL: TextBlast,
      title: "Apply for our Text Blast Services",
      subtitle: "Enhance Transparency. Enforce Accountability.",
    },
  ]);

  return (
    <section id="services_section">
      <div className="title_container">
        <h2>ONLINE SERVICES</h2>
      </div>

      <div className="container cards_container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5">
          {services.map((service) => {
            return (
              <div class="card-group">
                <div class="card">
                  <img src={service.imgURL} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{service.title}</h5>
                    <p class="card-text">{service.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
