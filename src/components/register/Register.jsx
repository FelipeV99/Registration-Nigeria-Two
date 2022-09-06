import { useRef, useState } from 'react'
import bgLogo from '../../assets/BgWithText.svg'
import olabLogo from '../../assets/OlabRounded.svg'
import './register.css'
import emailjs from 'emailjs-com'
import InfoModal from '../InformationModal/InfoModal'

const Register = () => {
    const formRef = useRef()
    const svgRef = useRef()
    const emailRef = useRef()
    const dialRef = useRef()
    const numberRef = useRef()
    const pRef = useRef()
    const selectRef = useRef()

    const [selectedState,setSelectedState] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();
        if(emailRef.current.value == 0 && numberRef.current.value == 0){
            emailNumberError()
            
        }else{
            setIsOpen(true)
            emailjs.sendForm('service_mgjhrok', 'template_2dubdeo', formRef.current, '2VsWYyoUUzfNvfPC8')
            emailjs.sendForm('service_mgjhrok', 'template_7qstj6l', formRef.current, '2VsWYyoUUzfNvfPC8')
            numberRef.current.classList.remove('red')
            emailRef.current.classList.remove('red')
            dialRef.current.classList.remove('red')
            e.target.reset()
        } 

    }

    
  const emailNumberError = () => {
    numberRef.current.classList.add('red')
    emailRef.current.classList.add('red')
    dialRef.current.classList.add('red')
}
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='main-container'>
            <img src={bgLogo} className="bg-logo" alt="logo" ref={svgRef} />
            <div className='register-container'>
                <img src={olabLogo} alt="Olab-logo" className='olab-logo' />
                <h2>Register</h2>
                <form ref={formRef} onSubmit={sendEmail} className='form-register'>
                    <p className='normal-p intro-p' id="initial-p">Please fill out the following fields in order to start using O-lab.</p>
                    <label htmlFor="fullname">Full Name*</label>
                    <input name="fullname" type="text" required />
                    <p className="normal-p" ref={pRef}> Please fill either the email or phone number</p>
                    <div className='div-number'>
                        <div className='inner-div-p'>
                            <label htmlFor="dial-code">Prefix*</label>
                            <input id='input-divide-prefix' name="dial-code" type="number" ref={dialRef} />
                        </div>
                        <div className='inner-div-n'>
                            <label htmlFor="number">Telephone Number*</label>
                            <input id='input-divide-number' name="number" type="number" ref={numberRef}  />
                        </div>
                    </div>

                    <label htmlFor="email">Email*</label>
                    <input name="email" type="email" ref={emailRef}  />
                    <label htmlFor="age">Date of Birth*</label>
                    <input name="age" type="date" required />
                    <label htmlFor="nationality">Nationality*</label>
                    <input name="nationality" type="text" required />
                    <label htmlFor="categories">Categories*</label>
                    <select id="categories" required ref={selectRef} onChange={(e)=>{setSelectedState(e.target.value)}}>
                        <option value="">Please select an option...</option>
                        <option value="TechHer">TechHer</option>
                        <option value="Student">Student</option>
                        <option value="Worker">Worker</option>
                        <option value="Others">Others</option>
                    </select>
                    <input className='hidden-input' type="text" name="hiddenOrg" value={selectedState} />
                    <button type="submit" className="btn btn-primary btn-register">Submit</button>
                </form>
            </div>
            <InfoModal open={isOpen} close={() => { setIsOpen(false) }}></InfoModal>
        </div>
    )
}

export default Register