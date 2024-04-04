---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes - Prebuilt

This page will keep you update all the releases of Prebuilt SDK.

## 0.3.38

**Release Date** : 27th Mar 2024

**Change log** : 

- Error logs added :


| Constant                                     | Code | Message                                                                                                                                                                                                                          |
| -------------------------------------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ERROR_CAMERA_ACCESS_DENIED_OR_DISMISSED      | 3017 | Oops! It seems like camera access was denied or dismissed. To proceed, kindly grant access through your browser settings.                                                                                                        |
| ERROR_MICROPHONE_ACCESS_DENIED_OR_DISMISSED  | 3018 | Oops! It seems like microphone access was denied or dismissed. To proceed, kindly grant access through your browser settings.                                                                                                    |
| ERROR_CAMERA_PERMISSION_DENIED_BY_OS         | 3019 | Camera permission denied by OS system settings. Please check the system settings and grant permission for this browser.                                                                                                          |
| ERROR_MICROPHONE_PERMISSION_DENIED_BY_OS     | 3020 | Microphone permission denied by OS system settings. Please check the system settings and grant permission for this browser.                                                                                                      |
| ERROR_CAMERA_NOT_FOUND                       | 3021 | Please ensure your camera is connected and turned on, and that the camera driver is installed and up-to-date.                                                                                                                    |
| ERROR_MICROPHONE_NOT_FOUND                   | 3022 | Please ensure your microphone is connected and turned on.                                                                                                                                                                        |
| ERROR_CAMERA_IN_USE                          | 3023 | The camera is being used by another application. Please close any programs utilizing the camera, such as video conferencing tools, screen recording software, or other browsers. Restart your browser and attempt again.         |
| ERROR_MICROPHONE_IN_USE                      | 3024 | The microphone is being used by another application. Please close any programs utilizing the microphone, such as video conferencing tools, screen recording software, or other browsers. Restart your browser and attempt again. |
| ERROR_CAMERA_PERMISSION_OR_AUTOPLAY_ISSUE    | 3025 | It seems like there's an issue with camera permission or video autoplay, you can check out this link for details: [http://tinyurl.com/autoplay-issue](http://tinyurl.com/autoplay-issue)                                         |
| ERROR_VIDEO_SOURCE_INITIATION_FAILED         | 3026 | Unable to initiate video source. Please verify browser settings for video permissions.                                                                                                                                           |
| ERROR_WEBCAM_TRACK_ENDED                     | 3027 | Webcam track has ended or the webcam is disconnected. Please ensure your webcam is properly connected and try restarting it.                                                                                                     |
| ERROR_MICROPHONE_TRACK_ENDED                 | 3028 | Microphone track has ended or the microphone is disconnected. Please check your microphone connection and try again.                                                                                                             |
| ERROR_INVALID_CUSTOM_VIDEO_TRACK             | 3029 | The provided custom video track is invalid; reverting to the default video track. Please ensure that the video track meets the required specifications.                                                                          |
| ERROR_INVALID_CUSTOM_AUDIO_TRACK             | 3030 | The provided custom audio track is invalid; reverting to the default audio track. Please ensure that the audio track meets the required specifications.                                                                          |
| ERROR_CUSTOM_VIDEO_TRACK_ENDED               | 3031 | The provided custom video track is in an ended state. Please verify the video track's status, and try again.                                                                                                                     |
| ERROR_CUSTOM_AUDIO_TRACK_ENDED               | 3032 | The provided custom audio track is in an ended state. Please verify the audio track's status, and try again.                                                                                                                     |
| ERROR_CAMERA_ACCESS_UNAVAILABLE              | 3033 | Camera access unavailable: Please ensure your device is compatible and that you're on a secure website (https://).                                                                                                               |
| ERROR_MICROPHONE_ACCESS_UNAVAILABLE          | 3034 | Microphone access unavailable: Please ensure your device is compatible and that you're on a secure website (https://).                                                                                                           |
| ERROR_ACTION_PERFORMED_BEFORE_MEETING_JOINED | 3035 | Oops! Something went wrong. The room was in a connecting state, and during that time, an action encountered an issue. Please try again after joining a meeting.                                                                  |


