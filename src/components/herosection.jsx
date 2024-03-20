import React from "react";
import Hero from "../asset/hero.png";
function HeroSection() {
  return (
    <section>
      <div className="h-[88vh] w-full md:h-[70vh] md:px-[0] md:py-[20px]">
        <img src={Hero} alt={Hero} className="w-full h-[88vh] absolute z-[-1]  md:h-[70vh]" />
        <div className="w-full flex justify-center items-center h-full">
            <div className="w-3/5 flex justify-between items-center flex-col gap-[20px] md:w-full">
                <h1 className="text-[55px] font-medium leading-[88px] text-center text-[white]">
                The ultimate aroma and taste, for blissful <span className="text-[#DBCA00]">relaxation</span>.
                </h1>
                <p className="text-base font-semibold leading-[28px] md:w-full text-center text-[white] w-[600px]">Elevate your tea experience and discover the perfect balance of tranquility and taste, sip by sip. Welcome to a journey where every cup is a celebration of serenity and indulgence.</p>
                <button className="bg-[#E16E4E] text-[white] text-lg px-[60px] py-[15px]">Buy Now</button>
            </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
