import React, { useState } from 'react';

import DeliveryLogo from './assets/delivery-logo.jsx'
// import Lunettes from './assets/lunettes.png'
import Close from '../../../public/icons/close.jsx';

import data from './data/products.json'

//  ✓ Placer les produits dans le composant pour les voir s'afficher

function Product({ index }) {
  const [defaultQuantitySelected, setDefaultQuantitySelected] = useState(null)

  let images = data.products[index].attributes.image;
  let articleName = data.products[index].attributes.articleName;
  let category = data.products[index].attributes.category;
  let price = data.products[index].attributes.price;

  const handleChange = (e) => {
    e.preventDefault();
    setDefaultQuantitySelected(e.target.value)
    console.log("OK", e)
    return (<>

    </>)
  };

  return (
    <div className='border border-black flex flex-row items-center h-40'>
      <div className='w-40 pr-2'>
        <img src={images} />
      </div>
      <div className='flex flex-col justify-center h-[80%] w-100 pl-5 w-[calc(90%-120px)]'>
        <section className='font-bold text-2xl'>{articleName}</section>
        <section className='font-bold text-xl'>{category}</section>
        <section className='flex flex-row gap-3'>W
          <section className='font-bold text-s'>{price}</section>
          <select value={defaultQuantitySelected} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </section>
      </div>
      <div className="relative flex w-[10%] h-full pb-28 pl-10">
        <Close className="w-6 peer" />
        <div className="absolute w-80 h-20 bg-red-400 text-red-600 top-10 left-10 invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-opacity duration-200 text-xs ">
          Supprimer mon article
        </div>
      </div>
    </div>)
}

export function Cart({
  price = "200",
  productInCart = {
    cart: ["RBX73LMNQA007", "DRB21MOKS002", "RBX55SOLAR005"]
  },
}) {
  const [freeDelivery, setFreeDelivery] = useState(true);

  return (
    <>
      <div className='w-full h-full flex flex-row gap-10'>
        <div className='w-[60%] h-auto border border-black p-5'>

          {freeDelivery ?
            <h1 className=' flex flex-row items-start justify-start border border-green-border bg-green-box text-green-text text-xl pl-3'> Livraison offerte ! <DeliveryLogo className="" />
              {/* <img className="w-11 pl-3 pt-1" src={DeliveryLogo} /> */}
            </h1>
            : <h1 className=' flex flex-row items-center justify-start border border-red bg-red-box text-red text-xl pl-3'> Montant de la livraison : <DeliveryLogo className="" /> </h1>
          }

          <section className='flex flex-row align-center justify-between'>
            <h1 className='pt-2 text-l'>
              VOTRE PANIER
            </h1>
            <h2 className="pt-2 text-xl">{price} CHF</h2>
          </section>

          <div className="flex flex-col w-full h-full gap-4 pt-2">
            {productInCart.cart.map((value, index) => <Product key={index} index={index} id={value} productInCart={productInCart} />)}
          </div>

        </div>
        <div className='w-[40%] border border-black p-5'>
          Détails de la commande
        </div>
      </div>

    </>
  );
}     