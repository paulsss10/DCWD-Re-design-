import React, { useState } from 'react';
import '../../../Styles/_services.scss';


const Services = () => {
    const [services, setServices] = useState([
      {
        imgURL: '',
        title: "Transparency Seal",
        subtitle: "Enhance Transparency. Enforce Accountability.",
      },
      {
        imgURL: '',
        title: "Transparency Seal",
        subtitle: "Enhance Transparency. Enforce Accountability.",
      },
      {
        imgURL: '',
        title: "Transparency Seal",
        subtitle: "Enhance Transparency. Enforce Accountability.",
      },
    ]);

    return (
      <section id="services_section">
        <div className="title_container">
          <h2>ONLINE SERVICES</h2>
        </div>

        <div className="container cards_container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {services.map((service) => {
              return (
                <>
                
                </>
              );
            })}
        </div>
      </div>
      </section>
    );
}

export default Services
