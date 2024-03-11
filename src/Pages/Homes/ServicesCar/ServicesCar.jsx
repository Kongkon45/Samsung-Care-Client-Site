import React from "react";
import Car from "../../../assets/images/we-come-to-you-2x.webp";
const ServicesCar = () => {
  return (
    <div>
      <div className="lg:flex my-10">
        <div className="lg:w-3/5 w-full lg:mx-6 lg:p-0 p-6">
          <img src={Car} alt="Quality" />
        </div>
        <div className="lg:w-2/5 w-full lg:mx-6 lg:p-0 p-6">
          <h2 className="text-4xl font-bold text-black mt-10 mb-6">
            We come to you
          </h2>
          <h5 className="text-md font-bold text-black">
            With our special We Come to You service, we'll fix your phone at
            your place, your office, your best friend's house or even your
            favorite restaurant. It's a whole new level of convenience.
          </h5>
          <ul className="list-disc list-inside ">
            <li className="text-sm my-2">
            Enjoy same day repairs in most cases and nationwide coverage.
            </li>
            <li className="text-sm my-2">
            Schedule online and a certified technician will come to your location.
            </li>
          </ul>
          <button className="text-xs py-2 px-4 rounded-xl bg-black text-white font-bold hover:bg-[#555555] hover:text-white hover:scale-105 transform transition-transform duration-300">
            Find Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCar;
