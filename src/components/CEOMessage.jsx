import React from "react";
import CEOImg from "../assets/CEO.png";
const CEOMessage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen mx-10 my-10">
         <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h72 bg-yellow-500/20 rounded full blur-3xl animate-pulse" />
      <h1 className="font-bold text-3xl mb-5">OUR CEO (Chief Executive Officer)</h1>
            <div className="flex flex-col space-y-10 md:space-x-10 lg:flex-row ">
        {/* CEO image */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <img src={CEOImg} alt="CEO image " className="h-65 md:h-100" />
        </div>
        {/* CEO Text */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center ">
         <h1 className="font-bold text-3xl mb-5">CEO Message</h1>
          <p className="  text-lg text-center  ">
            “At <strong className="text-green-200">M/s Pir Badshah & Co</strong> our mission is to turn visions into
            reality. Every project we undertake is a promise of quality,
            precision, and innovation. Over the years, we have grown through the
            trust of our clients and the dedication of our team, delivering
            exceptional construction, architecture, renovation, and interior
            design solutions.” “Our commitment is to exceed expectations by
            combining creativity, sustainability, and cutting-edge technology.
            We believe that every space has a story to tell, and it is our
            responsibility to bring that story to life while maintaining the
            highest standards of professionalism and integrity.” <br/>
           <strong className="text-green-200 ">CEO: Syed Pir Badshah </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CEOMessage;
