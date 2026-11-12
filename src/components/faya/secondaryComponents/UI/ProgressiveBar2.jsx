import ProgressiveBar from "./ProgressiveBar";
import clsx from "clsx";

export default function ProgressiveBar2() {
    // steps
    const li = ({ className, nb }) => <li className={clsx('w-[50px] rounded-md bg-[#eee] flex items-center justify-center text-md active:bg-coral active:text-[#fff]"', className)}><span className="number">{nb}</span></li>

    const step = document.getElementsByClassName('test');

    console.log("step",step)

    return (<>
        {/*container*/}
        <div className="w-[90%] max-w-150 grid gap-[50px[" >
            {/*progress-container*/}
            <div className="relative">
                {/*progress-bar*/}
                <div className="absolute w-full h-1 bg-[#eee] top-[50%] -translate-y-1/2 z-[-1]">
                    {/*progress*/}
                    <div id="progress" className="w-full h-full bg-red-400 scale-x-0 origin-left duration-300">
                    </div>

                </div>

                <ol className="list-none flex justify-between transition-all duration-300 transform-none">
                    <li id="step" className="active test" nb={1} />
                    <li id="" className="animate-[pulsate_0.3s_ease-in-out]" nb={2} />
                    <li className="animate-[pulsate_0.3s_ease-in-out]" nb={3}/>
                    <li className="animate-[pulsate_0.3s_ease-in-out]" nb={4}/>
                    <li className="animate-[pulsate_0.3s_ease-in-out]" nb={5}/>
                </ol>
            </div >

            {/*nav-buttons*/}
            <div className="flex items-center justify-center gap-5">
                <button className="cursor-pointer border-none rounded-md bg-red-400 p-2 text-[#fff] text-xs disabled:bg-[#F08080] disabled:cursor-not-allowed" disabled>Prev</button>
                <button className="cursor-pointer">Next</button>
            </div>

        </div >
    </>)
} 