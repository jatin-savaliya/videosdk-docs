---
title: Quickstart for Prebuilt JS
hide_title: false
hide_table_of_contents: false
description: videosdk.live tutorials will help you to deep dive into details of all the SDK and API. We tried to include example of all the possible programming langaguges.
sidebar_label: with Prebuilt JS
pagination_label: Quickstart for Prebuilt JS
keywords:
  - video api
  - prebuilt-js
  - embedded-sdk
  - tutorials
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quickstart-prebuilt-js
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart for Prebuilt JS

Prebuilt SDK enables opportunity to integrate real-time communication SDK witout writing explicit code. It just requires 10 minutes to integrate.

It supports all the modern frameworks such as plain JavaScript, React JS, Vue and Angular.

:::note

Also check out this [example code](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example) on github or [download](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example/archive/refs/tags/v0.1.1.zip) the full source code and unzip on your computer to get started quickly.

:::

## Step 1: Signup with videosdk.live

Visit [https://app.videosdk.live/settings/api-keys](https://app.videosdk.live/settings/api-keys) and signup with your Google or Github account to generate a new **API key** to run the prebuilt.

## Step 2: Add script and setup the meeting

Create an `index.html` file and add the following `<script>` tag at the end of your code's `<body>` tag. Intialize `VideoSDKMeeting` after the script gets loaded. Replace the `apiKey` with the one generated in **Step 1**.

```html title="index.html"
<script>
  var script = document.createElement("script");
  script.type = "text/javascript";

  script.addEventListener("load", function (event) {
    const meeting = new VideoSDKMeeting();

    const config = {
      name: "John Doe",
      apiKey: "<API KEY>", // generated in step 1
      meetingId: "milkyway", // enter your meeting id

      containerId: null,
      redirectOnLeave: "https://www.videosdk.live/",

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,
      pollEnabled: true,
      whiteboardEnabled: true,
      raiseHandEnabled: true,

      recordingEnabled: true,
      recordingWebhookUrl: "https://www.videosdk.live/callback",
      recordingAWSDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path
      autoStartRecording: true, // auto start recording on participant joined

      brandingEnabled: true,
      brandLogoURL: "https://picsum.photos/200",
      brandName: "Awesome startup",
      poweredBy: true,

      participantCanLeave: true, // if false, leave button won't be visible

      // Live stream meeting to youtube
      livestream: {
        autoStart: true,
        outputs: [
          // {
          //   url: "rtmp://x.rtmp.youtube.com/live2",
          //   streamKey: "<STREAM KEY FROM YOUTUBE>",
          // },
        ],
      },

      permissions: {
        askToJoin: false, // Ask joined participants for entry in meeting
        toggleParticipantMic: true, // Can toggle other participant's mic
        toggleParticipantWebcam: true, // Can toggle other participant's webcam
        toggleParticipantScreenshare: true, // Can toggle other partcipant's screen share
        drawOnWhiteboard: true, // Can draw on whiteboard
        toggleWhiteboard: true, // Can toggle whiteboard
        toggleVirtualBackground:true // Can toggle virtual background
        toggleRecording: true, // Can toggle meeting recording
        removeParticipant: true, // Can remove participant
        endMeeting: true, // Can end meeting
      },

      joinScreen: {
        visible: true, // Show the join screen ?
        title: "Daily scrum", // Meeting title
        meetingUrl: window.location.href, // Meeting joining url
      },

      pin: {
        allowed: true, // participant can pin any participant in meeting
        layout: "SPOTLIGHT", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
      },

      leftScreen: {
        // visible when redirect on leave not provieded
        actionButton: {
          // optional action button
          label: "Video SDK Live", // action button label
          href: "https://videosdk.live/", // action button href
        },
      },

      notificationSoundEnabled: true,

      maxResolution: "sd", // "hd" or "sd"
    };

    meeting.init(config);
  });

  script.src =
    "https://sdk.videosdk.live/rtc-js-prebuilt/0.2.6/rtc-js-prebuilt.js";
  document.getElementsByTagName("head")[0].appendChild(script);
</script>
```

## Step 3: Run the application

Install any http server if you don't already have one and run the server to join meeting from browser.

<Tabs
defaultValue="node"
groupId={"server-group-id"}
values={[
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'PHP', value: 'php'},
{label: 'WAMP', value: 'wamp'},
{label: 'XAMPP', value: 'xampp'},
]}>
<TabItem value="node">

```bash
$ npm install -g live-server
$ live-server --port=8000
```

and open [http://localhost:8000](http://localhost:8000) in your web browser

</TabItem>
<TabItem value="python">

```bash
$ python3 -m http.server
```

and open [http://localhost:8000](http://localhost:8000) in your web browser

</TabItem>
<TabItem value="php">

```bash
$ php -S localhost:8000
```

and open [http://localhost:8000](http://localhost:8000) in your web browser

</TabItem>
<TabItem value="wamp">

```
Move the html file to C:\wamp\www and start the WAMP server
```

and open [http://localhost/index.html](http://localhost/index.html) in your web browser

</TabItem>
<TabItem value="xampp">

```
Move the html file to C:\xampp\htdocs and start the XAMPP server
```

and open [http://localhost/index.html](http://localhost/index.html) in your web browser

</TabItem>
</Tabs>

![Prebuilt SDK Example to add video call widget in your web application](/img/tutorial/integrate-it-anywhere.jpg)

:::tip

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example) on github or [download](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example/archive/refs/tags/v0.1.1.zip) the full source code and unzip on your computer.

:::
