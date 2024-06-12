import "./FormBtn.css"
import { Link } from 'react-scroll';
export const FormBtn =({children, handleBridgeClick}:any)=>{
    //TODO поигратья с плавностью кнопок
    return (
        <button className='form-btn' onClick={handleBridgeClick}>
            <Link to="/form-page">
            </Link>
          {children}
        </button>

    )
}