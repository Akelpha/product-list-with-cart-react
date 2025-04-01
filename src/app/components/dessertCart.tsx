import React from "react";
import ResponsiveImage from "./responsiveImage";
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
      className="border rounded-xl w-[25%] h-[45px] border-rose-500 focus:bg-red flex justify-center items-center gap-2.5 absolute top-2 right-2 bg-white">
      <span>
        
        <img src="/assets/images/icon-add-to-cart.svg" alt="icon" />
      </span>
      Add To Cart
    </button>
  );
}
export default function DessertsCard() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-rose-900">Desserts</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index}>
            <section className="relative flex justify-center items-center">
              <ResponsiveImage src={item.image} alt={item.name} />
              <Button />
            </section>

            <p>{item.category}</p>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
