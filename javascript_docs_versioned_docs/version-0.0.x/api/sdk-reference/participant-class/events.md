---
title: Participant Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: Participant Class Events
---

<div class="sdk-api-ref-only-h4">

### stream-enabled

- `stream-enabled` is a callback which gets triggered whenever a participant's video, audio or screen share stream is enabled.

#### Example

```js
participant.on("stream-enabled", () => {
  //
});
```

---

### stream-disabled

- `stream-disabled` is a callback which gets triggered whenever a participant's video, audio or screen share stream is disabled.

#### Example

```js
participant.on("stream-disabled", () => {
  //
});
```

</div>
