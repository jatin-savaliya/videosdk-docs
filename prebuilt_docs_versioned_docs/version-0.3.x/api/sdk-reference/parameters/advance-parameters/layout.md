---
sidebar_position: 1
sidebar_label: Layout Feature Parameter
pagination_label: Layout Feature Parameter
title: Layout Feature Parameter
---

# Layout Feature Parameter - Prebuilt

<div class="sdk-api-ref-only-h4">

## layout

- type: `object`

### type

- type: `String`

- `layout.type` represents the type of layout which can be `SPOTLIGHT` | `SIDEBAR` | `GRID`

### priority

- type: `String`

- `layout.priority` represents the priority of layout type which can be `SPEAKER` | `PIN`

### gridSize

- type: `Number`

- `layout.gridSize` represents the maximum participants to be shown on the meeting screen. Max value should be **`25`**

```js
meeting.init({
  //other params
  layout: {
    type: "SPOTLIGHT", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
    priority: "SPEAKER", // "SPEAKER" | "PIN",
    gridSize: 3,
  },
  //other params
});
```

</div>
