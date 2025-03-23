import React from "react";
import Card from "./components/card";

export default function Page() {
  return (
    <>
      <Card />
      <div className="font-[11px]  text-center">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-[#3e52a3]">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/Akelpha"
          className="text-[#3e52a3]">
          Akelpha
        </a>
        .
      </div>
    </>
  );
}
