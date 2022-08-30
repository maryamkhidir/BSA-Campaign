import React, { useState } from 'react'
import bsa from '../assets/images/bsa.png';
import bsa2 from '../assets/images/bsa2.png';
import APC from '../assets/images/APC1.jpeg';
import { Modal, UserModal } from '../components/Header';
import './Home.scss';

function Home() {
  const [authenticateModal, showAuthenticateModal] = useState(false)
  const [getUserModal, showUserModal] = useState(false)

  return (
    <main className='Home'>
      <section style={{position:"relative", height:"100vh"}}>
        <div src={APC} style={{width:"100%", height:"100%", backgroundImage:`url(${APC})`, backgroundColor:"#021818f7", backgroundBlendMode:"luminosity", backgroundSize:"cover"}} />
        <div style={{width:"100%", height:"100%", position:"absolute", backgroundColor:"rgb(0 89 68 / 80%)", top:0}}>
          <section style={{padding:"50px", display:"flex", alignItems:"center", height:"100%", justifyContent:"center"}}>
            <div className='popup'>
              {/* <div style={{fontSize:36, padding:"20px", textAlign:"center"}}>Dear people of Oyo State!</div> */}
              <div className='popup-wrapper'>
                <img src={bsa} className="img bsa" />
                <img src={bsa2} className="img bsa2" />
                <div className='desc-block'>
                  <div className='desc'>My mandate is to always put you first, through service and loyalty.</div>
                  <div className='button-wrapper'>
                    <button className='header__button desc__button' style={{backgroundColor:"rgb(32 163 210)"}} onClick={()=>showUserModal(true)}>Join Our Town Hall</button>

                    <button onClick={() => showAuthenticateModal(true)} className='header__button desc__button' style={{ backgroundColor:"#F44336", marginLeft:15}} >Start Town Hall</button>
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