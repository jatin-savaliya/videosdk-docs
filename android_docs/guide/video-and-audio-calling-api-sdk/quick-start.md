---
title: Quick Start with Android
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Voice / Video Call
pagination_label: Quick Start with Android
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

# Quick Start

VideoSDK enables the opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Java Development Kit.
- Android Studio 3.0 or later.
- Android SDK API Level 16 or higher.
- A mobile device that runs Android 4.1 or later.

:::important

One should have a videoSDK account to generate token.
Visit videoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Project Setup

Follow the steps to create the environment necessary to add video calls into your app.

1. For a new project in **Android Studio**, create a **Phone and Tablet** Android project with an **Empty Activity**.

:::caution
After creating the project, Android Studio automatically starts gradle sync. Ensure that the sync succeeds before you continue.
:::

2. Add the repo to project's `build.gradle` file.

```js title="build.gradle"
allprojects {
  repositories {
    // ...
    maven { url 'https://jitpack.io' }
  }
}
```

3. Add the dependency in `app/build.gradle`:

```js title="app/build.gradle"
dependencies {
  implementation 'live.videosdk:android-sdk:0.0.12'

  //Library to perform Network call to generate a meeting id
  implementation 'com.amitshekhar.android:android-networking:1.0.2'

  // other app dependencies
}
```

4. Add all the following permissions to `AndroidManifest.xml`

```xml title="AndroidManifest.xml"
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.INTERNET" />
```

