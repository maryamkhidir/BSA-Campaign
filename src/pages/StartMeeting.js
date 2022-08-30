import React, { useEffect, useState } from 'react'
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
import {initMeet} from '../app/zoom'
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
const client = ZoomMtgEmbedded.createClient();

function StartMeeting() {
  const [loading, toggleLoading] = useState(true)
  const [message, setMessage] = useState("")

  useEffect(() => {
    startMeeting()
  }, [])

  const startMeeting = async () => {

    let meetingSDKElement = document.getElementById('startMeetingSDKElement');

    await initMeet(client, meetingSDKElement, 1)
  
    client.on("connection-change", (payload) => {
      console.log(payload)
      if (payload.state === 'Connected') {
        toggleLoading(false)
      }
      if (payload.state === 'Closed') {
        setMessage("Meeting ended by the host. Thanks for joining!")
      }
      if (payload.state === 'Fail') {
        meetingSDKElement.style.display = "none"
        setMessage(payload?.reason)
        toggleLoading(false)
      }
    })
  }
  
  return (
    <main className="videoWrapper">
      {loading && <Spinner />}
      <div id="startMeetingSDKElement" >
        {/* Zoom start Meeting SDK Component View Rendered Here */}
      </div>
      {message && <Message message={message} />}
    </main>
  )
}

const Message = ({message}) => {
  return (
    <div style={{textAlign:"center"}}>
      <div style={{fontSize: 24}}>{message}</div>
      <a className='header__button' href='/' style={{marginTop:10, backgroundColor:"#F44336", color:"#FFF"}}>Go Home</a>
    </div>
  )
}

export default StartMeeting