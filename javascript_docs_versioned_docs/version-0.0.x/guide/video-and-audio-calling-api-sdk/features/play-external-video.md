---
title: Play External Video Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Play External Video features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Play External Video
pagination_label: Play External Video
keywords:
  - play external video
  - pause external video
  - seek external video
  - resume external video
  - stop external video
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: play-external-video
---

# Play External Video - Javascript

This feature allows participants to broadcast any external video by providing video link.
Like screen share feature, one participant is broadcasting and other participants are receivers.

This guide will provide an overview of how participant can start, stop, resume and seek external video during the meeting.

1. **Start** : By using `startVideo()` function, the broadcaster can start external video by providing video link in argument.
2. **Stop** : By using `stopVideo()` function, a broadcaster can stop external video.
3. **Pause** : By using `pauseVideo()` function, a broadcaster can pause external video by providing `{ currentTime: 5 }` object as an argument.
4. **Resume** : By using `resumeVideo()` function, a broadcaster can resume external video from last pause video duration.
5. **Seek** : By using `seekVideo()` function, a broadcaster can seek external video to any given duration by providing `{ currentTime: 5 }` object as an argument.

### Start, Stop, Pause, Resume, and Seek External Video

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```js
const onPress = () => {
  // Start Video
  meeting?.startVideo({
    link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  });

  // Stop Video
  meeting?.stopVideo();

  // Pause Video
  meeting?.pauseVideo({ currentTime: 5 });

  // Resume Video
  meeting?.resumeVideo();

  // Seek Video
  meeting?.seekVideo({ currentTime: 10 });
};
```
