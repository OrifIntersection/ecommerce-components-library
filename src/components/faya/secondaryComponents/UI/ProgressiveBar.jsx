import { useState } from "react";
import clsx from "clsx";
import '../../index.css'

export default function ProgressiveBar({total, current, setCurrent, handleProgressiveBarPrev, handleProgressiveBarNext}) {

    // steps
    const Li = ({ className, nb }) => <li className={clsx('w-[50px] h-[50px] rounded-full bg-[#eee] flex items-center justify-center text-md transition-colors duration-300', current >= nb && 'bg-blue-components text-[#fff]', className)}><span className="number">{nb}</span></li>;

    return (<>
        {/*container*/}
        <div className="w-[90%] max-w-150 grid gap-[10px] flex">
            {/*progress-container*/}
            <div className="relative">
                {/*progress-bar*/}
                <div className="absolute w-full h-1 bg-[#eee] top-[50%] -translate-y-1/2 z-[-1]">
                    {/*progress*/}
                    <div id="progress" style={{ transform: `scaleX(${(current - 1) / (total - 1)})` }} className="w-full h-full bg-blue-components origin-left duration-300"></div>
                </div>

                <ol className="list-none flex justify-between transition-all duration-300 transform-none">
                    <Li className="active test" nb={1} />
                    <Li className="animate-[pulsate_0.3s_ease-in-out]" nb={2} />
                    <Li className="animate-[pulsate_0.3s_ease-in-out]" nb={3} />
                    <Li className="animate-[pulsate_0.3s_ease-in-out]" nb={4} />
                </ol>
            </div>
        </div>
    </>);
}