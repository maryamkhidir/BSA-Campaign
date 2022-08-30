import React, { useState } from 'react'
import bsa from '../assets/images/bsa2.png';
import APC from '../assets/images/APC1.jpeg';
import { Modal, UserModal } from '../components/Header';

function Home() {
  const [authenticateModal, showAuthenticateModal] = useState(false)
  const [getUserModal, showUserModal] = useState(false)

  return (
    <main>
      <section style={{position:"relative", height:"100vh"}}>
        <div src={APC} style={{width:"100%", height:"100%", backgroundImage:`url(${APC})`, backgroundColor:"#021818f7", backgroundBlendMode:"luminosity", backgroundSize:"cover"}} />
        <div style={{width:"100%", height:"100%", position:"absolute", backgroundColor:"rgb(0 89 68 / 80%)", top:0}}>
          <section style={{padding:"50px", display:"flex", alignItems:"center", height:"100%", justifyContent:"center"}}>
            <div style={{backgroundColor:"#FFF",  width:"100%",maxWidth:1100, boxShadow:"rgb(62 94 85) 1px 1px 9px 0px", borderRadius: 4, marginTop:30}}>
              {/* <div style={{fontSize:36, padding:"20px", textAlign:"center"}}>Dear people of Oyo State!</div> */}
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <img src={bsa} style={{height:550, paddingTop:70, borderRadius:4}} />
                <div style={{padding:"0 50px", display:"flex", alignItems:"flex-end", flexDirection:'column'}}>
                  <div style={{fontFamily:"Satisfy",fontSize:48, textAlign:"right", maxWidth:500}}>My mandate is to always put you first, through service and loyalty.</div>
                  <div style={{marginTop:60, display:"flex"}}>
                    <button className='header__button' style={{backgroundColor:"rgb(32 163 210)", padding:"0 22px", minHeight:60, color:"#FFF"}} onClick={()=>showUserModal(true)}>Join Our Town Hall</button>

                    <button onClick={() => showAuthenticateModal(true)} className='header__button' style={{ backgroundColor:"#F44336", padding:"0 22px", minHeight:60, color:"#FFF", marginLeft:20}} >Start Town Hall</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {authenticateModal && <Modal toggleModal={(status) => showAuthenticateModal(status)} />}
      {getUserModal && <UserModal toggleModal={(status) => showUserModal(status)} />}
    </main>
  )
}

export default Home