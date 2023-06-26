import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <div className="contact section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact__image">
              <img src="images/house1.jpg" alt="hero" />
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-3">Unlock Your Dream Home Today</h1>
            <h3 className="mt-5 fs-5">
              Take the First Step Towards Your Ideal Property with Our Expert
              Real Estate Team
            </h3>
            <div className="contact__button mt-5">
              <Link href="/contact" className="button-primary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
