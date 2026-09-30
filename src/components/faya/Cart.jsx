import React, { useEffect, useState } from 'react';
import { TruckIcon, XMarkIcon } from '@heroicons/react/24/solid';

import DeliveryLogo from './assets/delivery-logo.jsx';
import Close from '../../../public/icons/close.jsx';
import data from './data/products.json';

import Button from './secondaryComponents/UI/button.jsx';


function Product({ index, USproductInCart, remove }) {
  const [defaultQuantitySelected, setDefaultQuantitySelected] = useState(null);

  let images = data.products[index]?.attributes?.image;
  let articleName = data.products[index]?.attributes?.articleName;
  let category = data.products[index]?.attributes?.category;
  let price = data.products[index]?.attributes?.price;
  let id = data.products[index]?.id

  let cartLength = USproductInCart.cart.length - 1;
  let hr = true;

  if (cartLength === index) {
    hr = false;
  }

  const handleChange = (e) => {
    e.preventDefault();
    setDefaultQuantitySelected(e.target.value);
  };

  return (
    <div className={`md:h-40 h-auto ${hr ? 'border-b-[1px] pb-4' : null}`}>
      <section className="flex flex-row items-center justify-center flex-nowrap lg:justify-start">
        <div className="md:w-40 w-20 pr-2">
          <img src={images} className="object-cover w-full h-full" alt="Image d'article" />
        </div>
        <div className="flex flex-col justify-center md:h-20 h-[80%] pl-5 md:w-[calc(100%-160px-40px)] w-[calc(100%-80px-80px)]">
          <section className="font-normal text-[14px] md:text-2xl">{id}</section>
          <section className="font-light text-xs md:text-xl">{category}</section>
          <section className="flex flex-row gap-3">
            <section className="font-bold text-xs md:text-lg">{price}</section>
            <select className="text-xs cursor-pointer" value={defaultQuantitySelected} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </section>
        </div>
        <div className="relative flex w-20 md:w-10 h-full left-[55px] md:left-[10px] md:top-[-20px] top-[0px] absolute pr-5">
          <XMarkIcon onClick={() => remove(id)} className="w-4 md:w-5 peer pb-15 cursor-pointer" />
          <div className="absolute flex align-center items-center w-40 h-auto text-xs p-2 right-0 top-8 max-md:hidden visible redAlert tooltip-hover">
            Supprimer mon article
          </div>
        </div>
      </section>
    </div>
  );
}

export function Cart({
  price = "200" }) {
  const [freeDelivery, setFreeDelivery] = useState(false);

  const [USproductInCart, setUSproductInCart] = useState({
    cart: ["RBX73LMNQA007", "DRB21MOKS002", "RBX55SOLAR005"]
  });

  let TVA = 5;
  let TVAPercent = TVA / 100;
  let subtotal = 200;
  let deliveryCosts = freeDelivery ? 0 : 20;
  let TOTAL = subtotal + deliveryCosts + (subtotal * (TVA / 100));

  useEffect(() => {
    if (subtotal >= 500) {
      setFreeDelivery(false);
    }
  }, [subtotal]);

  const remove = (idToRemove) => {
    console.log(idToRemove, "ID");
    setUSproductInCart((prev) => ({
      ...prev,
      cart: prev.cart.filter((itemId) => itemId !== idToRemove)
    }));
  };

  return (
    <>
      <div className="w-full h-full flex flex-col md:flex-row gap-10 box-content mz-20" >
        <div className="md:w-[70%] w-[100%] h-auto p-5 bg-[#FFFFFF] rounded-2xl">
          {freeDelivery ? (
            <h1 className="flex flex-row items-start md:items-center justify-start md:justify-center border border-green-border bg-green-box text-green-text md:text-s text-xl rounded-sm pl-3">
              Livraison offerte !
              <TruckIcon className="w-12 pl-5" str />
            </h1>
          ) : (
            <h1 className="flex flex-row items-start md:items-center justify-start md:justify-center border border-blue-border bg-blue-box text-blue-text text-xl md:text- rounded-sm pl-3">
              Montant de la livraison : <TruckIcon className="w-12 pl-5" />
            </h1>
          )}

          <section className="flex flex-row align-center justify-between">
            <h1 className="pt-2 font-bold text-xs md:text-xl">VOTRE PANIER</h1>
            <h2 className="pt-2 font-bold text-xs md:text-xl">{price} CHF</h2>
          </section>

          <div className="flex flex-col w-full h-auto gap-4 pt-8">
            {USproductInCart.cart.map((value, index) => (
              <Product key={index} index={index} id={value} USproductInCart={USproductInCart} setUSproductInCart={setUSproductInCart} remove={remove} />
            ))}
          </div>
        </div>

        <div className="md:w-[30%] w-full h-100 p-5">
          <section className="h-[15%]">
            <h1 className="font-bold md:text-2xl">
              Détails de la commande
            </h1>
          </section>

          <section className="h-auto flex flex-col gap-2 md:my-4 pb-4 md:pb-0">
            {USproductInCart.cart.map((value, index) => {
              const matchedProduct = data.products.find((product) => product.id === value);
              if (!matchedProduct) {
                return null
              } else {
                return (
                  <div key={index} className="flex justify-between items-center text-sm md:text-xl md:text-base">
                    <h2 className="font-bold text-md">{matchedProduct.attributes.articleName}</h2>
                    <h2 className="">{matchedProduct.attributes.price}</h2>
                  </div>
                );
              }
            })}
          </section>

          <section className="h-auto flex flex-row align-center justify-between font-bold pb-2 md:text-2xl">
            <h2 className="">Sous-total</h2>
            <h1>{subtotal} .-</h1>
          </section>

          <section className="h-auto flex flex-row align-center justify-between font-light md:text-lg text-sm">
            <h2>TVA (comprises dans le prix)</h2>
            <h2>{TVAPercent} % ({subtotal * (TVA / 100)} .-)</h2>
          </section>

          <section className="h-auto flex flex-row align-center justify-between border-b border-b-[1.5px] font-light md:text-lg text-sm">
            <h2>Frais de livraison</h2>
            <h2>{deliveryCosts} .-</h2>
          </section>

          <section className="h-auto flex flex-row align-center justify-between font-bold pt-2">
            <h2>TOTAL</h2>
            {TOTAL} .-
          </section>

          <section className="h-auto pt-10">
            <Button width="full" p="sm" className="" title="Payer" />
          </section>

        </div>
      </div>
    </>
  );
}