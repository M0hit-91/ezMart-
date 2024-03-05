import React from "react";
import icon_delivery from "../assets/icondelivery.png";
import shieldtick from "../assets/shieldtick.png";
import iconCustomerservice from "../assets/iconCustomerservice.png";

export const Services = () => {
  const services = [
    {
      id: 1,
      logo: icon_delivery,
      heading: "FREE AND FAST DELIVERY",
      tagline: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      logo: iconCustomerservice,
      heading: "24/7 CUSTOMER SERVICE",
      tagline: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      logo: shieldtick,
      heading: "MONEY BACK GUARANTEE",
      tagline: "We return money within 30 days",
    },
  ];
  return (
    <div className="mt-20 mb-20">
      <div className="flex  justify-evenly items-center flex-wrap gap-2">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="flex flex-col justify-center items-center mt-10"
            >
              <div className="bg-[#2F2E30] w-[60px] h-[60px] xl:w-[80px] xl:h-[80px] rounded-full flex  justify-center items-center">
                <div className="bg-black w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] rounded-full flex  justify-center items-center">
                  <img src={service.logo} className="w-[30px] xl:w[40px]" />
                </div>
              </div>
              <h1 className=" text-lg xl:text-xl font-bold break-words mt-2 mb-2">
                {service.heading}
              </h1>
              <p className="text-sm  font-normal break-words">
                {service.tagline}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
