import "./FormBtn.css"
export const FormBtn =({children}:any)=>{
    //TODO поигратья с плавностью кнопок
    return (
        <button className='form-btn'>
            {children}
        </button>

    )
}