import close from '../image/x-lg.svg'
import '../css/Modal.css'
function Modal({ isOpen, onClose ,component }){
    return (
        <div >
            {isOpen && (
                <div className="modal-overlay">
                        <div className="modal-content">
                        <img src={close} className="close-button" onClick={onClose}/>
                            {component}
                        </div>
                </div>
            )}
        </div>)
}
export default Modal;