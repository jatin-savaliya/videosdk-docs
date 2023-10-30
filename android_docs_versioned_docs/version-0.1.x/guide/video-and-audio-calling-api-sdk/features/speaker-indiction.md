---
title: Speaker Indication Video & Audio Call - Video SDK Docs
hide_title: false
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

# Speaker Indication - Android

Speaker indication feature in VideoSDK let you know, which participant is active speaker in a meeting.

Whenever any participant speaks in meeting, `onSpeakerChanged` event will trigger.

For example, the meeting is running with **Alice** and **Bob**. Whenever any of them speaks, `onSpeakerChanged` event will trigger and return the speaker `participantId`.

We can access `onSpeakerChanged` event through [meeting object](../../../api/sdk-reference/meeting-class/introduction.md).

### onSpeakerChanged Event

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
     // ...
    override fun onSpeakerChanged(participantId: String?) {
        Toast.makeText(this@MainActivity, "active Speaker Id" + participantId, Toast.LENGTH_SHORT).show();
        super.onSpeakerChanged(participantId)
    }
};
```

</TabItem>

<TabItem value="Java">

```js
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
     // ...
    @Override
    public void onSpeakerChanged(String participantId) {
        Toast.makeText(MainActivity.this, "active Speaker Id" + participantId, Toast.LENGTH_SHORT).show();
        super.onSpeakerChanged(participantId);
    }
};
```

</TabItem>

</Tabs>
