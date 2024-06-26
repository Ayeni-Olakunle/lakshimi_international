import React from "react";
import Logo from "../asset/logo.png";
function Menu() {
  return (
    <section>
      <div className="h-[12vh] w-full flex justify-around items-end md:h-auto md:px-[0] md:py-[20px]">
        <ul className="flex justify-center items-center gap-[50px] md:hidden">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Product</li>
        </ul>
        <img src={Logo} alt={Logo} />
        <ul className="flex justify-center items-center gap-[50px] md:hidden">
          <li className="cursor-pointer">Feature</li>
          <li className="cursor-pointer">Award</li>
          <li className="cursor-pointer">FAQ</li>
        </ul>
      </div>
    </section>
  );
}

export default Menu;
