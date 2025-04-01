import React from "react";

export default function CommandCart() {
  return (
    <div className="bg-white flex flex-col justify-center items-center gap-4 w-[90%] h-[300px] mx-auto rounded-xl mt-10 shadow-lg">
      <h2 className="text-lg font-bold text-red">
        Your Cart <span>(0)</span>
      </h2>
      <img
        src="/assets/images/illustration-empty-cart.svg"
        alt="Illustration Icon"></img>
      <p className="text-rose-900 font-bold">
        Your added items will appear here.
      </p>
    </div>
  );
}
