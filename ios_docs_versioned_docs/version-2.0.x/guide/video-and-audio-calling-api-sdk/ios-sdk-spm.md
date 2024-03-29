---
sidebar_label: Client Setup using SPM
pagination_label: Client Setup using SPM
---

# Client Setup using SPM - iOS

### Step 1: Copy the below package link.

```js
  https://github.com/videosdk-live/videosdk-rtc-ios-spm
```

### Step 2: Navigate to your XCode project.

Now select **File > Add Package Dependencies..** in Menu bar.

![VideoSDK-iOS-SPM](https://cdn.videosdk.live/website-resources/docs-resources/videosdk-spm-step1.png)

### Step 3: Add Package

- Paste the above package link into the search bar. Select the dependency rule to the `branch` main.

- Add the package, it should fetch the package.

![VideoSDK-iOS-SPM](https://cdn.videosdk.live/website-resources/docs-resources/videosdk-spm-step2.png)

- Add the fetched package.

![VideoSDK-iOS-SPM](https://cdn.videosdk.live/website-resources/docs-resources/videosdk-spm-step3.png)

- After the package is added successfully, it should show it in navigation panel under package dependencies section.

![VideoSDK-iOS-SPM](https://cdn.videosdk.live/website-resources/docs-resources/videosdk-spm-step4.png)

### Step 4: Add permission to use microphone and camera. Insert following lines on code in info.plist

```js title="info.plist"
<key>NSCameraUsageDescription</key>
<string>Allow camera access to start video.</string>

<key>NSMicrophoneUsageDescription</key>
<string>Allow microphone access to start audio.</string>
```


### Step 5: Import package

Import the package into your project files using `import VideoSDKRTC` to start using the VideoSDK package.

![VideoSDK-iOS-SPM](https://cdn.videosdk.live/website-resources/docs-resources/videosdk-spm-step5.png)
