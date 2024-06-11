import "./BlueBtn.css"
export const BlueBtn =({children}:any)=>{
    //TODO поигратья с плавностью кнопок
    return (
        <button className='blue-btn'>
            {children}
        </button>

    )
}