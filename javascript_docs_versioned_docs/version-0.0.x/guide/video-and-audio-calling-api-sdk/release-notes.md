---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of JavaScript SDK.

## v0.0.41

**Release Date** : 23rd July 2022

**Change log** :

1. Set Audio packet priority high.

2. Internal dependency update.

---

## v0.0.40

**Release Date** : 19th July 2022

**Change log** :

1. Recording and Livestream status event added.

   **Docs** : [Recording Events](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/recording-meeting)

---

## v0.0.36

**Release Date** : 1st July 2022

**Change log** :

1. Add the ViewPort method for better video quality based on view container.

   **Docs** : [How to Set Viewport?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/set-viewport)

   **Video** : [Improve Video Calling Quality with Video SDK](https://www.youtube.com/watch?v=k9iVafyCyAc)

2. Provide Echo Cancellation on the audio stream.

**Bug Fix** :

1.  Remove googDsp dependency warn.

2.  Resolve `changeWebcam` and `changeMic` customTrack issue.

---

## v0.0.34 & v0.0.35

**Release Date** : 7th June 2022

**Change log** : None

**Bug Fix** :

1.  Resolve UDP port blocking and video blackout issue.

---

## v0.0.32 & v0.0.33

**Release Date** : 16th May 2022

**Change log** :

1. Update Internal dependency.

---

## v0.0.31

**Release Date** : 14th May 2022

**Change log** : None

**Bug Fix** :

1. Custom track issue on initMeeting fix.

2. Throw error when device or browser does not support audio or video communication.

3. Resolved error `No peers found for the Data consumer` while start recording/ livestream/hls.

---

## v0.0.30

**Release Date** : 29th Apr 2022

**Change log** :

1. Applied custom video track on `changeWebcam` method.

2. Applied custom audio track on `changeMic` method.

**Bug Fix** :

1. Resolve Mozila browser (Mac OS) localParticipant Video blackout issue.

---

## v0.0.29

**Release Date** : 23rd Apr 2022

**Change log** :

1. Release Custom Video track feature

   **Docs** : [How to use Custom Video track?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

2. Release Custom Audio track feature

   **Docs** : [How to use Custom Audio track?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track)

3. Release Custom Screen Share track feature

   **Docs** : [How to use Custom Screen Share track?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-screen-share-track)

---

## v0.0.24

**Release Date** : 12th Feb 2022

**Change log** :

1. Release Pubsub message feature for text communication.

   **Docs** : [How to use Pubsub feature?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/pubsub)

2. Customise recording layout for Cloud Recording / HLS and RTMP out.

   **SDK Reference** : [Start Recording](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/methods#startrecording)

   **SDK Reference** : [Start HLS](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/methods#starthls)

   **SDK Reference** : [Start RTMP](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/methods#startlivestream)

---

## v0.0.23

**Release Date** : 10th Jan 2022

**Change log** :

1. Connect Meetings (BETA): This new feature enables you to fetch participant data between two or more meetings and make participants switch meetings.

   **Docs** : [How to use Connect Meetings feature?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/connection/overview)

2. Added `meeting.on(“error”)` event listener to subscribe to all meeting errors occurring in the SDK.

   **Docs** : [Error Event](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/error-event)

3. Add custom participantId in `initMeeting` method

   **SDK Reference** : [Custom ParticipantId](https://docs.videosdk.live/javascript/api/sdk-reference/initMeeting#participantid)
