import { clsx } from "clsx";
import { useState } from "react";
// import '../index.css';

export default function ProgressiveBar() {
    const [step, setStep] = useState(1);
    let wBar = 'w-60'
    let hBar = 'h-2'
    let circleValue = '10'
    let circleProp = 'w-' + circleValue + ' h-' + circleValue;
    // let className1 = 'w-20';
    // let className2 = 'w-50';

    const Bar = ({ id }) => <div id={'bar' + id} className={clsx('h-3 border border-blue-components bg-blue-components origin-left transition-transform duration-300 ease-in-out active:scale-x-110', wBar, hBar)}></div >
    const Circle = ({ id }) => <div id={'circle' + id} className={clsx('bg-blue-components rounded-3xl', circleProp)}></div>;
    // const Informations = ({ children, className }) => <div className={clsx('text-center', className)}>{children}</div>;

    return (<>
        <div className='flex min-h-20 max-h-30 w-full items-center justify-center'>
            <Circle id={1} />
            <Bar id={1} />
            <Circle id={2} />
            <Bar id={2} />
            <Circle id={3} />
            <Bar id={3} />
            <Circle id={4} />
        </div>
        {/* <div className='flex min-h-auto max-h-30 w-full items-center justify-center'>
        <Informations className={className1} >Informations</Informations>
        <Informations className={className2} />
        <Informations className={className1} >Paiement</Informations>
        <Informations className={className2} />
        <Informations className={className1} >Confirmation</Informations>
        <Informations className={className2} />
        <Informations className={className1} >Quittance</Informations>
      </div> */}
    </>)
}