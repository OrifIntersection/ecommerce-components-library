import { clsx } from "clsx";
// To copy paste :

// const widths = {
//     auto: "w-auto",
//     full: "w-full",
//     sm: "w-24",
//     md: "w-40",
//     lg: "w-64",
//     xl: "w-96",
// };

// const paddings = {
//     none: "p-0",
//     xs: "p-1",
//     sm: "p-2",
//     md: "p-3",
//     lg: "p-4",
//     xl: "p-6",
// };

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

export default function Button({ width, p, className, title }) {
    return (<button className={clsx("bg-[#3458c3] border border-[#5A77CC] active:bg-[#1c3581] text-white rounded transition-colors", widths[width], paddings[p], className)} > {title} </button>)};