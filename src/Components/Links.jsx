import React from "react";
import pancake from "../assets/pancakeswap.jpg";
import uniswap from "../assets/uniswap.jpg";
import trust from '../assets/trust2.jpg';
import metamask from '../assets/metamask.jpg';
import "./Links.css";

const Links = () => {
  return (
    <div className="flex-row">
    <div className="text-white text-center mt-10 ">
      <div>
        <h1 className="text-2xl font-bold mb-4 ">Find Me</h1>
      </div>
      <div className="flex gap-2 max-h-10  justify-center  image  ">
       <a href="https://pancakeswap.finance/"><img src={pancake} alt="pancake" /></a> 
        <a href="https://uniswap.org/"><img src={uniswap} alt="uniswap" /></a>
      </div>
    </div>
    <div>

    </div>
    <div className="text-white text-center mt-10 ">
      <div>
        <h1 className="text-2xl font-bold mb-4 ">Keep Me</h1>
      </div>
      <div className="flex gap-2 max-h-10  justify-center  image  ">
        <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp"><img src={trust} alt="trust wallet" /></a>
        <a href="https://play.google.com/store/apps/details?id=io.metamask"><img src={metamask} alt="metamask wallet" /></a>
      </div>
    </div>


    </div>

    
   
  );
};

export default Links;

