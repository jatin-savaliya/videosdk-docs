---
title: Speaker Indication Video & Audio Call - Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Speaker Indication features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Speaker Indication
pagination_label: Speaker Indication
keywords:
  - Active Speaker
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: speaker-indication
---

:::caution

**This page has been deprecated.**

We've released a new version of pages with some improvements and smoother experience.

Here is the link of each SDK for this page.

- [JS](/javascript/guide/video-and-audio-calling-api-sdk/features/speaker-indication)
- [React](/react/guide/video-and-audio-calling-api-sdk/handling-media/active-speaker-indication)
- [React Native](/react-native/guide/video-and-audio-calling-api-sdk/handling-media/active-speaker-indication)
- [Android](/android/guide/video-and-audio-calling-api-sdk/handling-media/active-speaker-indication)
- [iOS](/ios/guide/video-and-audio-calling-api-sdk/features/speaker-indication)
- [Flutter](/flutter/guide/video-and-audio-calling-api-sdk/handling-media/active-speaker-indication)

:::

# Speaker Indication

Speaker indication feature in VideoSDK let you know, which participant in a meeting is active speaker.

Whenever any participant speaks in meeting, `speaker-changed` event will trigger.

For example, the meeting is running with **Alice** and **Bob**. Whenever any of them speaks, `speaker-changed` event will trigger and return the speaker `participantId`.

We can access `speaker-changed` event through [meeting object](/docs/guide/video-and-audio-calling-api-sdk/features/start-join-meeting#2-initialization).

### speaker-changed Event

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
meeting.on("speaker-changed", (activeSpeakerId) => {
  console.log("participantId", activeSpeakerId);
});
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting } from "@videosdk.live/react-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onSpeakerChanged: (activeSpeakerId) => {
    console.log("participantId", activeSpeakerId);
  },
});
```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onSpeakerChanged: (activeSpeakerId) => {
    console.log("participantId", activeSpeakerId);
  },
});
```

</TabItem>
<TabItem value="android">

```js
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
/// Called when speaker is changed
/// - Parameter participantId: participant id of the speaker, nil when no one is speaking.
func onSpeakerChanged(participantId: String?) {

    // show indicator for active speaker
    if let participant = participants.first(where: { $0.id == participantId }),

        // show indication for active speaker
        // ex. show border color
        // cell.contentView.layer.borderColor = UIColor.blue.cgColor : UIColor.clear.cgColor
    }

    // hide indicator for others participants
    let otherParticipants = participants.filter { $0.id != participantId }
    for participant in otherParticipants {

        // ex. remove border color
        //cell.contentView.layer.borderColor = UIColor.clear.cgColor
    }
}
```

</TabItem>
<TabItem value="flutter">

```js
meeting.on('speaker-changed', (activeSpeakerId) {
  print("participantId => $activeSpeakerId");
});

```

</TabItem>
</Tabs>
