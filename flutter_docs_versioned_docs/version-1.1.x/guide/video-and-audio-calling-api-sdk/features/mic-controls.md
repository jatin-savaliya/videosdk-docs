---
title: Mic Controls Video & Audio Call - Video SDK Docs
hide_title: false
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

# Mic Controls

Whenever any participant wants to start / stop broadcasting their audio to other participant in room, they can simply do it with VideoSDK room.

This guide will provide an overview of how to use enable and disable Mic in a room.

1. **Enable Mic** - By using `unmuteMic()` function, a participant can publish audio to other participants.
2. **Disable Mic** - By using `muteMic()` function, a participant can stop publishing audio to other participants.
3. **Change Mic** - By using `changeMic()` function, a participant can change mic.

### Enable, Disable, Change Mic

```js
ElevatedButton(
  onPressed: room.unmuteMic,
  child: Text("unmuteMic"),
),
ElevatedButton(
  onPressed: room.muteMic,
  child: Text("muteMic"),
),

// changeMic() method is coming soon in flutter.
```

### Events

**Events associated with `unmuteMic()`:**

- [`streamEnabled`](../../../api/sdk-reference/participant-class/events.md#streamEnabled) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

**Events associated with `muteMic()`:**

- [`streamDisabled`](../../../api/sdk-reference/participant-class/events.md#streamDisabled) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

```js
participant.on(Events.streamEnabled, (Stream stream){
  if (stream.kind === "audio") {
    //particiapnt turned on audio
  }
});
participant.on(Events.streamDisabled, (Stream stream){
  if (stream.kind === "audio") {
    //particiapnt turned off audio
  }
});
```
