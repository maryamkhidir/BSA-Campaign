import React from 'react'
import spinner from '../assets/images/Spinner.svg';

function Spinner() {
    return(
      <div style={{position:"absolute", width:"100%", height:"calc(100% - 60px)",left:0, right:0, top:60, bottom:0, backgroundColor:"rgb(0 0 0 / 52%)", display:"flex", justifyContent:"center", alignItems:"center", zIndex:2}}>
        <img src={spinner} style={{width: 40, height:40, marginBottom:22}} />
      </div>
  )
}

export default Spinner