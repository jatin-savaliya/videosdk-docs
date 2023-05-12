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

# Speaker Indication

Speaker indication feature in VideoSDK let you know, which participant in a meeting is active speaker.

Whenever any participant speaks in meeting, `speaker-changed` event will trigger.

For example, the meeting is running with **Alice** and **Bob**. Whenever any of them speaks, `speaker-changed` event will trigger and return the speaker `participantId`.

We can access `speaker-changed` event through [meeting object](/ios/guide/video-and-audio-calling-api-sdk/features/start-join-meeting#2-initialization).

### speaker-changed Event

```js
/// Called when speaker is changed
/// - Parameter participantId: participant id of the speaker, nil when no one is speaking.
func onSpeakerChanged(participantId: String?) {

    // show indicator for active speaker
    if let participant = participants.first(where: { $0.id == participantId }),

        // show indication for active speaker
        // ex. show border color
        // cell.contentView.layer.borderColor = UIColor.blue.cgColor : UIColor.clear.cgColor
    }

    // hide indicator for others participants
    let otherParticipants = participants.filter { $0.id != participantId }
    for participant in otherParticipants {

        // ex. remove border color
        //cell.contentView.layer.borderColor = UIColor.clear.cgColor
    }
}
```
