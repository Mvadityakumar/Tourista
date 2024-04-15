import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Weather forecasts are made by collecting data about the current atmosphere and using atmospheric processes to predict how it will evolve.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide ",
    desc: " An easy travel planning guide with step-by-step directions on exactly how to plan a trip for any budget, travel style or destination.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Customize an Unforgettable Experience with help of multiple local expert agents! Add offbeat attractions, choose local cuisines, add local activities.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
