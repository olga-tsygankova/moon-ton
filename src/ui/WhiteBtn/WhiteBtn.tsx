import "./WhiteBtn.css"
export const WhiteBtn =({children}:any)=>{
    //TODO поигратья с плавностью кнопок
    return (
        <button className='white-btn'>
            {children}
        </button>

    )
}