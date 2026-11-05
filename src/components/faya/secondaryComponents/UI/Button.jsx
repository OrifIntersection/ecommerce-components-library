import { clsx } from "clsx";
import '../../index.css'
const widths = {
    auto: "w-auto",
    full: "w-full",
    sm: "w-24",
    md: "w-40",
    lg: "w-64",
    xl: "w-96",
};

const paddings = {
    none: "p-0",
    xs: "p-1",
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
    xl: "p-6",
};

const rounded = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
};

export default function Button({ width, p, className, title, radius = "md" }) {
    const radiusClass = rounded[radius] || rounded.md;
    return (
        <button className={clsx("border border-[#5A77CC] bg-[#3458c3] hover:bg-[#4770d8] active:bg-[#29469f] text-white transition-colors", radiusClass, widths[width], paddings[p], className)}>
            {title}
        </button>
    );
}