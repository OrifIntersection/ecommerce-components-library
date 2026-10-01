import React from 'react';
import { useEffect, useState } from "react"

import data from './data/products.json'
import Button from './secondaryComponents/UI/button';
// const widths = {
//     auto: "w-auto",
//     full: "w-full",
//     sm: "w-24",
//     md: "w-40",
//     lg: "w-64",
//     xl: "w-96",
// };

// const paddings = {
//     none: "p-0",
//     xs: "p-1",
//     sm: "p-2",
//     md: "p-3",
//     lg: "p-4",
//     xl: "p-6",
// };

import Lunettes from './assets/lunettes.png'

function ProductItemChildren({ src, type, title, description, price, nbArticle, origin, disponibility }) {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  let dispo;
  switch (disponibility) {
    case 0:
      dispo = "en stock ";
      break;
    case 1:
      dispo = "stock faible";
      break;
    case 2:
      dispo = "plus disponible";
      break;
  };

  return (
    <div className="h-screen w-auto flex flex-col md:flex-row items-center justify-center gap-8 py-10 md:pb-30px">
      <section className="w-full max-w-xs md:w-96 border-red-400">
        <img src={src} alt="Lunettes de soleil" className="w-full h-auto object-cover"/>
      </section>

      <section className="w-full flex flex-col items-start xl:max-w-2xl">
        <p className="font-bold text-m md:text-sm">{type}</p>
        <h1 className="font-bold text-2xl md:text-3xl">{title}</h1>
        <p className="font-bold text-m md:text-xl pb-1 md:pb-2">{price}</p>
        <p className="text-sm md:text-sm text-justify pb-2">{description}</p>
        <ul className="list-disc pl-5 py-4">
          <li className="pb-3 text-sm ">Article : {nbArticle}</li>
          <li className='text-sm'>Pays/Région d'origine : {origin}</li>
        </ul>
        <p className="pb-4 text-sm md:text-sm">Disponibilité : {dispo}</p>
        <select className="w-full md:w-48 border border-black bg-gray-100 p-1 mb-5">
          <option value="title">Taille</option>
          {sizes.map((value, index) => <option key={index} value={value}>{value}</option>)}
        </select>
        <Button width={"full"} p={"sm"} className={""} title={" Validez le panier"} />
      </section>
    </div>
  );
}

export function ProductItem() {
  console.log(data.products[0].attributes.image, "URL")
  return (<ProductItemChildren
    src={data.products[0].attributes.image}
    type={"Rayban Seeker"}
    title={"Seeker 2 UNC White Solaris+"}
    description={"Inspirées par les lignes épurées des engins d'exploration spatiale et la pureté des sommets enneigés, les lunettes Seeker 2 UNC White Solaris+ transcendent le simple accessoire pour devenir un outil de perception augmentée. Leur monture, d’un blanc absolu et micro-brossé, captive la lumière pour révéler une texture presque minérale, tandis que leur design aérodynamique épouse les courbes du visage avec une légèreté désarmante."}
    price={"259,99 CHF"}
    nbArticle={"IM4135-001"}
    origin={"Chine"}
    disponibility={0}
  />)
}