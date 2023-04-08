import React from "react";
import "./Timer.css";
import tokenlogo from "../assets/tokenlogo2.jpeg";
import  { useState, useEffect } from 'react';

const Timer = () => {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(24);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(intervalId);
          }
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds , minutes, hours]);
  return (
    <div className="Timer text-white w-auto  h-auto">
      <div className="heading text-white font-bold text-4xl flex mt-4  justify-center p-4">
        <h1>Comming soon</h1>
      </div>

      <div className=" flex flex-col gap-2 w-auto  p-2  mt-0 h-max items-center justify-center detils">
        <div className="logo  "><img src={tokenlogo} alt="" /></div>
        <div className="intro flex-col w-auto h-auto rounded p-5 shadow-xl shadow-emerald-500/50">
        <div className="time text-9xl flex justify-center text-center mb-5"> <div className="container mt-8">
      <div className="Timer bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-white mb-8">Launching soon</h1>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center m-2">
            <p className="text-3xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text w-16 h-16 rounded-full flex items-center justify-center">{hours.toString().padStart(2, '0')}</p>
            <p className="text-lg text-white opacity-80">Hours</p>
          </div>
          <div className="flex flex-col items-center justify-center m-2">
            <p className="text-3xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text w-16 h-16 rounded-full flex items-center justify-center">{minutes.toString().padStart(2, '0')}</p>
            <p className="text-lg text-white opacity-80">Minutes</p>
          </div>
          <div className="flex flex-col items-center justify-center m-2">
            <p className="text-3xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text w-16 h-16 rounded-full flex items-center justify-center">{seconds.toString().padStart(2, '0')}</p>
            <p className="text-lg text-white opacity-80">Seconds</p>
          </div>
        </div>
      </div>
    </div></div>
          <p> 2CRO token is a promising cryptocurrency that offers a unique use case in the education industry. With its limited supply, secure blockchain architecture, and own app for purchase and holding, the 2CRO token is a strong investment choice for anyone looking to diversify their portfolio and benefit from long-term gains.</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
