import React, { useContext, useEffect, useState } from 'react';
import Button from './secondaryComponents/UI/button.jsx';
import Checkbox from './secondaryComponents/UI/CheckBox.jsx';
import './index.css';

function Contact({ forms, handleChange, category }) {
  const modificationFormulaire = (e) => {
    handleChange(e, category);
  };

  useEffect(() => {
    console.log(forms, "FORMS");
  }, [forms])

  return (<>
    <h1 className='font-bold text-md p-2'>Informations de contact</h1>
    <div className='flex flex-col pb-5 gap-2 w-[100%]'>
      <div className='w-[100%] p-2'>
        <input required type='mail' placeholder='Mail' value={forms[category].mail} name="mail" className='w-[100%] h-10 border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <Checkbox children={'Je souhaite recevoir les newsletters'} inputClassName={null} />
    </div>
  </>)
}

function UserForm({ handleChange, forms, title, category }) {
  const modificationFormulaire = (e) => {
    handleChange(e, category);
  };

  return (<>
    <h1 className='font-bold text-lg p-2'> {title} </h1>
    <div className='flex flex-row flex-wrap w-[100%] pb-10'>
      <div className='w-[50%] p-2'>
        <input required type="text" placeholder='Nom' value={forms[category].lastname} name={"lastname"} className='w-[100%] h-10 border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-[50%] p-2'>
        <input required type="text" placeholder='Prénom' value={forms[category].firstname} name={"firstname"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-[100%] p-2'>
        <input type="text" placeholder='Entreprise' value={forms[category].entreprise} name={"company"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-[100%] p-2'>
        <input required type="text" placeholder='Adresse' value={forms[category].adress} name={"adress"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-[100%] p-2'>
        <input type="text" placeholder='Appartement, Etage,...' value={forms[category].details} name={"details"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-[50%] p-2'>
        <input required type="text" placeholder='CPA (1004, 1201...)' value={forms[category].CPA} name={"CPA"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-[50%] p-2'>
        <input required type="text" placeholder='Ville' value={forms[category].city} name={"city"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-[100%] p-2'>
        <input required type="phone" placeholder='Numéro de téléphone' value={forms[category].phoneNumber} data-cat={category} name={"phoneNumber"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
    </div>
  </>);
}

export function Checkout({ children, handleClick, data }) {
  const [page, setPage] = useState(1);
  const [checkboxIsActive, setCheckboxIsActive] = useState(false);

  const [forms, setForms] = useState({
    "contact": {
      "mail": ''
    },
    "payment": {
      "lastname": '',
      "firstname": '',
      "company": '',
      "adress": '',
      "details": '',
      "CPA": '',
      "city": '',
      "phoneNumber": ''
    },
    "facturation": {
      "lastname": '',
      "firstname": '',
      "company": '',
      "adress": '',
      "details": '',
      "CPA": '',
      "city": '',
      "phoneNumber": ''
    }
  });

  const [freeDelivery, setFreeDelivery] = useState(false);
  const TVA = 8.1;
  const TVAPercent = TVA / 100;
  const subtotal = 20;
  const deliveryCosts = freeDelivery ? 0 : 8.22;
  const TOTAL = subtotal + deliveryCosts + (subtotal * TVAPercent);

  const handleChange = (e, category) => {
    const newForms = ({
      ...forms, [category]: {
        ...forms[category],
        [e.target.name]: e.target.value,
      },
    });
    setForms(newForms);
  };

  if (subtotal >= 50) {
    setFreeDelivery(true);
  };

  return (
    <div className='flex flex-col md:flex-row w-full min-h-screen overflow-x-hidden box-content '>
      <section className='flex items-center justify-center w-1/2 min-h-full'>
        <div className='max-w-200 p-5 rounded-2xl"'>
          <Contact forms={forms} handleChange={handleChange} category={'contact'} />
          <UserForm forms={forms} handleChange={handleChange} category={'payment'} title={'Informations de paiement'} />
          <Checkbox children={'Je souhaite que l’adresse de facturation soit la même que celle de livraison'} onChange={() => setCheckboxIsActive(value => !value)} />
          {checkboxIsActive ? <UserForm forms={forms} handleChange={handleChange} category={'facturation'} title={'Informations de facturation'} /> : null}
        </div>
      </section>
      <section className='flex items-center justify-center w-1/2 min-h-full border-l border-gray-300 bg-white-smoke'>
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