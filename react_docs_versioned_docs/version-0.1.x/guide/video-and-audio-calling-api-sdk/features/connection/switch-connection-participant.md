---
sidebar_label: Switch Connection Participant
pagination_label: Switch Connection Participant
---

# Switch Particpant from Connected Meeting - React

### Method

- **switchTo** - If you want a participant from a connected meeting to be switched from one meeting to another meeting, `switchTo` method is used.
  This method accept `meetingId`, `token` and `payload` as an object.

  - `meetingId` - This should be the `meetingId` where you want to switch that participant from the joined meeting.

### Event

- **switch-meeting** - This event will emit at participant side who is going to be switch with arguments `meetingId`, `payload`, `token`, `connectionParticipantId` and `connectionMeetingId`

:::note

- While calling `switchTo()`, you need to pass a pre-generated token so that participant can reinitialize and join that meeting with the latest token on `switch-meeting` event.
- `switch-meeting` event will not switch that participant without any action.

:::

### Example

**Meeting_A** is connected with **Meeting_B**, there are participants `P1` in **Meeting_A** and `P2` in **Meeting_B**, now **Meeting_A** participant `P1` wants to switch `P2` participant from **Meeting_B** to **Meeting_A**, then participant `P1` will call:

`connectionParticipant.switchTo({ meetingId, token, payload })`

after that `P2` from **Meeting_B** will receive an event `switch-meeting`.

### **Method and Event Code**

```js
import { useMeeting, useConnection } from "@videosdk.live/react-sdk";

// Get meeting B connection
const { connection } = useConnection("<meeting-B-id>");

// Get participant of meeting B
const connectionParticipant =
  connection.meeting.participants.get("<participant-id>");

// Here participant from meeting A requests to switch particpant from meeting B to A
const onClick = () => {
  const meetingId = "<meeting-A-id>";
  const token = "JWT";
  const payload = "payload";

  connectionParticipant.switchTo({ meetingId, token, payload });
};

useMeeting({
  onSwitchMeeting: ({
    meetingId,
    payload,
    token,
    connectionParticipantId,
    connectionMeetingId,
  }) => {
    // Resetting token and meetingId at participant side
    setToken(token);
    setMeetingId(meetingId);
  },
});
```

For **React** Developer, you need to slightly modify in [Initialization](/react/guide/video-and-audio-calling-api-sdk/features/start-join-meeting#2-initialization) config props.

```js
const App = () => {
  return (
    <MeetingProvider
      config={{
        meetingId: "<Id-on-meeting>",
        name: "<Name-of-participant>",
        micEnabled: "<Flag-to-enable-mic>",
        webcamEnabled: "<Flag-to-enable-webcam>",
        reInitialiseMeetingOnConfigChange: true, // Add This Line
      }}
      token={"<Authentication-token>"}
    >
      <>...</>
    </MeetingProvider>
  );
};
```

`reInitialiseMeetingOnConfigChange` prop help you to update token and meeting id at run time, you don't have to rejoin or reinitialize the meeting.

The reason we are using this props is we are resetting meetingId and token at participant side [switch-meeting](/react/guide/video-and-audio-calling-api-sdk/features/connection/switch-connection-participant#event) event.

If you not specify this props, MeetingProvider will not able to reset meetingId and token at run time.
