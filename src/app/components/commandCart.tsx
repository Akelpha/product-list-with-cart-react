'use client'
import React,{ useState } from "react";
import Image from "next/image";
// import DessertsCard from "./dessertCart";
function CommandCart() {
  const [isDessertAdded, setisDessertAdded] = useState(false);
  const [countAddedDessert, setCountAddedDessert] = useState(0);
  


  return (
    <>
    {isDessertAdded ? (<div className="bg-white flex flex-col justify-center items-center gap-4 w-[350px] h-[250px] rounded-xl shadow-xs mt-8">
      <h2 className="text-lg font-bold text-red">
        Your Cart <span>{countAddedDessert}</span>
      </h2>
      <p className="text-rose-400 font-medium text-xs">
        Your added items will appear here.
      </p>
    </div>):(
      <div className="bg-white flex flex-col justify-center items-center gap-4 w-[350px] h-[250px] rounded-xl shadow-xs mt-8">
      <h2 className="text-lg font-bold text-red">
        Your Cart <span>(0)</span>
      </h2>
      <Image
        src="/assets/images/illustration-empty-cart.svg"
        alt="Illustration Icon"
        width={100}
        height={100}
        className="object-cover rounded-2xl"
      />

      <p className="text-rose-400 font-medium text-xs">
        Your added items will appear here.
      </p>
    </div>)
  }
    </>
    
  );
}
export default function Command() {

  return (
    <CommandCart />
  );
}
