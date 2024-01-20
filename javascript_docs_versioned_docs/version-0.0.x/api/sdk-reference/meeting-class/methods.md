---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Meeting Class Methods
title: Meeting Class Methods
---

# Meeting Class Methods - Javascript

<div class="sdk-api-ref-only-h4">

### join()

- It is used to join a meeting.
- After meeting initialization by [`initMeeting()`](../initMeeting.md) it returns a new instance of [Meeting](../meeting-class/introduction.md). However, by default, it will not automatically join the meeting. Hence, to join the meeting you should call `join()`.

#### Events associated with `join()`:

- Local Participant will receive a [`meeting-joined`](../meeting-class/events.md#meeting-joined) event when successfully joined.
- Remote Participant will receive a [`participant-joined`](../meeting-class/events.md#participant-joined) event with the newly joined [`Participant`](../participant-class/introduction.md) object from the event callback.

#### Participant having `ask_join` permission inside token

- If a token contains the permission `ask_join`, then the participant will not join the meeting directly after calling `join()`, but an event will be emitted to the participant having the permission `allow_join` called [`entry-requested`](../meeting-class/events.md#entry-requested).

- After the decision from the remote participant, an event will be emitted to the participant called [`entry-responded`](../meeting-class/events.md#entry-responded). This event will contain the decision made by the remote participant.

#### Participant having `allow_join` permission inside token

- If a token containing the permission `allow_join`, then the participant will join the meeting derectly after calling `join()`.

#### Returns

- _`void`_

---

### leave()

- It is used to leave the current meeting.

#### Events associated with `leave()`:

- Local participant will receive a [`meeting-left`](../meeting-class/events.md#meeting-left) event.
- All remote participants will receive a [`participant-left`](../meeting-class/events.md#participant-left) event with `participantId`.

#### Returns

- _`void`_

---

### end()

- It is used to end the current running session.
- By calling `end()`, all joined [participants](../participant-class/introduction.md) including [localParticipant](../participant-class/introduction.md) of that session will leave the meeting.

#### Events associated with `end()`:

- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will be emitted [`meeting-left`](../meeting-class/events.md#meeting-left) event.

#### Returns

- _`void`_

---

### enableWebcam()

- It is used to enable self camera.
- [`stream-enabled`](../participant-class/events.md#stream-enabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

#### Returns

- _`void`_

---

### disableWebcam()

- It is used to disable self camera.
- [`stream-disabled`](../participant-class/events.md#stream-disabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

#### Returns

- _`void`_

---

### unmuteMic()

- It is used to enable self microphone.
- [`stream-enabled`](../participant-class/events.md#stream-enabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

#### Returns

- _`void`_

---

### muteMic()

- It is used to disable self microphone.
- [`stream-disabled`](../participant-class/events.md#stream-disabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

#### Returns

- _`void`_

---

### enableScreenShare()

- it is used to enable screen-sharing.
- [`stream-enabled`](../participant-class/events.md#stream-enabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

- [`presenter-changed`](./events#presenter-changed) will also receive a callback with the `presenterId`.

#### Returns

- _`void`_

---

### disableScreenShare()

- It is used to disable screen-sharing.
- [`stream-disabled`](../participant-class/events.md#stream-disabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

- [`presenter-changed`](./events#presenter-changed) will also receive a callback with the `null`.

#### Returns

- _`void`_

---

### uploadBase64File()

- It is used to upload your file to Videosdk's Temporary storage

- `base64Data` convert your file to base64 and pass here.
- `token` pass your videosdk token. Read more about token [here](/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token)
- `fileName` provide your fileName with extension

- The method will return the corresponding fileUrl, which will use to retrieve the file from the VideoSDK's storage system.

#### Parameters

- **base64Data**: String
- **token**: String
- **fileName**: String

#### Returns

- `fileUrl` - It will use to retrieve the file from the VideoSDK's storage system.

#### Example

```javascript
const fileUrl = await meeting.uploadBase64File({
  base64Data: "<Your File's base64>", // Convert your file to base64 and pass here
  token: "<VIDEOSDK_TOKEN>",
  fileName: "myImage.jpeg", // Provide name with extension here,
});

console.log("fileUrl", fileUrl);
```

---

### fetchBase64File()

- It is used to retrieve your file from the Videosdk's Temporary storage

- `url` pass fileUrl which is returned by uploadBase64File()
- `token` pass your videosdk token. Read more about token [here](/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token)

- The method will return image in form of base64 string.

#### Parameters

- **url**: String
- **token**: String

#### Returns

- `base64` - image in form of base64 string.

#### Example

```javascript
let base64 = await meeting.fetchBase64File({
  url: "<Your FileUrl>"; // Provide fileUrl which is returned by uploadBase64File(),
  token :"<VIDEOSDK_TOKEN>",
});

console.log("base64", base64);
```

---

### startRecording()

- It is used to start meeting recording.
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will receive [`recording-started`](./events.md#recording-started) event.

- `webhookUrl` will be triggered when the recording is completed and stored in the server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook).

- `awsDirPath` will be the path for your S3 bucket to which you want to store recordings. To allow us to store the recording in your S3 bucket, you will need to fill out this form by providing the required values. [VideoSDK AWS S3 Integration](https://zfrmz.in/RVlFLFiturVJ7Q97fr23)

- `config: mode` is used to either record video-and-audio both or only audio. And by default it will be video-and-audio.

- `config: quality` is only applicable to video-and-audio.

#### Parameters

- **webhookUrl**: String
- **awsDirPath**: String
- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 4`_
  - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
  - **mode**: _"video-and-audio"_ | _"audio"_
  - **quality**: _"low"_ | _"med"_ | _"high"_
  - **orientation**: _"landscape"_ | _"portrait"_

#### Returns

- _`void`_

#### Example

```javascript
const webhookUrl = "https://webhook.your-api-server.com";

const awsDirPath = "/meeting-recordings/";

const config = {
  layout: {
    type: "SPOTLIGHT",
    priority: "PIN",
    gridSize: 9,
  },
  theme: "DEFAULT",
};

startRecording(webhookUrl, awsDirPath, config);
```

---

### stopRecording()

- It is used to stop meeting recording.
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will receive [`recording-stopped`](./events.md#recording-stopped) event.

#### Returns

- _`void`_

---

### startLivestream()

- It is used to start meeting live streaming.
- You will be able to start live stream meetings to other platforms such as Youtube, Facebook, etc. that support `RTMP` streaming.
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md) will receive the [`livestream-started`](./events.md#livestream-started) event.

#### Parameters

- **outputs**: Array<{ **url**: String, **streamKey**: String }>
- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 25`_
  - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_

#### Returns

- _`void`_

---

#### Example

```javascript
const outputs = [
  {
    url: "rtmp://a.rtmp.youtube.com/live2",
    streamKey: "<STREAM_KEY>",
  },
  {
    url: "rtmps://",
    streamKey: "<STREAM_KEY>",
  },
];

const config = {
  layout: {
    type: "SPOTLIGHT",
    priority: "PIN",
    gridSize: 9,
  },
  theme: "DEFAULT",
};

startLivestream(outputs, config);
```

### stopLivestream()

- It is used to stop meeting livestreaming.
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will receive [`livestream-stopped`](./events.md#livestream-stopped) event.

#### Returns

- _`void`_

---

### startHls()

- It is used to start meeting HLS.
- You will be able to start HLS and watch the live stream of meeting over HLS.
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will receive the [`hls-started`](./events.md#hls-started) event.
- `mode` is used to either start hls streaming of video-and-audio both or only audio. And by default it will be video-and-audio.
- `quality` is only applicable to video-and-audio.

#### Parameters

- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 25`_
  - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
  - **mode**: _"video-and-audio"_ | _"audio"_
  - **quality**: _"low"_ | _"med"_ | _"high"_

#### Returns

- _`void`_

#### Example

```javascript
const config = {
  layout: {
    type: "SPOTLIGHT",
    priority: "PIN",
    gridSize: 9,
  },
  theme: "DEFAULT",
};

startHls(config);
```

---

### stopHls()

- It is used to stop meeting HLS.
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will receive [`hls-stopped`](./events.md#hls-stopped) event.

#### Returns

- _`void`_

---

### getWebcams()

- It will return all camera devices connected.

#### Returns

- Promise<{ **deviceId**: string; **lable**: string }[]>

#### Example

```javascript
const handleGetWebcams = async () => {
  const webcams = await getWebcams();

  console.log(webcams);
};

handleGetWebcams();
```

---

### changeWebcam()

- It is used to change the webcam device.
- If multiple webcam devices are connected, by using `changeWebcam()` one can change the camera device.

#### Parameters

- **deviceId**: String

#### Returns

- _`void`_

---

### setWebcamQuality()

- It is used to set the webcam quality.
- By using `setWebcamQuality()`, uploading of the webcam stream quality of [localParticipant](../participant-class/introduction.md) can be changed from `low` to `high` or vice versa.

#### Parameters

- **quality**: _"low"_ | _"med"_ | _"high"_

#### Returns

- _`void`_

---

### getMics()

- It will return all mic devices connected.

#### Returns

- Promise<{ **deviceId**: string; **lable**: string }[]>

#### Example

```javascript
const handleGetMics = async () => {
  const mics = await getMics();

  console.log(mics);
};

handleGetMics();
```

---

### changeMic()

- It is used to change the mic device.
- If multiple mic devices are connected, by using `changeMic()` one can change the mic device.

#### Parameters

- **deviceId**: String

#### Returns

- _`void`_

---
<!-- 
### connectTo()

- This method is used for establishing the connection to other meetings.

#### Parameters

- meetingId

  - type : `String`

  - meetingId of another meeting

- payload

  - type : `String`

  - Any arbitrary payload data for the connection

#### Events associated with `connectTo()`:

- [`connection-open`](./events.md#connection-open) event of meeting class is triggered to all participants whenever `meeting.connectTo()` being called.

#### Returns

- `void`

#### Example

```jsx
//create connection to meeting B
meeting.connectTo({ meetingId: "meeting_B_ID", payload: "arbitraty text" });

//  This event will be emitted to participants of both meetings, Meeting A & Meeting B
meeting.on("connection-open", (connection) => {
  console.log("Connection", connection);
});
```

--- -->

### on()

#### Parameters

- eventType : [`event of meeting class`](./events.md)
- listener : `function`

#### Returns

- `void`

#### Example

```js
//for meeting-any-event
meeting.on("meeting-any-event", listener);
```

---

### off()

#### Parameters

- eventType : [`event of meeting class`](./events.md)
- listener : `function`

#### Returns

- `void`

#### Example

```js
//for meeting-any-event
meeting.off("meeting-any-event", listener);
```

---

### changeMode()

- It is used to change the mode.
- You can toggle between the `CONFERENCE` and `VIEWER`mode .
  - `CONFERENCE`: Both audio and video streams will be produced and consumed in this mode.
  - `VIEWER`: Audio and video streams will not be produced or consumed in this mode.

#### Parameters

- **mode**: String

#### Returns

- _`void`_

</div>
