import React from 'react'
import ReactDom from 'react-dom'
import { BiInfoCircle } from 'react-icons/bi'
import './infoModal.css'

const InfoModal = (props) => {
    if (props.open === false) return null
    return (ReactDom.createPortal(
        <>
            <div className='overlay-style'>
                <div className="modal-style">
                    <BiInfoCircle className='info-icon' size={22} />
                    <h2>All Set!</h2>
                    <p className='overlay-p'>Between 1 to 48 hours you'll have access to O-lab with your registered email and/or phone number, your password is <strong>12345.</strong></p>
                    <p className='overlay-p'>If you registered with your email, check your inbox to see your credentials.</p>
                    <button onClick={props.close} className='btn' id='overlay-btn'>I Understand</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    ))
}

export default InfoModal