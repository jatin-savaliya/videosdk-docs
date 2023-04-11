---
title: Mic Controls Video & Audio Call - Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Mic Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Mic Controls
pagination_label: Mic Controls
keywords:
  - Mic on
  - Mic off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mic-controls
---

:::caution

**This page has been deprecated.**

We've released a new version of pages with some improvements and smoother experience.

Here is the link of each SDK for this page.

- [JS](/javascript/guide/video-and-audio-calling-api-sdk/features/mic-controls)
- [React](/react/guide/video-and-audio-calling-api-sdk/handling-media/mute-unmute-mic)
- [React Native](/react-native/guide/video-and-audio-calling-api-sdk/handling-media/mute-unmute-mic)
- [Android](/android/guide/video-and-audio-calling-api-sdk/handling-media/mute-unmute-mic)
- [iOS](/ios/guide/video-and-audio-calling-api-sdk/features/mic-controls)
- [Flutter](/flutter/guide/video-and-audio-calling-api-sdk/handling-media/mute-unmute-mic)

:::

# Mic Controls

Whenever any participant wants to start / stop broadcasting their audio to other participant in meeting, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to use enable and disable Mic in a meeting.

1. **Enable Mic** - By using `unmuteMic()` function, a participant can publish audio to other participants.
2. **Disable Mic** - By using `muteMic()` function, a participant can stop publishing audio to other participants.
3. **Change Mic** - By using `changeMic()` function, a participant can change mic.

### Enable, Disable, Change Mic

:::note

For Javascript, we will use `unmuteMic()` function for publish audio to other participants and `muteMic()` function for stop publishing audio to other participants.
:::

### Enable, Disable Mic

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
const onPress = () => {
  // Enable Mic in Meeting
  meeting?.unmuteMic();

  // Disable Mic in Meeting
  meeting?.muteMic();

  // Change Mic in Meeting
  const mics = await meeting?.getMics(); // returns all mics

  const { deviceId, label } = mics[0];

  meeting?.changeMic(deviceId);
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Enable Mic in Meeting
  meeting?.unmuteMic();

  // Disable Mic in Meeting
  meeting?.muteMic();

  // Change Mic in Meeting
  const mics = await meeting?.getMics(); // returns all mics

  const { deviceId, label } = mics[0];

  meeting?.changeMic(deviceId);
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Enable Mic in Meeting
  meeting?.unmuteMic();

  // Disable Mic in Meeting
  meeting?.muteMic();
};
```

</TabItem>
<TabItem value="android">

```js
  btnMic.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {

        // Toggle participant mic in meeting
        if (micEnabled) {
          meeting.muteMic();
        } else {
          meeting.unmuteMic();
        }

      }
  });
```

</TabItem>
<TabItem value="ios">

```js
@IBAction func micButtonTapped(_ sender: Any) {
    if !micEnabled {
        // enable/unmute mic
        self.meeting?.unmuteMic()
    } else {
        // disable/mute mic
        self.meeting?.muteMic()
    }
}
```

</TabItem>
<TabItem value="flutter">

```js
ElevatedButton(
  onPressed: meeting.unmuteMic,
  child: Text("unmuteMic"),
),
ElevatedButton(
  onPressed: meeting.muteMic,
  child: Text("muteMic"),
),
```

</TabItem>
</Tabs>
