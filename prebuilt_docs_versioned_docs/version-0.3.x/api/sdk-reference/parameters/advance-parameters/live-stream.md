---
sidebar_position: 1
sidebar_label: LiveStream Parameters
pagination_label: LiveStream Parameters
title: LiveStream Parameters
---

# LiveStream Parameters - Prebuilt

<div class="sdk-api-ref-only-h4">

## livestream

- type: `object`

### enabled

- type: `Boolean`

- `livestream.enabled` enables partcipant for live streaming.

### autostart

- type: `Boolean`

- `livestream.autostart` autostart live streaming if set to `true` when meeting gets started.

### theme

- type: `String`

- `livestream.theme` represents the theme of live streaming which can be `DARK` , `LIGHT` or `DEFAULT`.

### outputs

- type: `json object array`

- {streamKey,url}

  - type: `{ url: String, streamKey: String }[]`

  - here you have to mention your streamKey and url of live streaming platform.

```js
meeting.init({
  //other params
  livestream: {
    enabled: true,
    autoStart: true,
    theme: "DARK" // DARK | LIGHT | DEFAULT
    outputs: [
      {
        url: "rtmp://x.rtmp.youtube.com/live2",
        streamKey: "dmkp-2x3k-ksxk-6rrg-f73b",
      },
    ],
  },
  //other params
});
```

</div>
