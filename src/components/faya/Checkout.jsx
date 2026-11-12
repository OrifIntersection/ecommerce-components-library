import { useEffect, useState } from 'react';

import Button from './secondaryComponents/UI/Button.jsx';
import Checkbox from './secondaryComponents/UI/CheckBox.jsx';
import ProgressiveBar from './secondaryComponents/UI/ProgressiveBar.jsx';

import AmericanExpress from '/public/logos/AmericanExpress.jsx';
import Mastercard from '../../../public/logos/Mastercard.jsx';
import Visa from '../../../public/logos/Visa.jsx';

import './index.css';



/// ─────────────────────────
// Formulaires
// ──────────────────────────
function ContactForm({ forms, handleForms, category, handleChange, checked }) {
  const modificationFormulaire = (e) => {
    handleForms(e, category);
  };

  return (<>
    <h1 className='font-bold text-lg p-2'>Informations de contact</h1>
    <div className='flex flex-col pb-5 gap-2 w-[100%]'>
      <div className='w-[100%] p-2'>
        <input required type='mail' placeholder='Mail' value={forms[category].mail} name="mail" className='w-[100%] h-10 border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <Checkbox children={'Je souhaite recevoir les newsletters'} inputClassName={null} onChange={handleChange} checked={checked} />
    </div>
  </>)
};

