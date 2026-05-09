import { IoMdCloseCircleOutline } from "react-icons/io";
import '../css/Modal.css'
function Modal({ isOpen, onClose ,component }){
    return (
        <div >
            {isOpen && (
                <div className="modal-overlay">
                        <div className="modal-content">
                            <IoMdCloseCircleOutline className="close-button" onClick={onClose}/>
                        {/*<img src={close} className="close-button" onClick={onClose}/>*/}
                            {component}
                        </div>
                </div>
            )}
        </div>)
}
export default Modal;