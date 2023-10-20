---
title: Custom Audio Track
hide_title: false
hide_table_of_contents: false
description: Custom Audio Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Audio Track
pagination_label: Custom Audio Track
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
---

# Custom Audio Track - Javascript

We have introduced the ability to pass a custom Audio track for the Audio of the participants. This feature can be used to add custom layers like background noise removal, echo cancellation, etc. on audio and send it to other participants.

## Creating a Custom Audio Track

- You can create a Audio Track using `createMicrophoneAudioTrack()` method of `VideoSDK` class.
- This method can be used to create audio track using different encoding parameters and noise cancellation configuration.

### Parameters

- **microphoneId**:

  - type: `String`
  - required: `false`
  - It will be the id of the mic from which the audio should be captured.

- **encoderConfig**:

  - type: `String`
  - required: `false`
  - default: `speech_standard`
  - Allowed values : `speech_low_quality` | `speech_standard` | `music_standard` | `standard_stereo` | `high_quality` | `high_quality_stereo`
  - It will be the encoder configuration you want to use for Audio Track.

- **noiseConfig**

  - **echoCancellation**

    - type: `boolean`
    - required: `false`
    - If `true` echo cancellation will turned on else it would be turned off.

  - **autoGainControl**

    - type: `boolean`
    - required: `false`
    - If `true` auto gain will turned on else it would be turned off.

  - **noiseSuppression**
    - type: `boolean`
    - required: `false`
    - If `true` noise suppression will turned on else it would be turned off.

#### Returns

- `MediaStream`

### Example

```javascript
let customTrack = await VideoSDK.createMicrophoneAudioTrack({
  encoderConfig: "high_quality",
  noiseConfig: {
    noiseSuppression: true,
    echoCancellation: true,
    autoGainControl: true,
  },
});
```

## Using Custom Audio Track

### Custom Track while initializing the meeting

If you are passing `micEnabled: true` in the `initMeeting` and want to use custom tracks from start of the meeting, you can pass custom track in the `initMeeting` as shown below.

```javascript
let customTrack = await VideoSDK.createMicrophoneAudioTrack({
  encoderConfig: "high_quality",
  noiseConfig: {
    noiseSuppression: true,
    echoCancellation: true,
    autoGainControl: true,
  },
});

meeting = VideoSDK.initMeeting({
  meetingId: meetingId, // required
  name: name, // required
  micEnabled: true, // optional, default: true
  webcamEnabled: true, // optional, default: true

  // Pass the custom track here which will be used to mic is auto started
  customMicrophoneAudioTrack: customTrack,
});
```

### Custom Track with `unmuteMic()`

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the `meeting.unmuteMic()` method.

:::note

Make sure to call `muteMic()` before you create a new track as it may lead to unexpected behavior.

:::

```javascript
let customTrack = await VideoSDK.createMicrophoneAudioTrack({
  encoderConfig: "high_quality",
  noiseConfig: {
    noiseSuppression: true,
    echoCancellation: true,
    autoGainControl: true,
  },
});

meeting.unmuteMic(customTrack);
```
