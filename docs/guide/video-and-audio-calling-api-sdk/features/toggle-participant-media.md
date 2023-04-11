---
title: Toggle Participant Media
hide_title: true
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Toggle Participant Media
pagination_label: Toggle Participant Media
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: toggle-participant-media
---

:::caution

**This page has been deprecated.**

We've released a new version of pages with some improvements and smoother experience.

Here is the link of each SDK for this page.

- [JS](/javascript/guide/video-and-audio-calling-api-sdk/features/toggle-participant-media)
- [React](/react/guide/video-and-audio-calling-api-sdk/control-remote-participant/remote-participant-media)
- [React Native](/react-native/guide/video-and-audio-calling-api-sdk/control-remote-participant/remote-participant-media)
- [Android](/android/guide/video-and-audio-calling-api-sdk/control-remote-participant/remote-participant-media)
- [iOS](/ios/guide/video-and-audio-calling-api-sdk/features/toggle-participant-media)
- [Flutter](/flutter/guide/video-and-audio-calling-api-sdk/control-remote-participant/remote-participant-media)

:::

# Toggle Participant Media

Control other participant's webcam and mic.
For better idea, let's understand this with a real case scenario

**Scenario 1 (Online Class)** - In this scenario, the lecturer(Local Participant) will control the student's(Other Participant) webcam and mic as per his/her needs.

**Scenario 2 (Online Events)** - In this scenario, the event hosts will control the audience webcam and mic when someone wants to speak.

This guide will provide an overview of how to control other participant webcam and mic in a meeting.

1. **Enable Webcam of Participant** - By using `enableWebcam()` function, a `webcam-requested` event will trigger on requested participant side.

   **Example** : Meeting is running with **User A** and **User B**. Now **User A** wants to Enable Webcam of **User B**, so **User A** will use `enableWebcam()` function to request **User B**, after that **User B** recieve the `webcam-requested` event, from there user can either accept or reject the incoming request.

2. **Disable Webcam of Participant** - By using `disableWebcam()` function, webcam of that participant will be turned off.

   **Example** : **User A** wants to Disable Webcam of **User B**, so **User A** will use `disableWebcam()` function to Disable it without any request.

3. **Enable Mic of Participant** - By using `enableMic()` function, a `mic-requested` event will trigger on requested participant side.

   **Example** : Meeting is running with **User A** and **User B**. Now **User A** wants to Enable Mic of **User B**, so **User A** will use `enableMic()` function to request **User B**, after that **User B** will receive the `Mic-requested` event, from there user can either accept or reject the incoming request.

4. **Disable Mic of Participant** - By using `disableMic()` function, Mic of that participant will disable.

   **Example** : **User A** wants to Disable Mic of **User B**, so **User A** will use `disableMic()` function to Disable it without any request.

:::note

To achieve this feature, you need to pass `allow_join` persmission while genearting token for meeting initialization. After that you will be able to access participant media methods.

