---
sidebar_label: End Connection Meeting
pagination_label: End Connection Meeting
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# End Connection Meeting - Javascript

### Method

- **end** - If you want to end connected meetings, `connection.meeting.end` method is used. After executing this method, all participants of that meeting will leave automatically.

### Example

**Meeting_A** is connected with **Meeting_B**, participant of **Meeting_A** wants to end **Meeting_B**, now **Meeting_A** participant will use `connection.meeting.end` to end **Meeting_B** and all the participants joined in **Meeting_B** will leave.

```js
// Get meeting B connection
const connection = meeting.connections.get("<meeting-B-id>");

// End Meeting B
const onClick = () => {
  connection.meeting.end();
};
```
