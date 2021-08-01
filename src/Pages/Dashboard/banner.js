import React from 'react';
import '../../Styles/_banner.scss';
import bannerImage from '../../resources/banner-image.jpg';
import PhilippineFlag from '../../resources/flag.png';

const Banner = () => {
    return (
        <section className="banner_section">
            <img src={bannerImage} id="DCWD_icon" />
            <img src={PhilippineFlag} id="PhilippineFlag_icon" />
        </section>
    )
}

export default Banner
