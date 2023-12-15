---
title: Waiting Lobby | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Waiting Lobby
pagination_label: Waiting Lobby
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: waiting-lobby
---

# Waiting Lobby - Javascript SDK

## Overview

With our Javascript SDK, you can implement a waiting lobby feature, which allows the host to control which participants can join the meeting by allowing or denying access. Here are the steps for implementing the waiting lobby.

## Generating Tokens in Your Backend

Your server should generate access tokens using your API key and secret. Two different tokens need to be generated with different permissions:

### HOST Token Payload

```js
{
  // ...
  apikey: API_KEY, // Your API key
  permissions: ['allow_join'], // Permission to directly join the meeting
  // ...
}
```

### GUEST Token Payload

```js
{
  // ...
  apikey: API_KEY, // Your API key
  permissions: ['ask_join'], // Permission to ask the host for permission to join the meeting
  // ...
}
```

Explanation of parameters:

- **`apikey` (Mandatory)**: Your API key generated from the VideoSDK Dashboard, which can be obtained [here](https://app.videosdk.live/api-keys).

- **`permissions` (Mandatory)**: Permissions that control participant activity. Available permissions include:

  - **`allow_join`**: Participants are allowed to join the meeting directly.
  - **`ask_join`**: Participants need to ask for permission to join the meeting. Participants with the `allow_join` permission can accept or reject others' join requests.
  - **`allow_mod`**: Participants are allowed to toggle webcam and mic of other participants.

Then, sign this payload with your `SECRET KEY` and use the `HS256 algorithm`. For more details on authentication and tokens, refer to [this guide](../authentication-and-token).

## Generating Meeting Id

With the tokens ready, you can obtain the `meetingId` from the VideoSDK's rooms API, which can be found [here](/api-reference/realtime-communication/create-room).

Refer to [this guide](/javascript/guide/video-and-audio-calling-api-sdk/setup-call/initialise-meeting#generating-meeting-id) for generating the meetingId.

## Initialization of Meeting

Initialize the meeting using the `initMeeting` method of the `VideoSDK` class. The `initMeeting` is responsible for setting up the meeting with the provided configuration, including the `meetingId`, `participantId`, and more.

For detailed configuration options, check [here](/javascript/guide/video-and-audio-calling-api-sdk/setup-call/initialise-meeting#initialization-of-meeting).

```js
// If a participant joins as a host, provide them with the "allow_join" permission token.
// Otherwise, provide the "ask_join" permission token.
VideoSDK.config(
  isHost ? "allow_join token will be here" : "ask_join token will be here"
);

const meeting = VideoSDK.initMeeting({
  meetingId: "<Id-of-meeting>",
  name: "<Name-of-participant>",
  micEnabled: "<Flag-to-enable-mic>",
  webcamEnabled: "<Flag-to-enable-webcam>",
  participantId: "Id-of-participant", // optional, default: SDK will generate
});
```

## Events associated with Waiting Lobby

The following callbacks are received when a participant successfully joins the meeting.

- When a participant joins as a host, they will receive an `entry-requested` event when a guest participant tries to join the meeting.

- When a host allows a guest participant to join the meeting, the guest will receive an `entry-responded` event with the newly joined `Participant` object.

```js
meeting.on("entry-requested", (data) => {
  const { participantId, name, allow, deny } = data;

  console.log(`${name} requested to join the meeting.`);

  // If you want to allow the entry request
  allow();

  // if you want to deny the entry request
  deny();
});

meeting.on("entry-responded", (participantId, decision) => {
  // participantId will be id of participant who requested to join meeting

  if (decision === "allowed") {
    // entry allowed
  } else {
    // entry denied
  }
});
```

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url="/video/js-waiting-lobby.mp4" height="500px" width={"100%"} />

</div>

<br/>

## API Reference

Here are the API references for all the methods and events used in this guide:

- [MeetingClass](/javascript/api/sdk-reference/meeting-class/introduction)
- [join()](/javascript/api/sdk-reference/meeting-class/methods#join)
- [onentryrequested()](/javascript/api/sdk-reference/meeting-class/events#entry-requested)
- [onentryresponded()](/javascript/api/sdk-reference/meeting-class/events#entry-responded)

:::tip
You can find a complete [quick start example for the waiting lobby here](https://github.com/videosdk-live/quickstart/tree/main/js-waiting-lobby-rtc).
:::