import React from "react";
import no1 from "../asset/no1.png";
import no2 from "../asset/no2.png";
function Award() {
  return (
    <section>
      <div className="h-full w-full flex justify-center items-center bg-[#FFFAFF]">
        <div className="h-full w-[70%] flex justify-center items-center flex-col md:w-[90%]">
            <h1 className="text-[35px] font-bold leading-[72px] text-center text-[#E16E4E]">Awards & Recognition</h1>
            <p className="text-lg font-normal leading-[32px] text-center">Our work speaks for us.</p>
            <div className="flex justify-between items-start w-full h-auto mx-[0] my-[50px] gap-[40px] md:flex-col">
                <div className="w-1/2 text-center md:w-full">
                    <img src={no1} alt={no1} />
                    <p className="text-center mx-[0] my-[10px]">Top sales in tea category in Japanese EC site.</p>
                    <button  className="bg-[#E16E4E] text-[white] text-lg px-[45px] py-[10px] mt-5">Buy Now</button>
                </div>
                <div className="w-1/2 text-center md:w-full">
                    <img src={no2} alt={no2} />
                    <p className="text-center mx-[0] my-[10px]">Top sales in tea category in department stores.</p>
                    <button  className="bg-[#E16E4E] text-[white] text-lg px-[45px] py-[10px] mt-5">Buy Now</button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Award;
