import React from "react";
import select1 from "../asset/select1.png";
import select2 from "../asset/select2.png";
function SelectedProducts() {
  return (
    <section>
      <div className="h-full w-full flex justify-center items-center bg-[#FFFAFF] md:w-full">
        <div className="h-full w-[70%] flex justify-center items-center flex-col md:w-full">
            <h1 className="text-[35px] font-bold leading-[72px] text-center text-[#E16E4E]">Selected Products</h1>
            <p className="text-lg font-normal leading-[32px] text-center">Indulge in Our Exceptional Tea Collection.</p>
            <div className="w-[80%] mx-[0] my-[30px] flex justify-between items-center gap-[25px] md:flex-col md:w-full">
                <div className="w-[50%] md:w-[90%]">
                    <img src={select1} alt={select1} className="h-[350px] md:w-full" />
                    <h1 className="text-[22px] leading-[40px] text-left font-semibold mx-[0] my-[5px]">Premium Honey Tea</h1>
                    <p className="text-[#333333] text-[15px] font-normal leading-[27px] text-left">As a product delivered by a tea sommelier from a tea specialty shop, we have maximized the flavor of the tea leaves. We blend powdered multi-floral honey from Spain into the tea. The sweetness of the honey is so strong that there is no need to use sugar. Just one sip brings a feeling of happiness, a rich flavor. It’s a delicious tea, whether hot or iced, straight or as a milk tea.</p>
                    <button className="bg-[#E16E4E] text-[white] text-lg px-[45px] py-[10px] mt-5">Buy Now</button>
                </div>
                <div className="w-[50%] md:w-[90%]">
                    <img src={select2} alt={select2} className="h-[350px]" />
                    <h1 className="text-[22px] leading-[40px] text-left font-semibold mx-[0] my-[5px]">Premium Honey Lemon Tea</h1>
                    <p className="text-[#333333] text-[15px] font-normal leading-[27px] text-left">Indulge in the harmonious blend of nature's finest ingredients with Lakshimi Premium Honey Lemon Tea. Crafted with meticulous care, this exquisite infusion combines the sweetness of pure honey, the zest of sun-kissed lemons, and the premium quality tea leaves to create a tea experience like no other. Elevate your tea ritual with Lakshimi Premium Honey Lemon Tea, where every sip is a celebration of taste and tranquility.</p>
                    <button className="bg-[#E16E4E] text-[white] text-lg px-[45px] py-[10px] mt-5">Buy Now</button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedProducts;
