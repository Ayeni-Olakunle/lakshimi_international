import React from "react";
import honey1 from "../asset/honey1.png";
import honey2 from "../asset/honey2.png";
function Product() {
  return (
    <section>
      <div className="h-full w-full flex justify-center items-center bg-[#FFFAFF]">
        <div className="h-full w-[70%] flex justify-center items-center flex-col md:w-[90%] md:flex-col">
            <h1 className="text-[35px] font-bold leading-[72px] text-left text-[#E16E4E] w-full">Product Features</h1>
            <p className="text-lg font-normal leading-[32px] text-left w-full">Discover the Essence of Our Tea Collection</p>
            <div className="flex justify-between items-start w-full h-auto mx-[0] my-[50px] gap-[40px] md:w-full md:flex-col">
                <img src={honey1} alt={honey1} className="w-[50%] h-[390px] md:w-full" />
                <div className="flex justify-between items-start flex-col h-full w-1/2 md:w-full">
                    <h1 className="text-[29px] font-semibold leading-[48px] text-left w-full">Honey that took over 2 years to find.</h1>
                    <p className="text-[15px] font-normal leading-[32px] text-left">Discover the liquid gold that embodies patience and persistence – our honey took over 2 years to find. We have tried over a 1000 different types of honey of different locations and finally, after 2 years of extensive search and going all the way from Japan to Spain, we discovered the perfect honey for the perfect flavored blend of tea.</p>
                    <button  className="bg-[#E16E4E] text-[white] text-lg px-[45px] py-[10px] mt-5">Buy Now</button>
                </div>
            </div>
            <div className="flex justify-between items-start w-full h-auto mx-[0] my-[50px] gap-[40px] md:flex-col md:w-full">
                <div className="flex justify-between items-start flex-col h-full w-1/2 md:w-full">
                    <h1 className="text-[29px] font-semibold leading-[48px] text-left">Blended by Japanese tea sommelier Yoko Toda.</h1>
                    <p className="text-[15px] font-normal leading-[32px] text-left">Crafted with precision and expertise, each blend bears the mark of Japanese tea sommelier Yoko Toda. Immerse yourself in the artistry of tea, perfected by a master for an unparalleled experience in every sip.</p>
                    <button  className="bg-[#E16E4E] text-[white] text-lg px-[45px] py-[10px] mt-5">Buy Now</button>
                </div>
                <img src={honey2} alt={honey2} className="w-[50%] h-[390px] md:w-full" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