function UserForm({ handleForms, forms, title, category }) {
  const modificationFormulaire = (e) => {
    handleForms(e, category);
  };

  return (<>
    <h1 className='font-bold text-lg p-2'> {title} </h1>
    <div className='flex flex-row flex-wrap w-[100%] pb-10'>
      <div className='w-1/2 p-2'>
        <input required type="text" placeholder='Nom' value={forms[category].lastname} name={"lastname"} className='w-[100%] h-10 border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-1/2 p-2'>
        <input required type="text" placeholder='Prénom' value={forms[category].firstname} name={"firstname"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-full p-2'>
        <input type="text" placeholder='Entreprise' value={forms[category].entreprise} name={"company"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-full p-2'>
        <input required type="text" placeholder='Adresse' value={forms[category].adress} name={"adress"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-full p-2'>
        <input type="text" placeholder='Appartement, Etage,... (facultatif)' value={forms[category].details} name={"details"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-1/2 p-2'>
        <input required type="text" placeholder='CPA (1004, 1201...)' value={forms[category].CPA} name={"CPA"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-1/2 p-2'>
        <input required type="text" placeholder='Ville' value={forms[category].city} name={"city"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
      <div className='w-full p-2'>
        <input required type="phone" placeholder='Numéro de téléphone' value={forms[category].phonenumber} data-cat={category} name={"phonenumber"} className='w-[100%] h-auto border border-gray-400 text-gray-600 p-2 rounded-md' onChange={modificationFormulaire} />
      </div>
    </div>
  </>);
};

function CardForm({ forms, handleCardForms }) {
  return (<>
    <h1 className='font-bold text-lg p-2'>Informations de carte </h1>
    <h2 className='font-sans text-xs text-gray-400 p-2 pt-0'>Saisissez le numéro de carte à 16 chiffres sur la carte</h2>
    <div className='flex flex-col gap-4'>
      {/* Numéro de carte */}
      <section className='w-full p-2'>
        <div className="relative w-full max-w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className="w-5^6 h-6 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>
          <input required type="text" value={forms.code} name={"cardnumber"} placeholder='         1234  -  5678  -  9012  -  3456' className='w-[100%] h-12 border border-gray-400 text-gray-600 p-2 rounded-md' onChange={handleCardForms} />
        </div>
      </section>
      <section className='w-full flex flex-row items-center justify-between'>
        <div className='w-1/2 flex-col items-start justify-center'>
          <h1 className='font-bold text-lg p-2'>CVC / CVV </h1>
          <h2 className='font-sans text-xs text-gray-400 p-2 pt-0'>Entrez les 3 ou 4 chiffres sur la carte</h2>

        </div>
        <div className='w-1/2 p-2'>
          <input required type="text" value={forms.cvnumber} name={"cvnumber"} placeholder=' 1234 ' className='w-[100%] h-12  border border-gray-400 text-gray-600 p-2 rounded-md' onChange={handleCardForms} />
        </div>
      </section>

      {/* Date d'expiration */}
      <section className='w-full flex flex-row items-center justify-between'>
        <div className='w-1/2 flex-col items-start justify-center'>
          <h1 className='font-bold text-lg p-2'>Date d'expiration</h1>
          <h2 className='font-sans text-xs text-gray-400 p-2 pt-0'>Entrez la date d'éxpiration</h2>
        </div>
        <div className='w-1/2 p-2 flex flex-row gap-4 items-center justify-center'>
          <div className="w-1/2">
            <input required type="text" value={forms.expirationdate.first} name={"expirationdate.first"} placeholder=' 12 ' className='w-[100%] h-12 border border-gray-400 text-gray-600 p-2 rounded-md' onChange={handleCardForms} />
          </div>
          <h1 className='font-sans text-3xl'>/</h1>
          <div className="w-1/2">
            <input required type="text" value={forms.expirationdate.second} name={"expirationdate.second"} placeholder=' 11 ' className='w-[100%] h-12 border border-gray-400 text-gray-600 p-2 rounded-md' onChange={handleCardForms} />
          </div>
        </div>
      </section>

      {/* Proprétaire de la carte */}
      <section className='w-full flex flex-row items-center justify-between'>
        <div className='w-1/2 flex-col items-start justify-center'>
          <h1 className='font-bold text-lg p-2'>Propriétaire de la carte</h1>
          <h2 className='font-sans text-xs text-gray-400 p-2 pt-0'>Saisissez le nom du propriétaire de la carte</h2>

        </div>
        <div className='w-1/2 p-2'>
          <div className='w-full '>
            <input required type="text" value={forms.cardholder} name={"cardholder"} placeholder=' John Dhoe ' className='w-[100%] h-12 border border-gray-400 text-gray-600 p-2 rounded-md' onChange={handleCardForms} />
          </div>
        </div>
      </section>
    </div>
  </>)
};



// ─────────────────────────
// Composants
// ──────────────────────────

function PaymentIcons({ width }) {
  return (<div className='flex flex-row gap-6 h-auto'>
    <Visa width={width} />
    <Mastercard width={width} />
    <AmericanExpress width={width} />
  </div>)
};

function CertificationArea({ }) {
  return (<div className='flex flex-col w-full max-h-100 h-20 border p-'>
    <div className="flex flex-row w-full h-full gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
      <p>
        Nos paiements sont sécurisés à 100%
      </p>
    </div>
    <div className="flex flex-row w-full h-full gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
      </svg>
      <p>
        Satisfaction garantie
      </p>
    </div>
    <div className="flex flex-row w-full h-full gap-2">
      <p>
        Satisfaction garantie
      </p>
    </div>
  </div>)
};



// ─────────────────────────
// Etapes (pages)
// ──────────────────────────
function Step1({ forms, setForms }) {
  const [isCheckboxActiveNewsletters, setIsCheckboxActiveNewsletters] = useState(true);
  const [isCheckboxActiveFacturation, setIsCheckboxActiveFacturation] = useState(true);

  // Mettre à jour les données
  const handleUserForms = (e, category) => {
    const newForms = ({
      ...forms, [category]: {
        ...forms[category],
        [e.target.name]: e.target.value,
      },
    });
    setForms(newForms);
    console.log("FORMS", forms);
  };

  // Checkbox de newsletters
  const handleCheckbox1 = () => {
    setIsCheckboxActiveNewsletters(value => !value);
    const newForms = ({
      ...forms, ["contact"]: {
        ...forms["contact"],
        "checked": isCheckboxActiveNewsletters,
      }
    });
    setForms(newForms);
    console.log(forms);
  };

  // Checkbox de facturation
  const handleCheckbox2 = () => {
    setIsCheckboxActiveFacturation(value => !value);
    const newForms = ({
      ...forms, ["facturation"]: {
        ...forms["facturation"],
        "checked": isCheckboxActiveFacturation,
      }
    });
    setForms(newForms);
    console.log(forms);
  };

  return (
    <div className='self-start w-200 p-5 pt-20 rounded-2xl mt-15'>
      <ContactForm forms={forms} handleForms={handleUserForms} category={'contact'} handleChange={handleCheckbox1} checked={isCheckboxActiveNewsletters} />
      <UserForm forms={forms} handleForms={handleUserForms} category={'payment'} title={'Informations de paiement'} />
      <Checkbox children={'Je souhaite que l’adresse de facturation soit la même que celle de livraison'} onChange={handleCheckbox2} checked={isCheckboxActiveFacturation} />
      {isCheckboxActiveFacturation ? null : <>
        <UserForm forms={forms} handleForms={handleUserForms} category={'facturation'} title={'Informations de facturation'} />
      </>}
    </div>
  );
};


function Step2({ forms, setForms }) {

  const handleCardForms = (e, category) => {
    const newForms = ({
      ...forms, [category]: {
        ...forms[category],
        [e.target.name]: e.target.value,
      },
    });

    setForms(newForms);
    console.log("FORMS", forms);
  }


  return (
    <div className='self-start w-200 p-2 pt-20 rounded-2xl mt-15'>
      <CardForm handleCardForms={handleCardForms} forms={forms} setForms={setForms} />
      <section className='pt-4 p-2'>
        <PaymentIcons width="80px" />
      </section>
      <h2 className='pl-2 text-xs'><i>*Vos informations ne seront pas utilisée à votre encontre. <a className="text-blue-800 underline" href="https://google.com">Lire notre politique de confidentialité</a></i></h2>
      <Button />
    </div>
  )
};

function Step3({ forms, setForms, data, }) {
  return (<div className='w-1/2'>

  </div>
  )
};

export function Checkout({ handleClick, data }) {
  // Step actuel
  const [step, setStep] = useState(2);

  // Barre progressive
  const [current, setCurrent] = useState(1);
  const total = 4;
  const [children, setChildren] = useState('Suivant');

  // Gestion du label du bouton
  useEffect(() => {
    if (step === total - 1) {
      setChildren('Payer');
    }
  }, [step])

  // Données à envoyer
  const [userForms, setUserForms] = useState({
    "contact": {
      "checked": true,
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
      "phonenumber": ''
    },
    "facturation": {
      "checked": true,
      "lastname": '',
      "firstname": '',
      "company": '',
      "adress": '',
      "details": '',
      "CPA": '',
      "city": '',
      "phonenumber": ''
    }
  });

  const [cardForms, setCardForms] = useState({
    "code": '',
    "cvnumber": '',
    "expirationdate": {
      "first": '',
      "second": ''
    },
    "cardholder": ''
  });

  // Fonctions de barre progressive
  const handleProgressiveBarPrev = () => {
    setCurrent((c) => Math.max(1, c - 1))
    setStep(step - 1);

  };
  const handleProgressiveBarNext = () => {
    setCurrent((c) => Math.min(total, c + 1));
    setStep(step + 1);
  };

  // Selection de la page
  const Display = () => {
    const renderStep = () => {
      switch (step) {
        case 1:
          return <Step1 forms={userForms} setForms={setUserForms} data={data} children={children} handleProgressiveBarNext={handleProgressiveBarNext} current={current} total={total} />;
        case 2:
          return <Step2 forms={cardForms} setForms={setCardForms} data={data} cardForms={cardForms} setCardForms={setCardForms} />;
        default:
          return null;
      }
    };

    return (
      // key force React à recréer le DOM à chaque changement de step => Relance l'animation
      <section key={step} className="animate-fade-in flex items-center justify-center w-1/2 min-h-full">
        {renderStep()}
      </section>
    );
  };

  // Facturation
  const [freeDelivery, setFreeDelivery] = useState(false);
  const TVA = 0;
  const TVAPercent = TVA / 100;
  const subtotal = 20;
  const deliveryCosts = freeDelivery ? 0 : 8.22;
  const TOTAL = subtotal + deliveryCosts + (subtotal * TVAPercent);
  if (subtotal >= 50) {
    setFreeDelivery(true);
  };

  return (
    <div className='flex flex-col items-center min-h-[100%] h-auto w-full min-h-screen overflow-x-hidden box-content '>
      <div className='absolute flex flex-col justify-center items-center w-200 h-auto bg-gray-50/100 z-2 mt-5 px-15 py-2 rounded-full shadow-xl'>
        <ProgressiveBar current={current} setCurrent={setCurrent} total={total} handleProgressiveBarPrev={handleProgressiveBarPrev} handleProgressiveBarNext={handleProgressiveBarNext} />
      </div>
      <div className='flex flex-col md:flex-row w-full min-h-screen overflow-x-hidden box-content '>
        <Display />
        <section className='flex items-center justify-center w-1/2 min-h-full border-l border-gray-300 bg-white-smoke '>
          {/* self-start */}
          <div className="self-start md:w-[80%] h-fit pt-20 p-5 rounded-2xl mt-15">
            <div className='flex flex-col gap-3'>
              <section className="mb-2">
                <h1 className="font-bold md:text-2xl">Détails de la commande</h1>
              </section>

              <section className="flex flex-col gap-5 md:my-4 pb-4 md:pb-0">
                {data.cart?.map((value) => {
                  return (
                    <div key={value.id} className="flex justify-between items-center text-sm md:text-base">
                      <div className='flex flex-row items-center justify-center gap-4'>
                        <img src={value.attributes.image} className='w-15 rounded-md border-1'>
                        </img>
                        <h2 className="font-bold text-md">{value.attributes.articleName}</h2>
                      </div>
                      <div>
                        <h2>{value.attributes.price}</h2>
                        <h3>{value.attributes.quantity}</h3>
                      </div>
                    </div>
                  );
                })}
              </section>

              <section className="flex flex-row justify-between font-bold  md:text-xl">
                <h2>Sous-total</h2>
                <h1>{subtotal} CHF</h1>
              </section>

              <section className="flex flex-row justify-between font-light md:text-lg text-sm">
                <h2>Frais de livraison</h2>
                <h2>{freeDelivery ? " aucun" : deliveryCosts + " CHF"}</h2>
              </section>
              <hr />
              <section className="flex flex-row justify-between font-bold text-md md:text-2xl ">
                <h2>TOTAL</h2>
                <span>{TOTAL} CHF</span>
              </section>
            </div>
            <section className="pt-4">
              <Button width="full" p="sm" title={children} onClick={handleProgressiveBarNext} disabled={current === total} />
              {/* {current === 1} */}
            </section>
            <section className='pt-4'>
              <CertificationArea width="80px" />
            </section>
            <h2><i>*Vos informations ne seront pas utilisée à votre encontre</i></h2>
          </div>
        </section>
      </div>
    </div>
  );
}