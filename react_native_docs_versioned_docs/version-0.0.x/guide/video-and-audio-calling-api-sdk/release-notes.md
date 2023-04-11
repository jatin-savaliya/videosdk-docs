---
sidebar_label: Release Notes
pagination_label: Release Notes
tags: [releasenotes]
---

# Release Notes

This page will keep you update all the releases of React Native SDK.

## v0.0.45

**Release Date** : 31st March 2023

**Change log** :

- `HLS_PLAYABLE` state added in `onHlsStateChanged` callback.
- `hlsUrls` getters added in `useMeeting`

---

## v0.0.44

**Release Date** : 3rd March 2023

**Change log** :

- Updated Types.

**Bug Fix** :

- Build issue fixes when `enableHermes:true`.

- Fixed Cannot read property `MeetingProvider` of undefined.

---

## v0.0.42

**Release Date** : 10th February 2023

**Change log** :

- Improve bitrate logic in the `multiStream` feature so that user's CPU and the network are optimise.

- Replace custom track in `changeWebcam` method.

**Bug Fix** :

- Network switch & reconnection issue fixes (covered all possible edge cases that were causing interruptions during the meeting) in [onMeetingStateChanged](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/events#onmeetingstatechanged) event.

---

## v0.0.41

**Release Date** : 7th January 2023

**Change log** :

1. Added `getVideoStats`, `getAudioStats` and `getShareStats` methods for getting particular participant streams statistics.

   **SDK Reference** : [getVideoStats](https://docs.videosdk.live/react-native/api/sdk-reference/use-participant/methods#getvideostats)

   **SDK Reference** : [getAudioStats](https://docs.videosdk.live/react-native/api/sdk-reference/use-participant/methods#getaudiostats)

   **SDK Reference** : [getShareStats](https://docs.videosdk.live/react-native/api/sdk-reference/use-participant/methods#getsharestats)

2. Participant can toggle between the `CONFERENCE` and `VIEWER` mode by using `changeMode()` method.

   **Docs** : [Change Mode](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/methods#changemode)

---

## v0.0.40

**Release Date** : 29th November 2022

**Change log** :

- Update `WebRTC` dependency to `v1.106.1`

---

## v0.0.39

**Release Date** : 18th November 2022

**Change log** : None

**Bug Fix** :

- Resolve `_reactNative.DeviceEventEmitter.removeListener is not a function` error after leave meeting.

- Resolve Foreground Notification issue in Android 12.

---

## v0.0.38

**Release Date** : 12th November 2022

**Change log** :

1. Provide `multistream` parameter for sending multiple resolution layers or single resolution layer.

   **Docs** : [Multi Stream](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

2. Provide `onVideoQualityChanged` in `useParticipant` hook to listen video quality changes.

   **SDK Reference** : [onVideoQualityChange](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/set-participant-video-quality#event)

3. Provide meeting `CONFERENCE` and `VIEWER` mode on `MeetingProvider` config.

   **SDK Reference** : [Meeting Mode](https://docs.videosdk.live/react-native/api/sdk-reference/meeting-provider#mode)

---

## v0.0.37

**Release Date** : 4th November 2022

**Change log** :

- Provide Types support.

**Bug Fix** :

- Fix error `collector-producer | got error UnsupportedError: not implemented` during development environment.

---

## v0.0.36

**Release Date** : 8th October 2022

**Change log** :

1. iOS : Switch audio output device during the session.

   **Docs** : [Switch Audio Output](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/switch-audio-output)

---

## v0.0.35

**Release Date** : 23rd September 2022

**Change log** :

1. Added [Error Event](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/error-event) for,

   1. If someone is denying media controls permissions such as `Video`, `Mic` and `Screen Share`
   2. Previous Recording, RTMP or HLS is being processed.

**Error Code Table :**

| Type                                          | Code | Message                                                                                 |
| --------------------------------------------- | ---- | --------------------------------------------------------------------------------------- |
| **ERROR_GET_VIDEO_MEDIA_PERMISSION_DENIED**   | 3014 | Video capture permission denied.                                                        |
| **ERROR_GET_AUDIO_MEDIA_PERMISSION_DENIED**   | 3015 | Audio capture permission denied.                                                        |
| **ERROR_GET_DISPLAY_MEDIA_PERMISSION_DENIED** | 3016 | Screen sharing permission denied.                                                       |
| **PREV_RECORDING_PROCESSING**                 | 4018 | Previous recording session is being processed, please try again after few seconds!      |
| **PREV_RTMP_RECORDING_PROCESSING**            | 4019 | Previous RTMP recording session is being processed, please try again after few seconds! |
| **PREV_HLS_STREAMING_PROCESSING**             | 4020 | Previous HLS streaming session is being processed, please try again after few seconds!  |

2. Event added for HLS state (starting, started, stopping and stopped)

   **SDK Reference** : [onHlsStateChanged](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/events#onhlsstatechanged)

_This version will store timeline of the session, session stats and participant stats. This will be available in your [VideoSDK Session Dashboard](https://app.videosdk.live/meetings/sessions?page=1&perPage=20)_

## v0.0.34

**Release Date** : 2nd September 2022

**Change log** :

1. Android : Switch audio output device during the session.

   **Docs** : [Switch Audio Output](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/switch-audio-output)

---

## v0.0.33

**Release Date** : 21st August 2022

**Change log** :

1. Recording and Livestream status event added.

   **Docs** : [Recording Events](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/events#onrecordingstatechanged)

2. Set Audio packet priority high.

3. Internal dependency update.

4. Added `onMeetingStateChanged` event for getting state of meeting changes.

   **SDK Reference** : [onMeetingStateChanged](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/events#onmeetingstatechanged)

5. Custom audio, video and share track now accepts `MediaStream` instead of `MediaStreamTrack`.

6. Added types for better IDE support.

**Bug Fix** :

1. Fixed issues with Custom audio and video tracks.

2. Updated types indicating optional value or not.

3. Fix `reading s.data on undefined` error.

---

## v0.0.32

**Release Date** : 1st July 2022

**Change log** :

1. Add the ViewPort method for better video quality based on view container.

   **Docs** : [How to Set Viewport?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/set-viewport)

   **Video** : [Improve Video Calling Quality with Video SDK](https://www.youtube.com/watch?v=k9iVafyCyAc)

2. Provide Echo Cancellation on the audio stream.

**Bug Fix** :

1.  Resolve `changeWebcam` and `changeMic` customTrack issue.

---

## v0.0.30 & v0.0.31

**Release Date** : 7th June 2022

**Change log** : None

**Bug Fix** :

1.  Resolve UDP port blocking and video blackout issue.

---

## v0.0.28 & v0.0.29

**Release Date** : 17th May 2022

**Change log** :

1. Update Internal dependency.

---

## v0.0.27

**Release Date** : 14th May 2022

**Change log** : None

**Bug Fix** :

1. Custom track issue on MeetingProvider config fix.

2. Throw error when device or browser does not support audio or video communication.

3. Resolved error `No peers found for the Data consumer` while start recording/ livestream/hls.

---

## v0.0.26

**Release Date** : 23rd April 2022

**Change log** :

1. Release Custom Video track feature

   **Docs** : [How to use Custom Video track?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

2. Release Custom Audio track feature

   **Docs** : [How to use Custom Audio track?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track)

3. Release Custom Screen Share track feature

   **Docs** : [How to use Custom Screen Share track?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-screen-share-track)

---

## v0.0.25

**Release Date** : 9th March 2022

**Change log** :

1. Release Pubsub message feature for text communication.

   **Docs** : [How to use Pubsub feature?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/pubsub)

2. Customise recording layout for Cloud Recording / HLS and RTMP out.

   **SDK Reference** : [Start Recording](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/methods#startrecording)

   **SDK Reference** : [Start HLS](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/methods#starthls)

   **SDK Reference** : [Start RTMP](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/methods#startlivestream)

---

## v0.0.24

**Release Date** : 24th February 2022

**Change log** :

1. Added `onError` event listener to subscribe to all meeting errors occurring in the SDK.

   **Docs** : [Error Event](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/error-event)

2. Update WebRTC dependency.

---

## v0.0.23

**Release Date** : 10th January 2022

**Change log** :

1. Connect Meetings (BETA): This new feature enables you to fetch participant data between two or more meetings and make participants switch meetings.

   **Docs** : [How to use Connect Meetings feature?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/connection/overview)

2. Switch Meeting : This feature is used for switching participant of one meeting to another meeting.

   **Docs** : [How to use Switch Meeting feature?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/switch-participant)

3. Add custom participantId in `MeetingProvider` config.

   **SDK Reference** : [Custom ParticipantId](https://docs.videosdk.live/react-native/api/sdk-reference/meeting-provider#participantid)
