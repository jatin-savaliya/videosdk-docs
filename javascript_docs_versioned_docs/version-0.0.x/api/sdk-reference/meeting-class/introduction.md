---
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Intro to Video SDK Meeting Class
title: Video SDK Meeting Class
---

# Video SDK Meeting Class - Javascript

<div class="sdk-api-ref">

## Introduction

The `Meeting` class includes properties, methods and events for managing a meeting, participants video, audio and share streams, messaging and UI customization.

import LinksGrid from "../../../../../src/theme/LinksGrid";
import properties from "./../data/meeting-class/properties.json";
import methods from "./../data/meeting-class/methods.json";
import events from "./../data/meeting-class/events.json";

## Meeting Properties

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [id](./properties.md#id)

</div>
<div class="col col--4 margin-bottom--sm" >

- [activeSpeakerId](./properties.md#activespeakerid)

</div>
<div class="col col--4 margin-bottom--sm" >

- [activePresenterId](./properties.md#activepresenterid)

</div>

<div class="col col--4 margin-bottom--sm">

- [hlsState](./properties#hlsstate)

</div>
<div class="col col--4 margin-bottom--sm">

- [livestreamState](./properties#livestreamstate)

</div>
<div class="col col--4 margin-bottom--sm">

- [recordingstate](./properties#recordingstate)

</div>
<div class="col col--4 margin-bottom--sm">

- [hlsUrls](./properties#hlsurls)

</div>

<div class="col col--4 margin-bottom--sm" >

- [localParticipant](./properties.md#localparticipant)

</div>
<div class="col col--4 margin-bottom--sm" >

- [participants](./properties.md#participants)

</div>
<div class="col col--4 margin-bottom--sm" >

- [pubsub](./pubsub)

</div>
<div class="col col--4 margin-bottom--sm" >

- [connections](./properties.md#connections)

</div>

</div>

## Meeting Methods

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [join](./methods.md#join)

</div>
<div class="col col--4 margin-bottom--sm" >

- [leave](./methods.md#leave)

</div>
<div class="col col--4 margin-bottom--sm" >

- [end](./methods.md#end)

</div>
<div class="col col--4 margin-bottom--sm" >

- [enableWebcam](./methods.md#enablewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableWebcam](./methods.md#disablewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [unmuteMic](./methods.md#unmutemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [muteMic](./methods.md#mutemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [enableScreenShare](./methods.md#enablescreenshare)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableScreenShare](./methods.md#disablescreenshare)

</div>
<div class="col col--4 margin-bottom--sm" >

- [uploadBase64File](/javascript/api/sdk-reference/meeting-class/methods#uploadbase64file)

</div>
<div class="col col--4 margin-bottom--sm" >

- [fetchBase64File](/javascript/api/sdk-reference/meeting-class/methods#fetchbase64file)

</div>
<div class="col col--4 margin-bottom--sm" >

- [startRecording](./methods.md#startrecording)

</div>
<div class="col col--4 margin-bottom--sm" >

- [stopRecording](./methods.md#stoprecording)

</div>
<div class="col col--4 margin-bottom--sm" >

- [startLiveStream](./methods.md#startlivestream)

</div>
<div class="col col--4 margin-bottom--sm" >

- [stopLiveStream](./methods.md#startlivestream)

</div>
<div class="col col--4 margin-bottom--sm" >

- [startHls](./methods.md#starthls)

</div>
<div class="col col--4 margin-bottom--sm" >

- [stopHls](./methods.md#stophls)

</div>
<div class="col col--4 margin-bottom--sm" >

- [getWebcams](./methods.md#getwebcams)

</div>
<div class="col col--4 margin-bottom--sm" >

- [changeWebcam](./methods.md#changewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [setWebcamQuality](./methods.md#setwebcamquality)

</div>
<div class="col col--4 margin-bottom--sm" >

- [getMics](./methods.md#getmics)

</div>
<div class="col col--4 margin-bottom--sm" >

- [changeMic](./methods.md#changemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [connectTo](./methods.md#connectto)

</div>
<div class="col col--4 margin-bottom--sm" >

- [on](./methods.md#on)

</div>
<div class="col col--4 margin-bottom--sm" >

- [off](./methods.md#off)

</div>

</div>

## Meeting Events

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [meeting-joined](./events.md#meeting-joined)

</div>
<div class="col col--4 margin-bottom--sm" >

- [meeting-left](./events.md#meeting-left)

</div>
<div class="col col--4 margin-bottom--sm" >

- [participant-joined](./events.md#participant-joined)

</div>
<div class="col col--4 margin-bottom--sm" >

- [participant-left](./events.md#participant-left)

</div>
<div class="col col--4 margin-bottom--sm" >

- [speaker-changed](./events.md#speaker-changed)

</div>
<div class="col col--4 margin-bottom--sm" >

- [presenter-changed](./events.md#presenter-changed)

</div>
<div class="col col--4 margin-bottom--sm" >

- [error](./events.md#error)

</div>
<div class="col col--4 margin-bottom--sm" >

- [entry-requested](./events.md#entry-requested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [entry-responded](./events.md#entry-responded)

</div>
<div class="col col--4 margin-bottom--sm" >

- [webcam-requested](./events.md#webcam-requested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [mic-requested](./events.md#mic-requested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [recording-started](./events.md#recording-started)

</div>
<div class="col col--4 margin-bottom--sm" >

- [recording-stopped](./events.md#recording-stopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [livestream-started](./events.md#livestream-started)

</div>
<div class="col col--4 margin-bottom--sm" >

- [livestream-stopped](./events.md#livestream-stopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [hls-started](./events.md#hls-started)

</div>
<div class="col col--4 margin-bottom--sm" >

- [hls-stopped](./events.md#hls-stopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [connection-open](./events.md#connection-open)

</div>
<div class="col col--4 margin-bottom--sm" >

- [connection-close](./events.md#connection-close)

</div>
<div class="col col--4 margin-bottom--sm" >

- [switch-meeting](./events.md#switch-meeting)

</div>

<div class="col col--4 margin-bottom--sm" >

- [meeting-state-changed](./events.md#meeting-state-changed)

</div>

</div>

</div>
