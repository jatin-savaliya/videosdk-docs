---
sidebar_position: 1
sidebar_label: Remove Participant
---

# Remove Participant - API

Use the following Rest API to remove a participant from a running session.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
groupId={"server-group-id"}
values={[
{label: 'cURL request', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js
cURL -H "Content-Type: application/json" \
     -H "Authorization: $YOUR_JWT_TOKEN" \
     -d '{"participantId": "<participant-id>"}' \
     -XPOST \
     https://api.videosdk.live/v1/meeting-sessions/:id/remove-participant
```

</TabItem>
<TabItem value="node">

```js
var request = require("node-fetch");

var options = {
  method: "POST",
  url: "https://api.videosdk.live/v1/meeting-sessions/:id/remove-participant",
  headers: { authorization: `${YOUR_JWT_TOKEN}` },
  body: JSON.stringify({ participantId: "<participant-id>" }),
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

</TabItem>
<TabItem value="python">

```python
import requests

url = "https://api.videosdk.live/v1/meeting-sessions/:id/remove-participant"

headers = {'authorization': f'Bearer {YOUR_JWT_TOKEN}'}

data = {"participantId": "<participant-id>"}

response = requests.request("POST", url, headers=headers, data=data)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.videosdk.live/v1/meeting-sessions/:id/remove-participant")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["authorization"] = "Bearer #{YOUR_JWT_TOKEN}"
request.body = "{\"participantId\":\"<participant-id>\"}"

response = http.request(request)
puts response.read_body
```

</TabItem>

<TabItem value="result">

```js
{
    "id": "61adc697a239e84d0aaa7e15",
    "meetingId": "25af-rsr2-lk92",
    "start": "2021-12-06T08:15:19.121Z",
    "end": null,
    "participants": [
        {
            "participantId": "c7wgj9sd",
            "name": "John Dow",
            "timelog": [
                {
                    "start": "2021-12-06T08:15:20.565Z",
                    "end": null
                }
            ]
        },
        {
            "participantId": "ofwb7db6",
            "name": "John Dow",
            "timelog": [
                {
                    "start": "2021-12-06T08:15:27.585Z",
                    "end": null
                }
            ]
        }
    ]
}
```

</TabItem>
</Tabs>

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Request

<MethodListGroup>
    <MethodListGroup>
      <MethodListHeading heading="Path Parameters" />
      <MethodListItemLabel name="id" option={"session-id"} type={"string"} />
    </MethodListGroup>
</MethodListGroup>

### Response

<MethodListGroup>
  <MethodListItemLabel name="__response"  type={"object"} >
    <MethodListGroup>
    <MethodListHeading heading="Properties" />
          <MethodListItemLabel name="id"  type={"string"} />
          <MethodListItemLabel name="meetingId"  type={"string"} />
          <MethodListItemLabel name="start"  type={"date"} />
          <MethodListItemLabel name="end"  type={"date"} />
          <MethodListItemLabel name="participants" type={"Array<object>"} >
            <MethodListGroup>
              <MethodListItemLabel name="participantId"  type={"string"} />
              <MethodListItemLabel name="name"  type={"string"} />
               <MethodListItemLabel name="timelog" type={"Array<object>"} >
               <MethodListGroup>
                    <MethodListItemLabel name="start"  type={"date"} />
                    <MethodListItemLabel name="end"  type={"date"} />
                </MethodListGroup>
                </MethodListItemLabel>
            </MethodListGroup>
          </MethodListItemLabel>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
