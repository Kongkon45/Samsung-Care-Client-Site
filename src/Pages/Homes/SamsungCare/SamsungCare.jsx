import React from "react";
import CareVideo from "../../../assets/images/An Inside Look into Your Mobile Device Repair Journey with Samsung Care.mp4";

const SamsungCare = () => {
  
  return (
    <div >
      <div className="text-center px-4">
        <h3 className="text-3xl font-bold text-black mt-6">AN INSIDE LOOK</h3>
        <h2 className="text-4xl font-bold text-black mt-2">
          Samsung Care mobile repair journey
        </h2>
        <p className="w-2/3 mx-auto mt-2 mb-10">
          Curious about what happens to your mobile device during the repair
          process? Check out this behind-the-scenes video from our walk-in and
          mail-in mobile repair facilities in Texas to learn more!
        </p>
      </div>
      <div>
        
        <video className="lg:w-2/3 mx-auto w-full p-6 lg:mb-6" controls>
          <source src={CareVideo} type="video/mp4" />
        </video>
      </div>
      <div className="text-[11px] lg:pr-6 lg:mb-8 text-justify p-6">
        <p>[1] Among leading smartphone manufacturers (in-warranty authorized locations only); based on population within 30 min. drive of walk-in service center or home van service center ($30 home van service fee).</p>
        <p>[2] Based on 2023 American Customer Satisfaction Index Survey of customers rating their own cell phone manufacturer’s performance. Samsung tied with one other brand for Service Quality. ACSI is a registered trademark of American Customer Satisfaction Index LLC.</p>
      </div>
    </div>
  );
};

export default SamsungCare;
