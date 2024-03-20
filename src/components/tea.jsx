import React from "react";
import tea1 from "../asset/tea1.png";
import tea2 from "../asset/tea2.png";
function Tea() {
  return (
    <section>
      <div className="h-full w-full flex justify-center items-center bg-[white]">
        <div className="h-full w-[70%] flex justify-center items-center flex-col md:w-[90%] md:flex-col">
            <h1 className="text-[35px] font-bold leading-[72px] text-center text-[#E16E4E] md:text-3xl">Get the best from our Tea</h1>
            <p className="text-lg font-normal leading-[32px] text-center">Style to your own taste.</p>
            <div className="flex justify-between items-start w-full h-auto mx-[0] my-[50px] gap-[40px]  md:w-full md:flex-col">
                <img src={tea1} alt={tea2} className="w-[50%] h-[390px] md:w-full" />
                <div className="flex justify-between items-start flex-col h-full w-1/2 md:w-full">
                    <h1 className="text-[29px] font-semibold leading-[48px] text-left">With Milk</h1>
                    <p className="text-[15px] font-normal leading-[32px] text-left">Savor the perfect union of tradition and comfort by enjoying our tea with milk. Elevate your tea-drinking experience as the rich, robust flavors intertwine with the creamy embrace of milk, creating a symphony of taste that lingers in every delightful sip.</p>
                    <button  className="bg-[#E16E4E] text-[white] text-lg px-[45px] py-[10px] mt-5">Buy Now</button>
                </div>
            </div>
            <div className="flex justify-between items-start w-full h-auto mx-[0] my-[50px] gap-[40px] md:flex-col md:w-full">
                <div className="flex justify-between items-start flex-col h-full w-1/2 md:w-full">
                    <h1 className="text-[29px] font-semibold leading-[48px] text-left">With Ice</h1>
                    <p className="text-[15px] font-normal leading-[32px] text-left">Embrace the refreshing symphony of flavors as you take a cool journey through our teas enjoyed with ice. Immerse yourself in the invigorating fusion of iced tea, where each sip unfolds a delightful dance of chilled sophistication and exceptional taste..</p>
                    <button  className="bg-[#E16E4E] text-[white] text-lg px-[45px] py-[10px] mt-5">Buy Now</button>
                </div>
                <img src={tea2} alt={tea2} className="w-[50%] h-[390px] md:w-full" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Tea;
