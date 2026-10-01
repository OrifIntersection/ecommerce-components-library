import React, { useEffect, useState } from 'react';
import { TruckIcon, XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import data from './data/products.json';
import Button from './secondaryComponents/UI/button.jsx';

function Product({ id, index, USproductInCart, remove }) {
  const [quantity, setQuantity] = useState("1");

  const productData = data.products.find((product) => product.id === id);

  if (!productData) return null;

  const { image, category, price, articleName } = productData.attributes;

  return (
    <div className={`md:h-40 h-auto ${index === (USproductInCart.cart.length - 1) ? '' : 'border-b-[1px] pb-4'}`}>
      <section className="flex flex-row items-center justify-center flex-nowrap lg:justify-start">
        <div className="md:w-40 w-20 pr-2">
          <img src={image} className="object-cover w-full h-full" alt="Article" />
        </div>
        <div className="flex flex-col justify-center md:h-20 h-[80%] pl-5 md:w-[calc(100%-160px-40px)] w-[calc(100%-80px-80px)]">
          <section className="font-normal text-[14px] md:text-2xl">{articleName}</section>
          <section className="font-light text-xs md:text-xl">{category}</section>
          <section className="flex flex-row gap-3">
            <section className="font-bold text-xs md:text-lg">{price}</section>
            <section className='h-full w-20 flex items-center justify-center gap-2'>
              <PlusIcon width="12px" />
              <h2 className='text-sm leading-none'>{quantity}</h2>
              <MinusIcon width="12px" />
            </section>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg> */}
          </section>
        </div>
        <div className="relative flex w-20 md:w-10 h-full left-[55px] top-[-30px] md:left-[10px] md:top-[-60px] absolute pr-5">
          <XMarkIcon onClick={() => remove(id)} className="w-4 md:w-5 cursor-pointer" />
          <div className="absolute flex align-center items-center w-40 h-auto text-xs p-2 right-0 top-8 max-md:hidden visible redAlert tooltip-hover">
            Supprimer mon article
          </div>
        </div>
      </section>
    </div>
  );
}

export function Cart({ price = "200" }) {
  const [freeDelivery, setFreeDelivery] = useState(false);
  const [USproductInCart, setUSproductInCart] = useState({
    cart: ["RBX73LMNQA007", "DRB21MOKS002", "RBX55SOLAR005"]
  });

  const TVA = 8.1;
  const TVAPercent = TVA / 100;
  const subtotal = 20;
  const deliveryCosts = freeDelivery ? 0 : 20;
  const TOTAL = subtotal + deliveryCosts + (subtotal * TVAPercent);

  if (subtotal >= 50) {
    setFreeDelivery(true);
  }

  const remove = (idToRemove) => {
    setUSproductInCart((prev) => ({
      ...prev,
      cart: prev.cart.filter((itemId) => itemId !== idToRemove)
    }));
  };

  return (
    <div className="w-full h-full flex gap-10 bg-[#FFFFF] box-content md:my-20 font-sans">
      <section className='w-full h-full flex flex-col align-center justify-center md:flex-row gap-10 mx-5 md:mx-140'>
        <div className="md:w-[60%] w-[100%] h-fit p-5 rounded-2xl shadow-xl/20 md:shadow-md/30">
          {freeDelivery ? (
            <h1 className="flex w-full flex-row items-center justify-center md:justify-start border-3 ring-2 ring-blue-500 md:ring-4 md:ring-blue-800 bg-blue-box text-blue-text text-md md:text-xl rounded-md pl-3">
              Livraison offerte ! <TruckIcon className="w-12 pl-5 md:pl-2 md:w-10" />
            </h1>
          ) : (
            <h1 className="flex w-full flex-row items-center justify-center md:justify-start border-3 ring-2 ring-blue-500 md:ring-4 md:ring-blue-800 bg-blue-box text-blue-text text-md md:text-xl rounded-md pl-3">
              Montant de la livraison : <TruckIcon className="w-12 pl-5" />
            </h1>
          )}

          <section className="flex flex-row align-center justify-between pt-4">
            <h1 className="pt-2 font-bold text-xs md:text-xl">VOTRE PANIER</h1>
            <h2 className="pt-2 font-bold text-xs md:text-xl">{price} CHF</h2>
          </section>

          <div className="flex flex-col w-full h-auto gap-4 pt-2">
            {USproductInCart?.cart.map((id, index) => (
              <Product id={id} key={id} index={index} USproductInCart={USproductInCart} remove={remove} />
            ))}
          </div>
        </div>

        <div className="md:w-[40%] h-fit p-5 rounded-2xl shadow-xl/20 md:shadow-md/30">
          <section className="mb-4">
            <h1 className="font-bold md:text-2xl">Détails de la commande</h1>
          </section>

          <section className="flex flex-col gap-2 md:my-4 pb-4 md:pb-0">
            {USproductInCart?.cart.map((id) => {
              const matchedProduct = data.products.find((product) => product.id === id);
              if (!matchedProduct) return null;
              return (
                <div key={id} className="flex justify-between items-center text-sm md:text-base">
                  <h2 className="font-bold text-md">{matchedProduct.attributes.articleName}</h2>
                  <h2>{matchedProduct.attributes.price}</h2>
                </div>
              );
            })}
          </section>

          <section className="flex flex-row justify-between font-bold pb-2 md:text-xl">
            <h2>Sous-total</h2>
            <h1>{subtotal} CHF</h1>
          </section>

          <section className="flex flex-row justify-between font-light md:text-lg text-sm">
            <h2>TVA ({TVA}%)</h2>
            <h2>({subtotal * TVAPercent} CHF)</h2>
          </section>

          <section className="flex flex-row justify-between border-b-[1.5px] font-light pb-1 md:text-lg text-sm">
            <h2>Frais de livraison</h2>
            <h2>{freeDelivery ? " aucun" : deliveryCosts + " CHF"}</h2>
          </section>

          <section className="flex flex-row justify-between font-bold text-md md:text-2xl pt-2">
            <h2>TOTAL</h2>
            <span>{TOTAL} CHF</span>
          </section>

          <section className="pt-4">
            <Button width="full" p="sm" title="Payer" radius="" />
          </section>
        </div>
      </section>
    </div>
  );
}