**Bug Fix** :

1. Fixed host with permission not able to enable mic, webcam or screen share of remote participants.

2. Fixed edge case where multiple participants attempting screen sharing in a meeting could result in misleading of stream showcase.

## 0.3.37

**Release Date** : 31st Oct 2023

**Change log** :

1. HLS Player Improvements

## v0.3.36

**Release Date** : 31st Oct 2023

**Change log** :

1. `moreOptionsEnabled` param added for show/hide More Option Tabpanel.

     **Docs** : [`moreOptionsEnabled`](/prebuilt/api/sdk-reference/parameters/basic-parameters#moreoptionsenabled) 

## v0.3.31

**Release Date** : 5th July 2023

**Change log** :

1. Internal improvements


## v0.3.30

**Release Date** : 15th May 2023

**Change log** :

1. `toggleVirtualBackground` parameter added in `permissions` object.

   **Docs** : [`toggleVirtualBackground`](/prebuilt/api/sdk-reference/parameters/advance-parameters/permissions#togglevirtualbackground)

2. Microphone dropdown now includes a speaker list.

## v0.3.29

**Release Date** : 27th February 2023

**Change log** :

1. `multistream` parameter added in `videoConfig` object.

   **Docs** : [Audio/Video Config](/prebuilt/api/sdk-reference/parameters/advance-parameters/customize-audio-video#multistream)

## v0.3.25

**Release Date** : 20th February 2023

**Change log** :

1. Mirror your camera view from `Change Webcam` menu in topbar.

2. Change incoming video resolution to SD or HD. You can find this options in `Configuration` panel.

3. Support of custom configuartion in custom track of video, audio and screenShare.

   **Docs** : [Audio/Video Config](/prebuilt/guide/prebuilt-video-and-audio-calling/features/customize-audio-video)

4. Get the notification when you switch the networks or become disconnected from the meeting.

## v0.3.23

**Release Date** : 17th November 2022

**Change log** :

1. If `maintainLandscapeVideoAspectRatio` is set to true , then it will maintain aspect ratio of webcam streams for all participants inside all meeting layouts.

2. By passing the `networkBarEnabled` true, you can see a network icon on the top right corner of the video feed where you can inspect data like latency, jitter, packet loss, bitrate etc.

---

## v0.3.22

**Release Date** : 16th November 2022

**Change log** :

1. In `VIEWER` mode, the participant joining limit has been increased to 100.

---

## v0.3.21

**Release Date** : 3rd October 2022

**Change log** :

1. `Virtual Background (BETA)` and `AI Noise Removal (BETA)` added.

   **Docs** : [Virtual Background](/prebuilt/guide/prebuilt-video-and-audio-calling/features/virtual-background)

   **Docs** : [AI Noise Removal](/prebuilt/guide/prebuilt-video-and-audio-calling/features/noise-removal)

---

## v0.3.20

**Release Date** : 23rd September 2022

**Change log** :

1. `Activities` Tab has been renamed to `More Options`.
2. Whiteboard and Add Live Stream has been moved into `More Options`.
3. In Participant Tab, Media permission icon list has been redesigned.

---

## v0.3.19

**Release Date** : 12th September 2022

**Change log** :

1. Added option to configure themes for Recordings, Livestreaming and HLS

   **Docs** : [Change Recording Theme](/prebuilt/api/sdk-reference/parameters/advance-parameters/recording)

   **Docs** : [Change LiveStreaming Theme](/prebuilt/api/sdk-reference/parameters/advance-parameters/live-stream)

   **Docs** : [Change HLS Theme](/prebuilt/api/sdk-reference/parameters/advance-parameters/hls)

---

## v0.3.18

**Release Date** : 9th September 2022

**Change log** :

1. `DARK` and `LIGHT` theme added.

   **Docs** : [Change Theme](/prebuilt/guide/prebuilt-video-and-audio-calling/features/theme)

2. Activity icon can be hidden by setting `pollEnabled : false` .

---

## v0.3.17

**Release Date** : 24th August 2022

**Change log** :

1. Waiting screen customization added

   **Docs** : [Waiting screen](/prebuilt/guide/prebuilt-video-and-audio-calling/features/waiting-screen)

2. Provided permission for participant icon button visibility.

   **Docs** : [Enabled Participant Tab Panel](/prebuilt/api/sdk-reference/parameters/basic-parameters#participanttabpanelenabled)

3. Provided permission to toggle participant tab panel.

   **Docs** : [Toggle Participant Tab Panel](/prebuilt/api/sdk-reference/parameters/advance-parameters/permissions#cantoggleparticipanttab)

**Bug Fix** :

In Chat timestamp issue resolved.

---

## v0.3.15

**Release Date** : 6th August 2022

**Change log** :

1. While Screen sharing, participant can share audio of their chrome tab.

   **Docs** : [Screen Share with Audio](/prebuilt/guide/prebuilt-video-and-audio-calling/features/screenshare#screen-share-with-audio)

---

## v0.3.14

**Release Date** : 6th August 2022

**Change log** :

1. Few edge cases have been covered in the poll.

---

## v0.3.13

**Release Date** : 31st July 2022

**Change log** :

1. [Live Poll (BETA)](/prebuilt/guide/prebuilt-video-and-audio-calling/features/live-poll) Release.

2. Any participant can create a poll by passing `canCreatePoll` true.

3. Maintain webcam streams aspect ratio config added `maintainVideoAspectRatio` true.

4. Participant network status bar provided in Participant grid view.

## v0.3.11

**Release Date** : 28th July 2022

**Change log** :

1. In HLS, for visible player controls you can pass `playerControlsVisible` true. so that participant can view control of player.

---

## v0.3.10

**Release Date** : 15th July 2022

**Change log** :

1. HLS can be enabled by any participant with permission `hls.enabled`.

2. Participate can toggle other participant's mode by passing `toggleParticipantMode` true.

3. HLS can be toggle by any participant with passing `toggleHls`.

4. HLS mode added with this parameter `mode`. It can be `VIEWER` or `CONFERENCE`.

---

## v0.3.8

**Release Date** : 8th July 2022

**Change log** :

1. Participant can now toggle other participant screenShare if they are having permission `partcipantCanToogleOtherScreenShare`.

**Bug Fix** :

2. Join screen is now responsive if `title` or `meetingUrl` is not provided.

---

## v0.3.7

**Release Date** : 5th July 2022

**Change log** :

1. Add google echoCancellation params during creation of audio stream.

2. Loader Animation added between join screen.

**Bug Fix** :

1. Remove googDsp dependency warn.

---

## v0.3.6

**Release Date** : 7th June 2022

**Change log** : None

**Bug Fix** :

1. Fullscreen model issue resolved.

2. Resolve UDP port blocking and video blackout issue.

---

## v0.3.4

**Release Date** : 14th May 2022

**Change log** : None

**Bug Fix** :

1. Throw error when device or browser does not support audio or video communication.

2. Resolved error `No peers found for the Data consumer` while start recording/ livestream/HLS.

---

## v0.3.2 & v0.3.3

**Release Date** : 4th May 2022

**Change log** :

1. Region support added for new meetings.

**Bug Fix** :

2. Mozila browser (Mac OS) Video Control button not working.

---

## v0.3.1

**Release Date** : 19th March 2022

**Change log** :

1. Change layout dynamically to all participants.

2. Changing layout will reflect to recorders.

3. Livestream configurations options added.

4. `Go Live` button added, so that participant can start live stream while running meeting.

---

## v0.3.0

**Release Date** : 22nd March 2022

**Change log** : None

**Fix** :

1. Topbar icons container component code refactoring.