[How to apply permission while generating token?](/docs/guide/video-and-audio-calling-api-sdk/server-setup#generate-accees-token-and-integrate-other-apis)

:::

### Request Media Methods

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

// This will emit an event called "webcam-requested" to that particular participant
participant.enableWebcam();

// This will directly disable webcam of particular participant
participant.disableWebcam();

// This will emit an event called "mic-requested" to that particular participant
participant.enableMic();

// This will directly disable mic of particular participant
participant.disableMic();
```

</TabItem>
<TabItem value="react">

```js
import { useParticipant } from "@videosdk.live/react-sdk";

const { enableWebcam, disableWebcam, enableMic, disableMic } =
  useParticipant("<participant-id>");

const onPress = () => {
  // This will emit an event called "webcam-requested" to that particular participant
  enableWebcam();

  // This will directly disable webcam of particular participant
  disableWebcam();

  // This will emit an event called "mic-requested" to that particular participant
  enableMic();

  // This will directly disable mic of particular participant
  disableMic();
};
```

</TabItem>
<TabItem value="reactnative">

```js
import { useParticipant } from "@videosdk.live/react-native-sdk";

const { enableWebcam, disableWebcam, enableMic, disableMic } =
  useParticipant("<participant-id>");

const onPress = () => {
  // This will emit an event called "webcam-requested" to that particular participant
  enableWebcam();

  // This will directly disable webcam of particular participant
  disableWebcam();

  // This will emit an event called "mic-requested" to that particular participant
  enableMic();

  // This will directly disable mic of particular participant
  disableMic();
};
```

</TabItem>
<TabItem value="android">

```js
Participant participant = meeting.getParticipants().get("<participant-id>");

// This will emit an event called "onWebcamRequested" to that particular participant
participant.enableWebcam();

// This will directly disable webcam of particular participant
participant.disableWebcam();

// This will emit an event called "onMicRequested" to that particular participant
participant.enableMic();

// This will directly disable mic of particular participant
participant.disableMic();
```

</TabItem>
<TabItem value="ios">

```js
let participant = meeting?.participants.first(where: { $0.id == <participantId> })

/// Enable/Unmute mic for this participant
participant?.enableMic()

/// Disable/Mute mic for this participant
participant?.disableMic()

/// Enable/Turn on camera for this participant
participant?.enableWebcam()

/// Disable/Turn off camera for this participant
participant?.disableWebcam()
```

</TabItem>
<TabItem value="flutter">

```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

// This will emit an event called "webcam-requested" to that particular participant
participant.enableWebcam();

// This will directly disable webcam of particular participant
participant.disableWebcam();

// This will emit an event called "mic-requested" to that particular participant
participant.enableMic();

// This will directly disable mic of particular participant
participant.disableMic();
```

</TabItem>
</Tabs>

### Manage Requested Media Events

1. **webcam-requested** - This event will be emitted to the participant `B` when any other participant `A` requests to enable webcam of that participant `B`. This event handler will receieve following three arguments:

   - `accept()` - Callback function to accept the request.
   - `reject()` - Callback function to reject the request.

<div style={{height: "10px"}}></div>

2. **mic-requested** - This event will be emitted to the participant `B` when any other participant `A` requests to enable mic of that participant `B`. This event handler will receieve following three arguments:

   - `accept()` - Callback function to accept the request.
   - `reject()` - Callback function to reject the request.

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
// Handle Webcam Requested
meeting.on("webcam-requested", ({ accept, reject }) {
    // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
}, );

// Handle Mic Requested
meeting.on("mic-requested", ({ accept, reject }) {
    // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
}, );
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const {
  /** Methods */
} = useMeeting({
  onWebcamRequested: ({ accept, reject }) => {
    // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
  },
  onMicRequested: ({ accept, reject }) => {
    // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
  },
});
```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

const {
  /** Methods */
} = useMeeting({
  onWebcamRequested: ({ accept, reject }) => {
    // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
  },
  onMicRequested: ({ accept, reject }) => {
    // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
  },
});
```

</TabItem>
<TabItem value="android">

```js
new MeetingEventListener() {
  @Override
  public void onMicRequested(String participantId, MicRequestListener listener) {
      // TODO: show dialog before accepting request
      listener.accept();
  }

  @Override
  public void onWebcamRequested(String participantId, WebcamRequestListener listener) {
      // TODO: show dialog before accepting request
      listener.accept();
  }
}
```

</TabItem>
<TabItem value="ios">

```js
/// Called when host requests to turn on the mic/audio
func onMicRequested(participantId: String?, accept: @escaping () -> Void, reject: @escaping () -> Void) {

    // callback to accept the request
    accept()

    // callback to reject the request
    reject()
}

/// Called when host requests to turn on the camera/video
func onWebcamRequested(participantId: String?, accept: @escaping () -> Void, reject: @escaping () -> Void) {
    // callback to accept the request
    accept()

    // callback to reject the request
    reject()
}

```

</TabItem>
<TabItem value="flutter">

```js
// Handle Webcam Requested
widget.meeting.on("webcam-requested", ({ accept, reject }) {
    // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
}, );

// Handle Mic Requested
widget.meeting.on("mic-requested", ({ accept, reject }) {
     // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
}, );
```

</TabItem>
</Tabs>
