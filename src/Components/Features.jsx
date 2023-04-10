import React from "react";
import "./Features.css";
import one from "../assets/a1.jpg";
import two from "../assets/a2.jpg";
import three from "../assets/a3.jpg";
import four from "../assets/a4.jpg";
import five from "../assets/a5.jpeg";
import six from "../assets/a6.jpeg";
import seven from "../assets/a7.jpeg";
import eight from "../assets/a8.jpeg";

const Features = () => {
  return (
    <>
      <div class=" p-2 mt-10 m-5 h-1/3 text-white bg-stone-900 rounded-xl">
        <h1 className="text-center font-bold text-3xl mb-10">Features</h1>
        <div class="grid md:grid-cols-2 gap-5 border-white p-3 h-auto ">
          <div class="w-auto flex h-auto items-center  rounded-md bg-stone-800 flex-col p-4 shadow-sm shadow-blue-500 hover:bg-stone-900">
            <h1 className="text-2xl font-bold">Potential Growth</h1>
            <p>
              The 2CRO token has the potential for significant growth in the
              future due to its limited supply and unique use case. As more
              people become interested in the token and its associated
              educational platform, demand for the token will increase, driving
              up its value over time.
            </p>
          </div>
          <div class=" flex h-auto items-center  rounded-md bg-stone-800 flex-col p-4 shadow-sm shadow-blue-500 hover:bg-stone-900 ">
            <h1 className="text-2xl font-bold">Education Purpose</h1>
            <p>
              The 2CRO token is designed to be used in an educational context.
              Specifically, it is intended to be used as a means of payment for
              educational services and materials, such as online courses and
              training programs. By using the 2CRO token in this way, educators
              and learners alike can benefit from the security and convenience
              of blockchain technology.
            </p>
          </div>
          <div class=" flex h-auto items-center  rounded-md bg-stone-800 text-white flex-col p-4 shadow-sm shadow-blue-300 hover:bg-stone-900">
            <h1 className="text-2xl font-bold">Limited Supply</h1>
            <p>
              One of the key features of the 2CRO token is its limited supply.
              This means that there is a finite number of tokens in circulation,
              which helps to protect the value of the token and prevent
              inflation. As more people become interested in the token, the
              limited supply will drive up its value, making it an attractive
              investment opportunity.
            </p>
          </div>
          <div class=" flex h-auto items-center  rounded-md bg-stone-800 flex-col p-4 shadow-sm shadow-blue-900 hover:bg-stone-900">
            <h1 className="text-2xl font-bold">Blockchain</h1>
            <p>
              The 2CRO token is built on a secure and reliable blockchain
              architecture, which ensures that all transactions are recorded
              transparently and accurately. This blockchain technology provides
              a high degree of security and transparency, making it an ideal
              choice for use in an educational context.
            </p>
          </div>
        </div>

        <div>
          <div class=" flex h-auto items-center  rounded-md bg-zinc-800 flex-col p-4 shadow-xl shadow-blue-500/50 mt-6 hover:bg-stone-900">
            <h1 className="text-2xl font-bold">Own App</h1>
            <p>
              The 2CRO token has its own app, where you can easily purchase and
              hold the token for long-term gain. By holding the 2CRO token for a
              year or more, you can take advantage of its potential for growth
              and benefit from the long-term value appreciation.
            </p>
            <div className=" app_img  w-auto flex h-auto  items-center justify-center flc mt-4">
              <img src={one} alt="app_images" />
              <img src={two} alt="" />
              <img src={three} alt="" />
              <img src={four} alt="" />
            </div>

            <div>
              <div className="flex m-8 justify-center text-2xl font-medium">
                <h1>Setup your wallet</h1>
              </div>
              <div className="app_img">
                <img src={five} alt="" />
                <img src={six} alt="" />
                <img src={seven} alt="" />
                <img src={eight} alt="" />
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
