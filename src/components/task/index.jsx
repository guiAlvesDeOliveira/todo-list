import './style.css'
import { IoIosRadioButtonOff, IoIosTrash } from "react-icons/io";

export function Task({desc}){
    return (
        <div className="containerTask">
            <button className="buttonDone">
                <IoIosRadioButtonOff/>
            </button>
            <strong>{desc}</strong>
            <button className='buttonDelete'>
                <IoIosTrash/>
            </button> 
        </div>
    )
}