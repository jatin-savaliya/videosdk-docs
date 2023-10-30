---
title: Leave End Room Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Leave or End Room features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Leave or End Room
pagination_label: Leave or End Room
keywords:
  - Exit Room
  - Leave Room
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: leave-end-room
---

# Leave or End Room - Flutter

Whenever participant wishes to end their communication in the room, they can simply leave the room.

This guide will provide an overview of how to implement leave or end feature in VideoSDK rooms.

1. **Leave** - By using `leave()` function, only a participant will leave/exit the room, the rest of the room will continue with other participants.
2. **End** - By using `end()` function, room will end for each and every participant. So, use this function according to your use cases.

### Leave And End Room

```js
// Leave the room
room.leave();

// End Room Session
room.end();
```

### Events

**Events associated with `leave()`:**

- Local participant will receive a [`roomLeft`](../../../api/sdk-reference/room-class/events.md#roomLeft) event.
- All remote participants will receive a [`participantLeft`](../../../api/sdk-reference/room-class/events.md#participantLeft) event with `participantId`.

**Event associated with `end()`:**

- All [participants](../../../api/sdk-reference/participant-class/introduction.md) and [localParticipant](../../../api/sdk-reference/participant-class/introduction.md), will be emitted with [`roomLeft`](../../../api/sdk-reference/room-class/events.md#roomLeft) event.

```js
room.on(Events.roomLeft, () => {
  //room Left
});

room.on(Events.participantLeft, (participant) => {
  //Participant Left the room
});
```
