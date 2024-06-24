import { useState } from 'react'
import { StyledApp } from './Styled'
import { HiMiniLanguage } from "react-icons/hi2";

function App() {
  const [input, setInput] = useState<boolean>(false);
  const [inputEmail, setInputE] = useState<string>("");
  const [inputPass, setInputP] = useState<string>("");

  const toggleInput = () => {
        setInput( prevInput => !prevInput )
  }
  const emailInput = (event: any) =>{
    setInputE(event.target.value);
    if(inputEmail == ""){
      if(input ==false){
      setInput( prevInput => !prevInput )
      }
    }
  }

  return (
    <StyledApp>
      <header><img src="src/assets/imgs/01_Netflix_Logo/02_Netflix_Logo_CMYK/Netflix_Logo_CMYK.png" alt="" /></header>
    <div className='page'>
    <div className='login'>
      <h1 id='signIn'>Sign In</h1>
      <div className='inputs'>
      <input type="email" id='textInput' placeholder='Email or mobile number' className={input ? "inputsBox" : "inputsVoid"} onClick={toggleInput} onChange={emailInput}/>
      <p className='alertoff'>Please enter a valid email or phone number.</p>
      <input type="password" id='textInput' placeholder='Password' className={input ? "inputsBox" : "inputsVoid"} onClick={toggleInput}/>
      <p className='alertoff'>Your password must contain between 4 and 60 characters.</p>
      </div>
      <div className='signs'>
      <button className='signIn'><strong>Sign In</strong></button>
      <p>OR</p>
      <button className='signCode'><strong>Use a Sign-In Code</strong></button>
      <a className='white' id='passwordLink'>Forgot password?</a>
      </div>
      <div className='remember'>
      <input type="checkbox" name="" id="check" />
      <p className='white'>Remember me</p>
      </div>
      <div className='nowSign'>
      <p>New to Netflix?</p>
      <a href="" className='white'><strong>Sign up now</strong></a>
      </div>
      <p className='messageBox'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a>Learn more.</a></p>
    </div>
    </div>
    <div className='endPage'>
      <div className='inline'><p>Question?</p><a href="">Call 0800 591 2876</a></div>
      <div className='links'>
      <ul className='ulM'>
        <ul>
      <li><a href="" id='endLinks'>FAQ</a></li>
      <li><a href="" id='endLinks'>Cookie Preferences</a></li>
      </ul>
      <ul>
      <li><a href="" id='endLinks'>Help Center</a></li>
      <li><a href="" id='endLinks'>Corporate Information</a></li>
      </ul>
      <li><a href="" id='endLinks'>Terms of Use</a></li>
      <li><a href="" id='endLinks'>Privacy</a></li>
      </ul>
      </div>
      <div className='inputsBox' id='selectLang'>
      <HiMiniLanguage color='white' size={25}/>
      <select name="" id='select'><option value="pt-br">Português</option><option value="en">English</option></select>
      </div>
    </div>

    </StyledApp>
  )
}

export default App
