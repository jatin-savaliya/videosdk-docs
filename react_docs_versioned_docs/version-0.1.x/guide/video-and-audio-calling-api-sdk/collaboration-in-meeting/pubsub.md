---
title: PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: PubSub
pagination_label: PubSub
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: pubsub
---

# PubSub - React

PubSub is a short acronym for Publish-Subscribe mechanism. This mechanism is used to send and recieve messages from a particular topic. As the name suggests, for someone to send a message, they have to specify the topic and the message which should be published and for someone to receive a message, they should be subscribed to that topic.

Here is a visual to better understand publish-subscribe mechanism.

![pubsub](/img/pubsub.png)

## usePubSub

In order to use PubSub in meeting, VideoSDK provides a hook `usePubSub` which allows you to subscribe to any topic and publish to any topic allowing to pass on messages and instructions during the meeting easily.

### `publish()`

- This method is used for publishing message of specific topic.
- This method can be accessed from the `usePubSub` hook by mentioning the `topic` for which the `publish()` will be used.
- This method will accept two parameters as input:
  - `message`: This will be the actual message to be published. It has to be in `String` format.
  - `options`: This object offered the option of keeping the message around for the duration of the session. When `persist` is set to `true`, that message will be retained for upcoming participants and will be available in [VideoSDK Session Dashboard](https://app.videosdk.live/meetings/sessions) with `.CSV` format after completion of session.

```js
// importing usePubSub hook from react-sdk
import { usePubSub } from "@videosdk.live/react-sdk";

function MeetingView() {
  // destructure publish method from usePubSub hook
  const { publish } = usePubSub("CHAT");

  const handlePublishMessage = () => {
    // publish message
    const message = "Hello Everyone!";
    publish(message, { persist: true });
  };

  return (
    <>
      <button onClick={handlePublishMessage}>Publish Message</button>
    </>
  );
}
```

## Receiving the messages

- `messages` property of the `usePubSub` hook will hold all the past and new upcoming messages for that particular topic.

- `messages` is an array of Object containing all the messages.

This object contains following properties:

- `senderId`: This represents the `participantId` of the participant who send the message.
- `senderName`: This represents the `displayName` of the participant who send the message.
- `message`: This will be the acatual message that was send.
- `timestamp`: This wil the timestamp for when the message was published.
- `topic`: This will be the name of the topic message was published to.

## Example

```js
// importing usePubSub hook from react-sdk
import { usePubSub } from "@videosdk.live/react-sdk";

function ChatView() {
  // destructure publish method and messages from usePubSub hook
  //highlight-next-line
  const { publish, messages } = usePubSub("CHAT");

  const handlePublishMessage = () => {
    // publish message
    const message = "Hello Everyone!";
    //highlight-next-line
    publish(message, { persist: true });
  };

  return (
    <>
      <button onClick={handlePublishMessage}>Publish Message</button>
      <p>Messages: </p>
      //highlight-start
      {messages.map((message) => {
        return (
          <p>
            {messsage.senderName} says {message.message}
          </p>
        );
      })}
      //highlight-end
    </>
  );
}
```

## Events associated with PubSub

### onMessageReceived

- This event callback is triggered when a new message is received on the subscribed topic.

### onOldMessagesReceived

- This event callback is triggered once when you subscribe to the topic and it contains all the past messages from that topic which where published with `persist : true`.

```js
// importing usePubSub hook from react-sdk
import { usePubSub } from "@videosdk.live/react-sdk";

function MeetingView() {
  // destructure publish method from usePubSub hook
  const { publish } = usePubSub("CHAT", {
    //highlight-start
    onMessageReceived: (message) => {
      console.log("New Message Recieved", message);
    },
    onOldMessagesReceived: (messages) => {
      console.log("Old Message publsihed with persist:true Recieved", messages);
    },
    //highlight-end
  });

  const handlePublishMessage = () => {
    // publish message
    const message = "Hello Everyone!";
    publish(message, { persist: true });
  };

  return (
    <>
      <button onClick={handlePublishMessage}>Publish Message</button>
    </>
  );
}
```

## Applications of usePubSub

PubSub is a very powerful mechanism which can be used to do alot of things which can make your meeting experience much more interactive. Some of the most common usecase that we have come across for the PubSub during a meeting are listed below:

1. [`Chat`](./chat-using-pubsub): You can utilise this to develop various Chat features, such as Private Chat and Group Chat. You can follow our chat [integration guide here](./chat-using-pubsub).
2. `Raise Hand`: You can allow attendees to raise their hands at any time during the meeting, informing everyone else that someone has done so.
3. `Layout Switching`: You can change the meeting's layout for every participant at once during the meeting, such as from Grid layout to Spotlight or Grid Layout to Sidebar Layout, etc.
4. [`Whiteboard`](./canvas-drawing-using-pubsub): You can develop an interactive whiteboard functionality that is completely functional. You can follow our canvas drawing [guide here](./canvas-drawing-using-pubsub).
5. `Poll`: You may make polls, let users respond to them, and display the results at the end of a poll.
6. `Question Answer Session`: You can also design interactive functionality that is question-and-answer based.

## Downloading PubSub Messages

All the messages from the PubSub which were published with `persist : true` and can be downloaded as an `.csv` file. This file will be available in the VideoSDK dashboard as well as throught the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [usePubSub()](/react/api/sdk-reference/use-pubsub)
