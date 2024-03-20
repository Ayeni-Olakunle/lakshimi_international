import React from "react";
import no1 from "../asset/no1.png";
import no2 from "../asset/no2.png";
function FAQ() {
  return (
    <section>
      <div className="h-full w-full flex justify-center items-center bg-[white]">
        <div className="h-full w-[50%] flex justify-center items-center flex-col md:w-[90%]">
            <h1 className="text-[35px] font-bold leading-[72px] text-center text-[#E16E4E] md:text-[29px]">Frequently Asked Questions</h1>
            <p className="font-[Mulish] text-lg font-normal leading-[32px] text-center">Dive into the details! Here are answers to some commonly asked questions. If you don't find what you're looking for, feel free to reach out to us – we're here to help!</p>
            <div className="flex justify-center items-start flex-col w-[85%] h-auto mx-[0] my-[50px] gap-[40px] md:w-full">
               <div className="w-full flex justify-start items-start gap-[40px]">
                    <h1 className="text-[32px] font-bold leading-[40px] text-left text-[#e16e4e]">01</h1>
                    <div>
                        <h1 className="text-lg font-semibold leading-[32px] text-left text-[#333333]">Can children drink it ?</h1>
                        <p className="text-base leading-[50px] text-left text-[#666666]">No. Do not give to children under 1 year old.</p>
                    </div>
               </div>
               <div className="w-full flex justify-start items-start gap-[40px]">
                    <h1 className="text-[32px] font-bold leading-[40px] text-left text-[#e16e4e]">02</h1>
                    <div>
                        <h1 className="text-lg font-semibold leading-[32px] text-left text-[#333333]">Are there staples attached to the tea bag ?</h1>
                        <p className="text-base leading-[50px] text-left text-[#666666]">There are no staples nor any metals attached. So, please drink it with peace of mind.</p>
                    </div>
               </div>
               <div className="w-full flex justify-start items-start gap-[40px]">
                    <h1 className="text-[32px] font-bold leading-[40px] text-left text-[#e16e4e]">03</h1>
                    <div>
                        <h1 className="text-lg font-semibold leading-[32px] text-left text-[#333333]">Is there an expiration date?</h1>
                        <p className="text-base leading-[50px] text-left text-[#666666]">The expiration date is 2 years after the date of manufacture.</p>
                    </div>
               </div>
               <div className="w-full flex justify-center items-center gap-[40px]">
                    <button  className="bg-[#E16E4E] text-[white] text-lg px-[45px] py-[10px] mt-5">Buy Now</button>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
