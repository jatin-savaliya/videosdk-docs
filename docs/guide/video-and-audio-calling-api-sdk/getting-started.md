---
title: Get Started with Video & Audio Call - Video SDK Documentation
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Getting Started
pagination_label: Getting Started
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: getting-started
---

import Mermaid from '@theme/Mermaid';

:::caution

**This page has been deprecated.**

We've released a new version of pages with some improvements and smoother experience.

Here is the link of each SDK for this page.

- [JS](/javascript/guide/video-and-audio-calling-api-sdk/getting-started)
- [React](/react/guide/video-and-audio-calling-api-sdk/quick-start)
- [React Native](/react-native/guide/video-and-audio-calling-api-sdk/quick-start)
- [Android](/android/guide/video-and-audio-calling-api-sdk/quick-start)
- [iOS](/ios/guide/video-and-audio-calling-api-sdk/quick-start)
- [Flutter](/flutter/guide/video-and-audio-calling-api-sdk/quick-start)

:::

# Video / Audio Getting started

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Overview

At it's core, VideoSDK RTC is a distributed SFU(Selective Forwarding Unit). It eanbles highly scalable video & audio meetings unlike vanilla webRTC.

VideoSDK enables opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.

## Steps

import Card from '@theme/Card';

<div class="container guide-steps-block">
  <div class="row ">
    <div class="col col--6">
      <Card heading="1. Signup & Create API Key" link="/docs/guide/video-and-audio-calling-api-sdk/signup-and-create-api" description="Generate Your API Key" />
    </div>
     <div class="col col--6">
      <Card heading="2. Client Setup" link="/docs/guide/video-and-audio-calling-api-sdk/supported-platforms" description="SDK Integration with client" />
    </div>
  </div>
   <div class="row ">
   <div class="col col--6" >
      <Card heading="3. Server Setup" link="/docs/guide/video-and-audio-calling-api-sdk/server-setup" description="Integrate server with API key"  />
    </div>
    <div class="col col--6">
      <Card heading="4. Start or Join Meeting" link="/docs/guide/video-and-audio-calling-api-sdk/features/start-join-meeting" description="Enter in Meeting" />
    </div>
  </div>
</div>

## Architecture

This diagram demonstrates end-to-end flow to implement video & audio calling, record calls and go-live on social media.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using Key and Secret; Your App Server-->>Your App Client: Received Token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request for meetingId; activate VideoSDK Server; Note right of VideoSDK Server: Generate unique meetingId; VideoSDK Server-->>Your App Client: meetingId Received; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Join; activate VideoSDK Server; Note right of VideoSDK Server: Broadcasting to each participants; VideoSDK Server-->>Your App Client: Meeting Joined; deactivate VideoSDK Server; Your App Client-)VideoSDK Server: Subscribe to Events; VideoSDK Server--)Your App Client: Get notified on Updates; Your App Client->>VideoSDK Server: Request to Go Live via RTMP; Note right of VideoSDK Server: Composing Real-time Stream; VideoSDK Server--)Social Media: Push RTMP Stream; Your App Client->>VideoSDK Server: Request to Start Recording; Note right of VideoSDK Server: Recording Started; VideoSDK Server-->>Your App Client: Trigger Webhook to Start Recording; Your App Client->>VideoSDK Server: Request to Leave Meeting; activate VideoSDK Server; Note right of VideoSDK Server: Participant Left; VideoSDK Server-->>Your App Client: Meeting Left; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to End Meeting; activate VideoSDK Server; Note right of VideoSDK Server: Kick off all the Participants; VideoSDK Server--)Social Media: End Pushing RTMP Stream; VideoSDK Server-->>Your App Client: Trigger Webhook to Stop Recording; VideoSDK Server-->>Your App Client: Meeting End; deactivate VideoSDK Server;`}/>
