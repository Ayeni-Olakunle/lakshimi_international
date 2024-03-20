import React from "react";
import Hero from "../asset/hero.png";
function Extraordinary() {
  return (
    <section>
      <div className="h-[88vh] w-full md:h-[70vh] md:px-[0] md:py-[20px]">
        <img src={Hero} alt={Hero} className="w-full h-[88vh] absolute z-[-1] md:h-[70vh]" />
        <div className="w-full flex justify-start items-center h-full md:w-full">
            <div className="w-3/5 ml-[80px] md:m-0 md:p-[20px] md:w-full">
                <h1 className="font-medium text-[white] text-[47px] text-left leading-[70px]">
                Indulge in the Extraordinary. <span className="text-[#DBCA00]">Elevate Your Sip,</span> Elevate Your Life.
                </h1>
                <p className="text-base font-semibold leading-[28px] text-[white] w-[500px] text-left mx-[0] my-[20px] md:w-full">Ready to embark on a journey of unparalleled taste and tranquility? Choose Lakshimi Japanese Tea where every cup is a celebration of flavor, wellness, and pure indulgence.</p>
                <button className="bg-[#E16E4E] text-[white] text-lg px-[60px] py-[15px]">Buy Now</button>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Extraordinary;
