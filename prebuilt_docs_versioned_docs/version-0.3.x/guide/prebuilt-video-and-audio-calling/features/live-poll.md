---
title: Prebuilt Live Poll Video & Audio Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Live Poll features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Live Poll
pagination_label: Live Poll
keywords:
  - audio calling
  - video calling
  - real-time communication
  - live on HLS
  - video sdk embed
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: live-poll
---

# Live Poll - Prebuilt

Using this feature a host can create polls and guest participant can submit their opnions on that poll. This guide will provide an overview of how participant can create poll.

### Poll attributes

- `canCreatePoll` : When set to `true`, you can create a poll in the meeting.

### How it works ?

- On Click of `More Options` Button you can find `Polls` selection option.

![Go live with VideoSDK](/img/prebuilt/Polls.png)

- When you pass `canCreatePoll` parameter `true` you can create poll.

![Go live with VideoSDK](/img/prebuilt/create-poll.png)

- Guest Partcipant can submit their opnions on the poll and can also see the result of their previous submitted polls as shown in image.

![Go live with VideoSDK](/img/prebuilt/poll-list.png)

```js title="index.html"
const config = {
  // ...
  permissions: {
    //  ...other permissions
    canCreatePoll: true,
  },
  // ...
};
```
