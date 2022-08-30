import React from 'react';
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';

const client = ZoomMtgEmbedded.createClient();

// setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
var signatureEndpoint = 'https://zoom-campaign.herokuapp.com/'
// This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
var sdkKey = 'qGsSQFeBBGEtgc9LA3N8SmpFnkq7HgfyoTeR'
var meetingNumber = '79948976908'
var role = 0
var userName = 'BSA Campaign Group'
var userName2 = 'Supporter'
var userEmail = ''
var passWord = 'Qj4aAa'
// pass in the registrant's token if your meeting or webinar requires registration. More info here:
// Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view/meetings#join-registered
// Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view/webinars#join-registered
var registrantToken = ''

export function getSignatureJoin() {
  //e.preventDefault();

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
    console.error("error1")
    console.error(error)
  })
}

export function getSignatureStart() {
  //e.preventDefault();

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
    console.error("error2")
    console.error(error)
  })
}

function startMeeting(signature) {

  let meetingSDKElement = document.getElementById('startMeetingSDKElement');
    
  client.init({
    debug: true,
    zoomAppRoot: meetingSDKElement,
    language: 'en-US',
    customize: {
      video: {
        isResizable: true,
        viewSizes: {
          default: {
            width: 800,
            height: 500
          },
          ribbon: {
            width: 250,
            height: 500
          }
        }
      },
      meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
      toolbar: {
        /* buttons: [
          {
            text: 'Custom Button',
            className: 'CustomButton',
            onClick: () => {
              console.log('custom button');
            }
          }
        ] */
      }
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

/*   client.on("connection-change", (payload) => {
    console.log("connect sdgh dg")
    console.log(payload)
    if (payload.state === 'Closed') {
      console.log("Meeting ended")
    }
  }) */

}

function joinMeeting(signature) {

  let meetingSDKElement = document.getElementById('joinMeetingSDKElement');
    
  client.init({
    debug: true,
    zoomAppRoot: meetingSDKElement,
    language: 'en-US',
    customize: {
      video: {
        isResizable: true,
        viewSizes: {
          default: {
            width: 800,
            height: 500
          },
          ribbon: {
            width: 250,
            height: 500
          }
        }
      },
      meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
      toolbar: {
        /* buttons: [
          {
            text: 'Custom Button',
            className: 'CustomButton',
            onClick: () => {
              console.log('custom button');
            }
          }
        ] */
      }
    }
  });

  client.join({
    sdkKey: sdkKey,
    signature: signature,
    meetingNumber: meetingNumber,
    password: passWord,
    userName: userName2,
    userEmail: userEmail,
    tk: registrantToken
  })
}
