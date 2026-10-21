import React, { useState } from 'react';
import Button from './secondaryComponents/UI/button.jsx';
import './index.css';

export function Checkout({ children, handleClick, data }) {

  const [page, setPage] = useState(1);
  const [forms, setForms] = useState({
    "datas": {
      "name": null,
      "lastname": null,
      "company": null,
      "adress": null,
      "details": null,
      "CPA": null,
      "City": null,
      "PhoneNumber": null
    }
  });

  const [freeDelivery, setFreeDelivery] = useState(false);
  const TVA = 8.1;
  const TVAPercent = TVA / 100;
  const subtotal = 20;
  const deliveryCosts = freeDelivery ? 0 : 8.22;
  const TOTAL = subtotal + deliveryCosts + (subtotal * TVAPercent);

  if (subtotal >= 50) {
    setFreeDelivery(true);
  }

  return (
    <div className='flex flex-col md:flex-row w-full min-h-screen overflow-x-hidden box-content '>
      <section className='flex items-center justify-center w-1/2 min-h-full pl-60'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-bold text-md'>Informations de contact</h1>
          <div className='flex flex-col pb-5 gap-2'>
            <input required type='mail' placeholder='Mail' className='w-auto h-auto border border-gray-400 text-gray-600 p-2 rounded-md' />
            <div className='flex flex-row gap-2 pl-1'>
              <input type='checkbox' className='' />
              <p>Je souhaite recevoir les newsletters</p>
            </div>
          </div>

          <h1 className='font-bold text-lg'>Informations de paiement</h1>
          <div className='flex flex-col flex-nowrap gap-4'>
            <div className='flex flex-row gap-4'>
              <input required type="text" placeholder='Nom' className='w-auto h-auto border border-gray-400 text-gray-600 p-2 rounded-md' handleChange={() => { }} />
              <input required type="text" placeholder='Prénom' className='w-auto h-auto border border-gray-400 text-gray-600 p-2 rounded-md' />
            </div>
            <input type="text" placeholder='Entreprise' className='w-auto h-auto border border-gray-400 text-gray-600 p-2 rounded-md' />
            <input required type="text" placeholder='Adresse' className='w-auto h-auto border border-gray-400 text-gray-600 p-2 rounded-md' />
            <input type="text" placeholder='Appartement, Etage,...' className='w-auto h-auto border border-gray-400 text-gray-600 p-2 rounded-md' />
            <div className='flex flex-row gap-4'>
              <input type="text" placeholder='CPA (1004, 1201...)' className='w-auto h-auto border border-gray-400 text-gray-600 p-2 rounded-md' handleChange={() => { }} />
              <input type="text" placeholder='Ville' className='w-auto h-auto border border-gray-400 text-gray-600 p-2 rounded-md' />
            </div>
            <input type="phone" placeholder='Numéro de téléphone' className='w-auto h-auto border border-gray-400 text-gray-600 p-2 rounded-md' required />
          </div>
        </div>
      </section>
      <section className='flex items-center justify-center w-1/2 min-h-full border-l border-gray-300 bg-white-smoke pr-60'>
        <div className="md:w-[80%] h-fit p-5 rounded-2xl ">
          <div className='flex flex-col gap-5'>
            <section className="mb-2">
              <h1 className="font-bold md:text-2xl">Détails de la commande</h1>
            </section>

            <section className="flex flex-col gap-5 md:my-4 pb-2 md:pb-0">
              {data.cart?.map((value) => {
                return (
                  <div key={value.id} className="flex justify-between items-center text-sm md:text-base">
                    <div className='flex flex-row items-center justify-center gap-4'>
                      <img src={value.attributes.image} className='w-15 rounded-md border-1'>
                      </img>
                      <h2 className="font-bold text-md">{value.attributes.articleName}</h2>
                    </div>
                    <h2>{value.attributes.price}</h2>
                  </div>
                );
              })}
            </section>
            <section className="flex flex-row justify-between font-bold pb-2 md:text-xl">
              <h2>Sous-total</h2>
              <h1>{subtotal} CHF</h1>
            </section>

            <section className="flex flex-row justify-between font-light md:text-lg text-sm">
              <h2>TVA ({data.tva} %)</h2>
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
          </div>
          <section className="pt-4">
            <Button width="full" p="sm" title={children} onClick={handleClick} />
          </section>
        </div>
      </section>
    </div>
  );
}