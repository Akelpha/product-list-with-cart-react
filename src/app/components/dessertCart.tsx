import React from "react";
import ResponsiveImage from "./responsiveImage";
import Image from 'next/image'
const data = [
  {
    image: {
      thumbnail: "/assets/images/image-waffle-thumbnail.jpg",
      mobile: "/assets/images/image-waffle-mobile.jpg",
      tablet: "/assets/images/image-waffle-tablet.jpg",
      desktop: "/assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "/assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "/assets/images/image-creme-brulee-mobile.jpg",
      tablet: "/assets/images/image-creme-brulee-tablet.jpg",
      desktop: "/assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "/assets/images/image-macaron-thumbnail.jpg",
      mobile: "/assets/images/image-macaron-mobile.jpg",
      tablet: "/assets/images/image-macaron-tablet.jpg",
      desktop: "/assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "/assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "/assets/images/image-tiramisu-mobile.jpg",
      tablet: "/assets/images/image-tiramisu-tablet.jpg",
      desktop: "/assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "/assets/images/image-baklava-thumbnail.jpg",
      mobile: "/assets/images/image-baklava-mobile.jpg",
      tablet: "/assets/images/image-baklava-tablet.jpg",
      desktop: "/assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "/assets/images/image-meringue-thumbnail.jpg",
      mobile: "/assets/images/image-meringue-mobile.jpg",
      tablet: "/assets/images/image-meringue-tablet.jpg",
      desktop: "/assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "/assets/images/image-cake-thumbnail.jpg",
      mobile: "/assets/images/image-cake-mobile.jpg",
      tablet: "/assets/images/image-cake-tablet.jpg",
      desktop: "/assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "/assets/images/image-brownie-thumbnail.jpg",
      mobile: "/assets/images/image-brownie-mobile.jpg",
      tablet: "/assets/images/image-brownie-tablet.jpg",
      desktop: "/assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "/assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "/assets/images/image-panna-cotta-mobile.jpg",
      tablet: "/assets/images/image-panna-cotta-tablet.jpg",
      desktop: "/assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

function Button() {
  return (
    <button
      type="button"
      className="border-2 rounded-4xl w-[170px] h-[50px] text-rose-900 border-rose-500 hover:border-red hover:text-red  flex justify-center items-center absolute inset-x-25 -bottom-7.5 bg-white">
      <span>
        <Image
          src="/assets/images/icon-add-to-cart.svg"
          alt="Add to Cart Icon"
          width={25}
          height={25}
          className="object-cover rounded-2xl"
        />
      </span>
      Add To Cart
    </button>
  );
}
export default function DessertsCard() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-rose-900 pl-6.5 pb-3.5">Desserts</h1>
      <div className="grid grid-cols-3 gap-4 ">
        {data.map((item, index) => (
          <div key={index} className=" flex flex-col  ">
            <section className="relative flex justify-center ">
              <ResponsiveImage src={item.image} alt={item.name} />
              <Button />
            </section>
            <article className="text-justify mt-4 pl-6.5">
              <p className="text-rose-400 font-medium text-sm">{item.category}</p>
              <h2 className="text-xl font-bold text-rose-900">{item.name}</h2>
              <p className="text-red font-medium text-sm">${item.price}</p>
            </article>

          </div>
        ))}
      </div>
    </div>
  );
}
