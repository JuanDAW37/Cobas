
interface Input {
    type:string,
    name:string,
    formData:string,
    method:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    placeholder:string,
    style:string    
}

export const Input = ({type, name, formData, method, placeholder, style}:Input) => {
    return (
        <input
                type={type}
                name={name}
                value={formData}
                onChange={method}
                placeholder={placeholder}
                className={style}                
            />
    )
}