5. Sync the gradle now. Once the sync is completed successfully, proceed further. If the gradle sync fails, you can check the problem you are facing in [Known Issues](/), if not found, post us on our [discord community](https://discord.gg/f2WsNDN9S5).

6. Extend the `android.app.Application` class and create `MainApplication.java` class with the following code

```java title="MainApplication.java"
package live.videosdk.demo;

import android.app.Application;
import live.videosdk.rtc.android.VideoSDK;

public class MainApplication extends Application {
    @Override
    public void onCreate() {
      super.onCreate();
      VideoSDK.initialize(getApplicationContext());
    }
}
```

7. Add `MainApplication` to `AndroidManifest.xml`

```xml title="AndroidManifest.xml"
<application
    android:name=".MainApplication" >
  <!-- ... -->
</application>
```

8. Project Structure should look like

```jsx title="Project Structure"
   app
   ├── java
   │    ├── packagename
   │         ├── MainActivity.java
   │         ├── MainApplication.java
   │         ├── MeetingActivity.java
   │         ├── ParticipantAdapter.java
   ├── res
   │    ├── layout
   │    │    ├── activity_main.xml
   │    │    ├── activity_meeting.xml
   │    │    ├── item_remote_peer.xml
```

## Start Writing Your Code

### Step 1: Creating Joining Screen

#### Creating UI

The Joining screen will consist of:

1. Create Button - This button will create a new meeting for you.
2. TextField for Meeting ID - This text field will contain the meeting ID you want to join.
3. Join Button - This button will join the meeting with `meetingId` you provided.

In `/app/res/layout/activity_main.xml`, replace the content with the following:

```xml title="activity_main.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:gravity="center"
  android:orientation="vertical"
  tools:context=".MainActivity">
  <Button
    android:id="@+id/btnCreateMeeting"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginBottom="16dp"
    android:text="Create Meeting" />
  <TextView
    style="@style/TextAppearance.AppCompat.Headline"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="OR" />
  <com.google.android.material.textfield.TextInputLayout
    style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginVertical="16dp"
    android:hint="Enter Meeting ID">
    <EditText
      android:id="@+id/etMeetingId"
      android:layout_width="250dp"
      android:layout_height="wrap_content"
      android:textColor="@color/white" />
  </com.google.android.material.textfield.TextInputLayout>
  <Button
    android:id="@+id/btnJoinMeeting"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Join Meeting" />
</LinearLayout>
```

#### Integrating Create Meeting API Call

1. Declare the variables `sampleToken` which will hold the **Sample Token** [generated from the VideoSDK dashboard](https://app.videosdk.live/api-keys)

```java title="MainActivity.java"
//Replace with the token you generated from the VideoSDK Dashboard
String sampleToken = "";
```

2. Add the `onClick` events to the Join and Create button.

```java title="MainActivity.java"
public class MainActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    final Button btnCreate = findViewById(R.id.btnCreateMeeting);
    final Button btnJoin = findViewById(R.id.btnJoinMeeting);
    final EditText etMeetingId = findViewById(R.id.etMeetingId);

    btnCreate.setOnClickListener(v -> {
      //We will be creating this method in the next step
      createMeeting(sampleToken);
    });

    btnJoin.setOnClickListener(v -> {
      Intent intent = new Intent(MainActivity.this, MeetingActivity.class);
      intent.putExtra("token", sampleToken);
      intent.putExtra("meetingId", etMeetingId.getText().toString());
      startActivity(intent);
    });
  }
}
```

3. Add the `createMeeting()` which we specified in the `onClick` event of `btnCreate`.

```java title="MainActivity.java"
public class MainActivity extends AppCompatActivity {
  //...onCreate

  private void createMeeting(String token) {
    //We will make an API call to VideoSDK Server to get a meetingId
    AndroidNetworking.post("https://api.videosdk.live/v1/meetings")
      .addHeaders("Authorization", token) //we will pass the token in the Headers
      .build()
      .getAsJSONObject(new JSONObjectRequestListener() {
        @Override
        public void onResponse(JSONObject response) {
          try {
            //Resposne will contain meetingId
            final String meetingId = response.getString("meetingId");

            //Starting the MeetingActivity with recieved meetingId and our sampleToken
            Intent intent = new Intent(MainActivity.this, MeetingAtivity.class);
            intent.putExtra("token", sampleToken)
            intent.putExtra("meetingId", meetingd);
            startActivity(intent);
          } catch (JSONException e) {
            e.printStackTrace();
          }
        }

        @Override
        public void onError(ANError anError) {
          anError.printStackTrace();
          Toast.makeText(MainActivity.this, anError.getMessage(), Toast.LENGTH_SHORT).show();
        }
    });
  }
}
```

4. Since we will be using the Camera and Audio of the device, we need to ask for runtime permissions.

```java title="MainActivity.java"
public class MainActivity extends AppCompatActivity {
  private static final int PERMISSION_REQ_ID = 22;

  private static final String[] REQUESTED_PERMISSIONS = {
    Manifest.permission.RECORD_AUDIO,
    Manifest.permission.CAMERA
  };

  private boolean checkSelfPermission(String permission, int requestCode) {
    if (ContextCompat.checkSelfPermission(this, permission) != PackageManager.PERMISSION_GRANTED) {
      ActivityCompat.requestPermissions(this, REQUESTED_PERMISSIONS, requestCode);
      return false;
    }
    return true;
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    //... button listeneres
    checkSelfPermission(REQUESTED_PERMISSIONS[0], PERMISSION_REQ_ID);
    checkSelfPermission(REQUESTED_PERMISSIONS[1], PERMISSION_REQ_ID);
  }
}
```

### Step 2: Creating Meeting Screen

Create a new Activity named `MeetingActivity.java`.

#### Creating the UI for Meeting Screen

In `/app/res/layout/activity_meeting.xml`, replace the content with the following:

```xml title="activty_meeting.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:app="http://schemas.android.com/apk/res-auto"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:gravity="center"
  android:orientation="vertical"
  tools:context=".MainActivity">
  <LinearLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_marginBottom="4dp"
    android:orientation="horizontal">
    <TextView
      android:id="@+id/tvMeetingId"
      style="@style/TextAppearance.AppCompat.Display1"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:layout_weight="1"
      android:text="Hello World!" />
      <FrameLayout
        android:layout_width="80dp"
        android:layout_height="100dp"
        android:layout_gravity="end">
        <org.webrtc.SurfaceViewRenderer
          android:id="@+id/svrLocal"
          android:layout_width="match_parent"
          android:layout_height="match_parent"
          android:visibility="visible" />
      </FrameLayout>
  </LinearLayout>
  <androidx.recyclerview.widget.RecyclerView
    android:id="@+id/rvParticipants"
    android:layout_width="match_parent"
    android:layout_height="0dp"
    android:layout_weight="1" />
  <LinearLayout
    android:layout_width="wrap_content"
    android:layout_height="wrap_content">
    <Button
      android:id="@+id/btnMic"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:layout_marginVertical="8dp"
      android:text="Mic"/>
    <Button
      android:id="@+id/btnLeave"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:layout_marginVertical="8dp"
      android:layout_marginHorizontal="8dp"
      android:text="Leave"/>
    <Button
      android:id="@+id/btnWebcam"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:layout_marginVertical="8dp"
      android:text="Webcam" />
  </LinearLayout>
</LinearLayout>
```

#### Initializing the Meeting

We will initialize the meeting with required configurations and add `MeetingEventListener` to the meeting.

```java title="MeetingActivity.java"
public class MeetingActivity extends AppCompatActivity {
  //Declare the variables we will be using to handle the meeting
  private Meeting meeting;

  private boolean micEnabled = true;
  private boolean webcamEnabled = true;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_meeting);

    final String token = getIntent().getStringExtra("token");
    final String meetingId = getIntent().getStringExtra("meetingId");
    final String participantName = "John Doe";

    // pass the token generated from api server
    VideoSDK.config(token);
    // create a new meeting instance
    meeting = VideoSDK.initMeeting(
            MeetingActivity.this, meetingId, participantName,
            micEnabled, webcamEnabled
    );
    //With this we will be able to register for the events happening at the meeting.
    meeting.addEventListener(meetingEventListener);

    meeting.join();
    ((TextView)findViewById(R.id.tvMeetingId)).setText(meetingId);
  }

  //Creating the MeetingEventListener
  private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
    @Override
    public void onMeetingJoined() {
      Log.d("#meeting", "onMeetingJoined()");
    }

    @Override
    public void onMeetingLeft() {
      Log.d("#meeting", "onMeetingLeft()");
      meeting = null;
      if (!isDestroyed()) finish();
    }

    @Override
    public void onParticipantJoined(Participant participant) {
      Toast.makeText(MeetingActivity.this, participant.getDisplayName() + " joined", Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onParticipantLeft(Participant participant) {
      Toast.makeText(MeetingActivity.this, participant.getDisplayName() + " left", Toast.LENGTH_SHORT).show();
    }
  };
}
```

### Step 3: Handling the Participants

#### Local Participant Toggles

To add the local participant webcam and mic toggle options, we will set `onClickListener` on the button and use `Meeting`'s method to toggle mic and webcam.

```java title="MeetingActivity.java"
public class MeetingActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_meeting);
    //...Meeting Setup is Here

    // Actions
    setActionListeners();
  }

  private void setActionListeners() {
    // Toggle mic
    findViewById(R.id.btnMic).setOnClickListener(view -> {
      if (micEnabled) {
        //This will mute the local participant's mic
        meeting.muteMic();
        Toast.makeText(MeetingActivity.this, "Mic Muted", Toast.LENGTH_SHORT).show();
      } else {
        //This will unmute the local participant's mic
        meeting.unmuteMic();
        Toast.makeText(MeetingActivity.this, "Mic Enabled", Toast.LENGTH_SHORT).show();
      }
    });

    // Toggle webcam
    findViewById(R.id.btnWebcam).setOnClickListener(view -> {
      if (webcamEnabled) {
        //This will disable the local participant's webcam
        meeting.disableWebcam();
        Toast.makeText(MeetingActivity.this, "Webcam Disabled", Toast.LENGTH_SHORT).show();
      } else {
        //This will enable the local participant's webcam
        meeting.enableWebcam();
        Toast.makeText(MeetingActivity.this, "Webcam Enabled", Toast.LENGTH_SHORT).show();
      }
    });

    // Leave meeting
    findViewById(R.id.btnLeave).setOnClickListener(view -> {
      //This will make the local participant leave the meeting
      meeting.leave();
    });
  }
}
```

#### Handling the Participants View

We will be showing the list of participants in a recycler view.

1. Create a new layout for the participant view named `item_remote_peer.xml` in the `res/layout` folder.

```xml title="item_remote_peer.xml"
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:app="http://schemas.android.com/apk/res-auto"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
  tools:layout_height="200dp">
  <ImageView
    android:layout_width="100dp"
    android:layout_height="100dp"
    android:layout_gravity="center"
    app:tint="@color/white" />
  <org.webrtc.SurfaceViewRenderer
    android:id="@+id/svrParticipant"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:visibility="gone" />
  <FrameLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom"
    android:background="@color/black">
    <TextView
      android:id="@+id/tvName"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:layout_gravity="center"
      android:textColor="@color/white" />
  </FrameLayout>
</FrameLayout>
```

2. Create a recycler view adapter named `ParticipantAdapter` which will show the participants list. Create `PeerViewHolder` in the adapter which will extend `RecyclerView.ViewHolder`.

```java title="ParticipantAdapter.java"
public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  private int containerHeight;

  @NonNull
  @Override
  public PeerViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
    containerHeight = parent.getHeight();
    return new PeerViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_remote_peer, parent, false));
  }

  @Override
  public void onBindViewHolder(@NonNull PeerViewHolder holder, int position) {

  }

  @Override
  public int getItemCount() {
      return 0;
  }

  static class PeerViewHolder extends RecyclerView.ViewHolder {
    //SurfaceViewRenderer to show Video Stream
    public SurfaceViewRenderer svrParticipant;
    public TextView tvName;
    public View itemView;

    PeerViewHolder(@NonNull View view) {
      super(view);
      itemView = view;
      tvName = view.findViewById(R.id.tvName);
      svrParticipant = view.findViewById(R.id.svrParticipant);
      svrParticipant.init(PeerConnectionUtils.getEglContext(), null);
    }
  }
}
```

4. Now we will create the list of `Participant` for the meeting. We will initialize this list in the constructor of the `ParticipantAdapter`

```java title="ParticipantAdapter.java"
public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  //Creating a empty list which will store all participants
  private final List<Participant> participants = new ArrayList<>();

  public ParticipantAdapter(Meeting meeting) {
    //Adding the local participant to the list
    participants.add(meeting.getLocalParticipant());

    //Adding Meeting Event listener to get the participant when someone joins or leaves the meeting
    meeting.addEventListener(new MeetingEventListener() {
      @Override
      public void onParticipantJoined(Participant participant) {
        //When new participant joins the meeting add him to the list
        participants.add(participant);
        notifyItemInserted(participants.size() - 1);
      }

      @Override
      public void onParticipantLeft(Participant participant) {
        //When participant leaves the meeting remove him from the list
        int pos = -1;
        for (int i = 0; i < participants.size(); i++) {
          if (participants.get(i).getId().equals(participant.getId())) {
            pos = i;
            break;
          }
        }

        participants.remove(participant);

        if (pos >= 0) {
          notifyItemRemoved(pos);
        }
      }
    });
  }

  //Make this method return the size of our participant list
  @Override
  public int getItemCount() {
    return participants.size();
  }
  //...
}
```

5. We have a list of participants ready. Let's set up the view holder to display a particpant video.

```java title="PartipantAdapter.java"
public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  @Override
  public void onBindViewHolder(@NonNull PeerViewHolder holder, int position) {
    Participant participant = participants.get(position);

    ViewGroup.LayoutParams layoutParams = holder.itemView.getLayoutParams();
    layoutParams.height = containerHeight / 3;
    holder.itemView.setLayoutParams(layoutParams);

    holder.tvName.setText(participant.getDisplayName());

    //Adding the initial video stream for the participant into the SurfaceViewRenderer
    for (Map.Entry<String, Stream> entry : participant.getStreams().entrySet()) {
      Stream stream = entry.getValue();
      if (stream.getKind().equalsIgnoreCase("video")) {
        holder.svrParticipant.setVisibility(View.VISIBLE);
        VideoTrack videoTrack = (VideoTrack) stream.getTrack();
        videoTrack.addSink(holder.svrParticipant);
        break;
      }
    }
    //Add Listener to the participant which will update start or stop the video stream of the participant
    participant.addEventListener(new ParticipantEventListener() {
      @Override
      public void onStreamEnabled(Stream stream) {
        if (stream.getKind().equalsIgnoreCase("video")) {
          holder.svrParticipant.setVisibility(View.VISIBLE);
          VideoTrack videoTrack = (VideoTrack) stream.getTrack();
          videoTrack.addSink(holder.svrParticipant);
        }
      }

      @Override
      public void onStreamDisabled(Stream stream) {
        if (stream.getKind().equalsIgnoreCase("video")) {
          VideoTrack track = (VideoTrack) stream.getTrack();
          if (track != null)
            track.removeSink(holder.svrParticipant);
          holder.svrParticipant.clearImage();
          holder.svrParticipant.setVisibility(View.GONE);
        }
      }
    });
  }
}
```

6. Add this adapter to the `MeetingActivity.java`

```java title="MeetingActivity.java"
@Override
protected void onCreate(Bundle savedInstanceState) {
  //Meeting Setup...
  //...
  final RecyclerView rvParticipants = findViewById(R.id.rvParticipants);
  rvParticipants.setLayoutManager(new GridLayoutManager(this, 2));
  rvParticipants.setAdapter(new ParticipantAdapter(meeting));
}
```

:::note

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example) on GitHub

:::

### Step 4: Run and Test

The app is all set to test. Make sure to update the `sampleToken` in `MainActivity.java`

Your app should look like this after the implementation.

![VideoSDK Android Quick Start Join Screen](/img/quick-start/android-join-screen.jpg) ![VideoSDK Android Quick Start Meeting Screen](/img/quick-start/android-meeting-screen.jpg)

:::caution
For the tutorial purpose, we used a static token to initialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server that will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/android/guide/video-and-audio-calling-api-sdk/server-setup).
:::
