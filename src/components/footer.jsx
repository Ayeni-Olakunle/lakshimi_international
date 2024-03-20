import React from "react";
import Logo from "../asset/logo.png";
function Footer() {
  return (
    <section>
      <div className="h-[20vh] w-full flex justify-center items-center flex-col">
        <img src={Logo} alt={Logo} />
        <h1>Follow</h1>
        {/* <img src={Logo} alt={Logo} /> */}
      </div>
    </section>
  );
}

export default Footer;
