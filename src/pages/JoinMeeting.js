import React, { useEffect, useState } from 'react'
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
import {initMeet} from '../app/zoom'
import Spinner from '../components/Spinner';
import { useLocation } from 'react-router-dom';
const client = ZoomMtgEmbedded.createClient();

function JoinMeeting() {
  const { state } = useLocation()
  const [loading, toggleLoading] = useState(true)
  const [message, setMessage] = useState("")
  const userName = state.userName ?? "BSA Supporter"

  useEffect(() => {
    joinMeeting()
  }, [])

  const joinMeeting = async () => {

    let meetingSDKElement = document.getElementById('joinMeetingSDKElement');
    console.log(userName)
    await initMeet(client, meetingSDKElement, 0, userName)
  
    client.on("connection-change", (payload) => {
      console.log(payload)
      if (payload.state === 'Connected') {
        toggleLoading(false)
      }
      if (payload.state === 'Closed') {
        setMessage("Meeting ended. Thanks for joining!")
        toggleLoading(false)
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
      <div id="joinMeetingSDKElement" >
        {/* Zoom join Meeting SDK Component View Rendered Here */}
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

export default JoinMeeting