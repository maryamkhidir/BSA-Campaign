import React, { useState } from 'react'
import logo from '../assets/images/apc_logo.jpeg';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.scss'

function Header() {
  const location = useLocation();
  const navigate = useNavigate()
  const headerClassName = (location.pathname === "/") ? "header home__header" : "header"

  return (
    <header className={headerClassName}>
      <div style={{display:"flex", flexDirection:"row", alignItems:"center", cursor:"pointer"}} onClick={()=>navigate('/')}>
        <img src={logo} height={30}/>
        <div style={{color:"#FFF", marginLeft:10, fontWeight:500}}>BSA Campaign Group</div>
      </div>
      <div>
        <button className='header__button' style={{fontSize:14}} onClick={()=> navigate('/contact')} >Contact Us</button>
      </div>
    </header>
  )
}

export const Modal = ({toggleModal}) => {
  const navigate = useNavigate()
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const startMeeting = () => {
    if(userName==="adminBSA" && password==="123adminBSA"){
      toggleModal(false)
      navigate('/start_meeting')
    }
    else setError("Invalid login credentials")
  }

  return(
    <div style={{position:"absolute", width:"100%", height:"calc(100% - 60px)",left:0, right:0, top:60, bottom:0, backgroundColor:"rgb(0 0 0 / 52%)", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div style={{backgroundColor:"#FFF", width:300, padding:20, borderRadius:6, position:"relative"}}>

      <button onClick={()=>toggleModal(false)} style={{border:"1px solid", width:24, height:24, backgroundColor:"#FFF", borderRadius:24, position:"absolute", right:15, top:12, fontSize:12}}>✕</button>

      <h4 style={{fontWeight:700, marginTop:15}}>Admin Authentication</h4>
      <Input label="Username" type="text" value={userName} onChange={(text)=>setUsername(text)}  />
      <Input label="Password" type="password" value={password} onChange={(text)=>setPassword(text)} />
      {error && <div style={{color:"rgb(95, 160, 129)", fontSize:11}}>{error}</div>}
      <div style={{display:"flex", justifyContent:"flex-end", marginTop:15}}>
        <button className='header__button' onClick={startMeeting} style={{backgroundColor:"#F44336", color:"#FFF"}}>Continue</button>
      </div>

    </div>
  </div>
  )
}

export const UserModal = ({toggleModal}) => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState("")
  const [error, setError] = useState("")

  const joinMeeting = () => {
    console.log(fullName)
    if(fullName){
      toggleModal(false)
      navigate('/join_meeting', {state:{userName:fullName}})
    }
    else setError("Kindly enter your full name to proceed")
  }

  return(
    <div style={{position:"absolute", width:"100%", height:"calc(100% - 60px)",left:0, right:0, top:60, bottom:0, backgroundColor:"rgb(0 0 0 / 52%)", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div style={{backgroundColor:"#FFF", width:300, padding:20, borderRadius:6, position:"relative"}}>

      <button onClick={()=>toggleModal(false)} style={{border:"1px solid", width:24, height:24, backgroundColor:"#FFF", borderRadius:24, position:"absolute", right:15, top:12, fontSize:12}}>✕</button>

      <h4 style={{fontWeight:700, marginTop:15}}>Join Meeting</h4>
      <p style={{fontWeight:700, marginTop:15}}>Let's get to meet you. What's your name?</p>
      <Input label="Fullname" type="text" value={fullName} onChange={(text)=>setFullName(text)} />
      {error && <div style={{color:"rgb(95, 160, 129)", fontSize:11}}>{error}</div>}

      <div style={{display:"flex", justifyContent:"flex-end", marginTop:15}}>
        <button className='header__button' onClick={joinMeeting} style={{backgroundColor:"#F44336", color:"#FFF"}}>Continue</button>
      </div>

    </div>
  </div>
  )
}

const Input = ({label, value, type, onChange}) => {
  return(
    <div className='input'>
      <label>{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export default Header