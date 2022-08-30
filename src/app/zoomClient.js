import React from 'react';
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.6.0/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

// setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
var signatureEndpoint = 'https://zoom-campaign.herokuapp.com/'
// This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
var sdkKey = 'qGsSQFeBBGEtgc9LA3N8SmpFnkq7HgfyoTeR'
var meetingNumber = '79948976908'
var role = 0
var leaveUrl = 'http://localhost:3000'
var userName = 'React'
var userEmail = ''
var passWord = 'Qj4aAa'
// pass in the registrant's token if your meeting or webinar requires registration. More info here:
// Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
// Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
var hostToken = '6t4jFCOuV_QRzIRtQMiYuhkXa9ox6usfQtIIcQRE8WU.AG.WDT_-eXINksUej8T_7WXyxR0TMB7Mo7mbmLnRlutSbWwuJDJFebdc6L-Q8XWMxm3ufnIXR7h0FWbFKpWQUyg2cEfLocEOBcUwxoJcUQ6LlwLjkbQzb80Mkh5MzJalan3Sax3X5rJzmKnlxuIk-s53WZn6WnnucRNtPMJXKmitQHA0_7bVSeAygzphudILaW1bBDaUA.IUy4PywjbyuaHfWxfMDjVw.ouzJdSUkQuNwsHRJ'
var registrantToken = ''

export function getSignature(e) {
  e.preventDefault();

  fetch(signatureEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      meetingNumber: meetingNumber,
      role: 0
    })
  }).then(res => res.json())
  .then(response => {
    joinMeeting(response.signature)
  }).catch(error => {
    console.error(error)
  })
}

export function getSignatureStart(e) {
  e.preventDefault();

  fetch(signatureEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      meetingNumber: meetingNumber,
      role: 1
    })
  }).then(res => res.json())
  .then(response => {
    startMeeting(response.signature)
  }).catch(error => {
    console.error(error)
  })
}

function joinMeeting(signature) {
  document.getElementById('zmmtg-root').style.display = 'block'

  ZoomMtg.init({
    leaveUrl: leaveUrl,
    success: (success) => {
      console.log(success)

      ZoomMtg.join({
        signature: signature,
        meetingNumber: meetingNumber,
        userName: userName,
        sdkKey: sdkKey,
        userEmail: userEmail,
        passWord: passWord,
        tk: registrantToken,
        success: (success) => {
          console.log(success)
        },
        error: (error) => {
          console.log(error)
        }
      })

    },
    error: (error) => {
      console.log(error)
    }
  })
}

function startMeeting(signature) {
  document.getElementById('zmmtg-root').style.display = 'block'

  ZoomMtg.init({
    leaveUrl: leaveUrl,
    success: (success) => {
      console.log(success)

      ZoomMtg.join({
        signature: signature,
        meetingNumber: meetingNumber,
        userName: userName,
        sdkKey: sdkKey,
        userEmail: userEmail,
        passWord: passWord,
        tk: registrantToken,
        /* zak: hostToken, */
        success: (success) => {
          console.log(success)
        },
        error: (error) => {
          console.log(error)
        }
      })

    },
    error: (error) => {
      console.log(error)
    }
  })
}
