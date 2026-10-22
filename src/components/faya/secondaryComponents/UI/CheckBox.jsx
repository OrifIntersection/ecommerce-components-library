export default function Checkbox({ children, inputClassName, onChange }) {
    return (<div className='flex flex-row items-center gap-2 pl-2'>
        <input type='checkbox' defaultclassName={inputClassName} onChange={onChange}/>
        <p>{children}</p>
    </div>)
}