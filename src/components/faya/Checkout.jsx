import React, { useState } from 'react';
import './index.css';

export function Checkout() {
  const [page, setPage] = useState(1);

  return (
    <div className='flex flex-row w-full min-h-screen overflow-x-hidden'>
      <section className='flex items-center justify-center w-1/2 min-h-full'>
        Paiement
      </section>
      <section className='flex items-center justify-center w-1/2 min-h-full border-l bg-grey-background'>
        Details
      </section>
    </div>
  );
}