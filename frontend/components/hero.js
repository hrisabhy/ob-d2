import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Hero = ({ data }) => {
  console.log(data);
  console.log(data[0].attributes.BannerText);
  const router = useRouter();
  const [key, setKey] = useState("rent");
  const [query, setQuery] = useState("");
  const querySearchHandler = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  const submitHandlerRent = (e) => {
    e.preventDefault();
    router.push(`/search-rent?query=${query}`);
  };
  const submitHandlerSale = (e) => {
    e.preventDefault();
    router.push(`/search-sale?query=${query}`);
  };

  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-3">{data[0].attributes.BannerText}</h1>
            <h3 className="mb-5 fs-5">{data[0].attributes.BannerSubtitle}</h3>
            <div className="hero-button">
              <Link href="/contact" className="button-secondary">
                Get Your Home
              </Link>
              <Link href="/all-property" className="button-secondary">
                Projects
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero__image">
              <img src="images/hero.jpg" alt="hero" />
              <div className="image-two">
                <img src="images/house1.jpg" alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
