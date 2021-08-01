import React, { useState } from "react";
import "../../../Styles/_features.scss";
import transparencySeal from "../../../resources/transparency-seal.png";
import landbankIcon from "../../../resources/landbank-icon.png";
import citizenCharter from "../../../resources/citizen-charter.jpg";
import philgepsLogo from "../../../resources/philgeps_logo.png";

const Features = () => {
  const [features, setFeatures] = useState([
    {
      imgURL: transparencySeal,
      title: "Transparency Seal",
      subtitle: "Enhance Transparency. Enforce Accountability.",
    },
    {
      imgURL: landbankIcon,
      title: "Online Payment",
      subtitle: "Accepting payments through LANDBANK.",
    },
    {
      imgURL: citizenCharter,
      title: "Citizen's Charter",
      subtitle: "Formed by the virtue in R.A. No. 11032",
    },
    {
      imgURL: philgepsLogo,
      title: "PhilGEPS",
      subtitle: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
        imgURL: philgepsLogo,
        title: "PhilGEPS",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        imgURL: philgepsLogo,
        title: "PhilGEPS",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        imgURL: philgepsLogo,
        title: "PhilGEPS",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        imgURL: philgepsLogo,
        title: "PhilGEPS",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        imgURL: philgepsLogo,
        title: "PhilGEPS",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        imgURL: philgepsLogo,
        title: "PhilGEPS",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        imgURL: philgepsLogo,
        title: "PhilGEPS",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        imgURL: philgepsLogo,
        title: "PhilGEPS",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        imgURL: philgepsLogo,
        title: "PhilGEPS",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        imgURL: philgepsLogo,
        title: "PhilGEPS",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        imgURL: philgepsLogo,
        title: "PhilGEPS",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
      },
  ]);

  return (
    <section id="features_section">
      <div className="title_container">
        <h2>OUR FEATURES</h2>
      </div>

      <div className="container cards_container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {features.map((feature) => {
              return (
                <div className="col ">
                  <div className="card mb-3 h-100">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={feature.imgURL}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{feature.title}</h5>
                          <p className="card-text">{feature.subtitle}</p>
                        </div>
                      </div>
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

export default Features;
