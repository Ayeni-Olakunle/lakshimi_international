import React from "react";
import About from "../asset/about.png";
function AboutBrand() {
  return (
    <section>
      <div className="h-[100vh] w-full flex justify-center items-center md:h-auto md:px-[0] py-[20px]">
        <div className="h-[100vh] flex justify-around items-center w-[70%] gap-[50px] md:w-full md:flex-col md:h-auto">
            <div className="w-1/2 md:w-[90%]">
                <h1 className="text-[50px] font-bold leading-[72px] text-left text-[#E16E4E]">About Brand</h1>
                <div className="flex justify-between items-center flex-col gap-[10px] font-[Mulish] text-[17px] font-normal text-left">
                    <p>akshimi started with a tea class that the representative, Yoko Toda, started at home. In 2005, “Lakshimi Tea Shop” opened in Kitano, Kobe.</p>
                    <p>In 2008, we started to blend our own original tea. Initially, we started with only a few blends, but as we learned about the tastes and preferences of our customers, we gradually increased the number of original blends</p>
                    <p>In 2011, we developed our popular product, “Premium Honey Tea”. This tea was well-received by customers who enjoyed its sweet yet low-calorie content, making it a mainstay in our store.</p>
                </div>
                <button className="bg-[#E16E4E] text-[white] text-lg px-[60px] py-[15px] mt-5">Buy Now</button>
            </div>
            <div className="w-1/2 md:w-[90%]">
                <img src={About} alt={About} className="w-full"/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBrand;
