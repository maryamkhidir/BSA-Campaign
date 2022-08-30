import React from 'react';

var signatureEndpoint = 'https://zoom-campaign.herokuapp.com/'
var sdkKey = 'qGsSQFeBBGEtgc9LA3N8SmpFnkq7HgfyoTeR'
var meetingNumber = '79948976908'
var userEmail = ''
var passWord = 'Qj4aAa'
var registrantToken = ''

const getAsyncSignature = async (role) => {
  try {
    const request = await fetch(signatureEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role
      })
    })
    const response = await request.json()
    return response.signature
    
  } catch (error) {
    console.error(error)
  }
}

export const initMeet = async (client, element, role, userName='BSA Campaign Group') => {
  try{
    const signature = await getAsyncSignature(role)
  
    client.init({
      debug: true,
      zoomAppRoot: element,
      language: 'en-US',
      customize: {
        video: {
          isResizable: true,
          viewSizes: {
            default: {
              width: 1000,
              height: 500
            },
            ribbon: {
              width: 250,
              height: 500
            }
          }
        },
        meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
      }
    });
  
    client.join({
      sdkKey: sdkKey,
      signature: signature,
      meetingNumber: meetingNumber,
      password: passWord,
      userName: userName,
      userEmail: userEmail,
      tk: registrantToken
    })
  }catch(e){
    console.log(e)
  }
}