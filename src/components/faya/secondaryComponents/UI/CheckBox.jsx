export default function Checkbox({ children, inputClassName, onChange, checked }) {
    return (<div className='flex flex-row items-center gap-2 pl-2'>
        {checked ?
            <input type='checkbox' checked className={inputClassName} onChange={onChange} />
            :
            <input type='checkbox' className={inputClassName} onChange={onChange} />
        }
        <p>{children}</p>
    </div>)
}