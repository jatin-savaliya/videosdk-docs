---
title: HLS Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: HLS Events
pagination_label: HLS Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: hls-events
---

# HLS Events - React Native

VideoSDK provides `onHlsStateChanged` event which will notify you of the current state of HLS for the meeting.

### onHlsStateChanged

- This event will be triggered when the meeting's HLS status changed.
- This event can be subscribed from the `useMeeting` hook.

### Example

Here is the usage of the event mentioned in this page.

```javascript
import { Constants, useMeeting } from "@videosdk.live/react-native-sdk";

function onHlsStateChanged(data) {
  const { status } = data;

  if (status === Constants.hlsEvents.HLS_STARTING) {
    console.log("Meeting HLS is starting");
  } else if (status === Constants.hlsEvents.HLS_STARTED) {
    console.log("Meeting HLS is started");
  } else if (status === Constants.hlsEvents.HLS_STOPPING) {
    console.log("Meeting HLS is stopping");
  } else if (status === Constants.hlsEvents.HLS_STOPPED) {
    console.log("Meeting HLS is stopped");
  } else {
    //
  }
}

const {
  meetingId
  ...
} = useMeeting({
  onHlsStateChanged,
  ...
});
```

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [onHlsStateChanged()](/react-native/api/sdk-reference/use-meeting/events#onhlsstatechanged)
