/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //livestreamingSidebar: [{ type: "autogenerated", dirName: "live-streaming" }],
  /*realtimeCommunicationSidebar: [
    { type: "autogenerated", dirName: "realtime-communication" },
  ],*/
  overview: [
    {
      type: "category",
      label: "Dashboard",
      items: [
        "overview/dashboard/getting-started",
        //"overview/dashboard/features"
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Video & Audio Calling",
      items: [
        "overview/video-and-audio-calling-api-sdk/getting-started",
        "overview/video-and-audio-calling-api-sdk/architecture",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Interactive Live Streaming",
      items: [
        "overview/interactive-live-streaming/getting-started",
        "overview/interactive-live-streaming/architecture",
      ],
      collapsed: true,
    },
    // {
    //   type: "category",
    //   label: "Real Time Communication",
    //   items: [
    //     "overview/real-time-communication/introduction",
    //     // "overview/real-time-communication/features",
    //   ],
    //   collapsed: true,
    // },
    {
      type: "category",
      label: "Standard Live Streaming",
      items: [
        //"overview/live-streaming/introduction",
        // "overview/live-streaming/features",
        "overview/live-streaming/getting-started",
        "overview/live-streaming/architecture",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Video On Demand",
      items: [
        // "overview/video-on-demand/introduction",
        // "overview/video-on-demand/features",
        "overview/video-on-demand/getting-started",
        "overview/video-on-demand/architecture",
      ],
      collapsed: true,
    },
  ],

  // Guide to learn about each SDK
  guideDashboard: [
    {
      type: "category",
      label: "Guide",
      items: ["guide/dashboard/getting-started"],
      collapsed: true,
    },
    // {
    //   type: "category",
    //   label: "Pages",
    //   items: [
    //     "guide/dashboard/dashboard-home",
    //     "guide/dashboard/dashboard-home",

    //     "guide/dashboard/meetings",
    //     "guide/dashboard/video-on-demand",
    //     "guide/dashboard/live-streaming",
    //     "guide/dashboard/profile-and-billing",
    //     "guide/dashboard/start-tour-and-quick-start",
    //   ],
    //   collapsed: true,
    // },
    // {
    //   type: "category",
    //   label: "How to ?",
    //   items: [
    //     "guide/dashboard/create-api-key",
    //     "guide/dashboard/domain-whitelisting",
    //   ],
    //   collapsed: true,
    // },
  ],

  guidePrebuiltVideoCalling: [
    {
      type: "category",
      label: "GUIDE",
      items: ["guide/prebuilt-video-and-audio-calling/getting-started"],
      collapsed: true,
    },
    {
      type: "category",
      label: "SETUP",
      items: [
        "guide/prebuilt-video-and-audio-calling/signup-and-create-api",
        {
          type: "category",
          label: "Client Setup",
          items: [
            "guide/prebuilt-video-and-audio-calling/using-script",
            "guide/prebuilt-video-and-audio-calling/using-npm",
          ],
          collapsed: true,
        },
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "FEATURES",
      items: [
        "guide/prebuilt-video-and-audio-calling/features/join-screen",
        "guide/prebuilt-video-and-audio-calling/features/camera-controls",
        "guide/prebuilt-video-and-audio-calling/features/mic-controls",
        "guide/prebuilt-video-and-audio-calling/features/redirect-on-leave",
        "guide/prebuilt-video-and-audio-calling/features/screenshare",
        "guide/prebuilt-video-and-audio-calling/features/send-messages",
        "guide/prebuilt-video-and-audio-calling/features/record-meeting",
        "guide/prebuilt-video-and-audio-calling/features/go-live-social-media",
        "guide/prebuilt-video-and-audio-calling/features/go-live-hls",
        "guide/prebuilt-video-and-audio-calling/features/virtual-background",
        "guide/prebuilt-video-and-audio-calling/features/noise-removal",
        "guide/prebuilt-video-and-audio-calling/features/live-poll",
        "guide/prebuilt-video-and-audio-calling/features/theme",
        "guide/prebuilt-video-and-audio-calling/features/customize-branding",
        "guide/prebuilt-video-and-audio-calling/features/customize-permissions",
        "guide/prebuilt-video-and-audio-calling/features/whitelist-domain",
        "guide/prebuilt-video-and-audio-calling/features/pin-participants",
        "guide/prebuilt-video-and-audio-calling/features/remove-participant",
        "guide/prebuilt-video-and-audio-calling/features/end-meeting",
        "guide/prebuilt-video-and-audio-calling/features/whiteboard",
        "guide/prebuilt-video-and-audio-calling/features/left-screen",
        "guide/prebuilt-video-and-audio-calling/features/waiting-screen",
        "guide/prebuilt-video-and-audio-calling/features/debug-mode",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "ADVANCED",
      items: [
        "guide/prebuilt-video-and-audio-calling/advanced/browser-compatibility",
      ],
      collapsed: false,
    },
  ],

  guideAudioAndVideoCalling: [
    {
      type: "category",
      label: "GUIDE",
      items: ["guide/video-and-audio-calling-api-sdk/getting-started"],
      collapsed: true,
    },
    {
      type: "category",
      label: "SETUP",
      items: [
        "guide/video-and-audio-calling-api-sdk/signup-and-create-api",
        {
          type: "category",
          label: "Client Setup",
          items: [
            "guide/video-and-audio-calling-api-sdk/supported-platforms",
            "guide/video-and-audio-calling-api-sdk/javascript-sdk",
            "guide/video-and-audio-calling-api-sdk/react-js-sdk",
            "guide/video-and-audio-calling-api-sdk/react-native-android-sdk",
            "guide/video-and-audio-calling-api-sdk/react-native-ios-sdk",
            "guide/video-and-audio-calling-api-sdk/android-sdk",
            "guide/video-and-audio-calling-api-sdk/ios-sdk",
            "guide/video-and-audio-calling-api-sdk/flutter-sdk",
          ],
          collapsed: true,
        },
        "guide/video-and-audio-calling-api-sdk/server-setup",
        // "guide/video-and-audio-calling-api-sdk/start-or-join-meeting",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "FEATURES",
      items: [
        // "guide/video-and-audio-calling-api-sdk/features/initilize-meeting-factory",
        "guide/video-and-audio-calling-api-sdk/features/start-join-meeting",
        "guide/video-and-audio-calling-api-sdk/features/manage-participants",
        "guide/video-and-audio-calling-api-sdk/features/leave-end-meeting",
        "guide/video-and-audio-calling-api-sdk/features/camera-controls",
        "guide/video-and-audio-calling-api-sdk/features/mic-controls",
        "guide/video-and-audio-calling-api-sdk/features/screenshare",
        "guide/video-and-audio-calling-api-sdk/features/toggle-participant-media",
        "guide/video-and-audio-calling-api-sdk/features/send-messages",
        "guide/video-and-audio-calling-api-sdk/features/record-meeting",
        "guide/video-and-audio-calling-api-sdk/features/play-external-video",
        "guide/video-and-audio-calling-api-sdk/features/go-live-social-media",
        "guide/video-and-audio-calling-api-sdk/features/speaker-indication",
        "guide/video-and-audio-calling-api-sdk/features/pin-participants",
        // "guide/video-and-audio-calling-api-sdk/features/switch-participant",
        // {
        //   type: "category",
        //   label: "Connect Meetings (BETA)",
        //   items: [
        //     "guide/video-and-audio-calling-api-sdk/features/connection/overview",
        //     "guide/video-and-audio-calling-api-sdk/features/connection/establish-connection",
        //     "guide/video-and-audio-calling-api-sdk/features/connection/get-connection",
        //     "guide/video-and-audio-calling-api-sdk/features/connection/list-connection-participant",
        //     "guide/video-and-audio-calling-api-sdk/features/connection/send-message-to-connection",
        //     "guide/video-and-audio-calling-api-sdk/features/connection/switch-connection-participant",
        //     "guide/video-and-audio-calling-api-sdk/features/connection/end-connection-meeting",
        //     "guide/video-and-audio-calling-api-sdk/features/connection/close-connection",
        //   ],
        //   collapsed: true,
        // },
        "guide/video-and-audio-calling-api-sdk/features/error-event",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Extras",
      items: [
        "guide/video-and-audio-calling-api-sdk/extras/react-native-ios-screen-share",
      ],
      collapsed: true,
    },
  ],

  guideStandardLiveStreaming: [
    {
      type: "category",
      label: "Guide",
      items: ["guide/standard-live-streaming-api-sdk/getting-started"],
      collapsed: true,
    },
    {
      type: "category",
      label: "Quick Setup",
      items: [
        "guide/standard-live-streaming-api-sdk/signup-and-create-api",
        "guide/standard-live-streaming-api-sdk/authentication",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Basic Features",
      items: [
        "guide/standard-live-streaming-api-sdk/features/create-new-live-stream",
        "guide/standard-live-streaming-api-sdk/features/go-live-with-rtmp",
        "guide/standard-live-streaming-api-sdk/features/play-live-stream",
        "guide/standard-live-streaming-api-sdk/features/record-live-stream",
        "guide/standard-live-streaming-api-sdk/features/restream-social-media",
        "guide/standard-live-streaming-api-sdk/features/fetch-listof-live-stream",
        "guide/standard-live-streaming-api-sdk/features/get-live-stream-details",
        "guide/standard-live-streaming-api-sdk/features/update-live-stream",
      ],
      collapsed: true,
    },
  ],

  guideVideoOnDemand: [
    {
      type: "category",
      label: "Guide",
      items: ["guide/video-on-demand/getting-started"],
      collapsed: true,
    },
    {
      type: "category",
      label: "Quick Setup",
      items: [
        "guide/video-on-demand/signup-and-create-api",
        "guide/video-on-demand/authentication",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Features",
      items: [
        {
          type: "category",
          label: "File",
          items: [
            "guide/video-on-demand/features/upload-file",
            "guide/video-on-demand/features/list-all-files",
            "guide/video-on-demand/features/get-file-details",
            "guide/video-on-demand/features/delete-file",
          ],
          collapsed: true,
        },
        {
          type: "category",
          label: "Encoding",
          items: [
            "guide/video-on-demand/features/create-encoding-job",
            "guide/video-on-demand/features/list-encoding-jobs",
            "guide/video-on-demand/features/get-encoding-job-details",
            "guide/video-on-demand/features/delete-encoding-job",
          ],
          collapsed: true,
        },
        "guide/video-on-demand/features/play-video",
      ],

      collapsed: true,
    },
  ],

  realtimeCommunicationSidebar: [
    {
      type: "category",
      label: "Real Time Communication",
      items: [
        "api-reference/realtime-communication/intro",
        "api-reference/realtime-communication/architecture",
      ],
      collapsed: true,
    },

    {
      type: "category",
      label: "Rest API Reference",
      collapsed: true,
      items: [
        "api-reference/realtime-communication/auth",
        "api-reference/realtime-communication/create-join-meeting",
        "api-reference/realtime-communication/list-all-meetings",
        "api-reference/realtime-communication/get-meeting-details",
        {
          type: "category",
          label: "Sessions",
          collapsed: true,
          items: [
            "api-reference/realtime-communication/list-meeting-sessions",
            "api-reference/realtime-communication/get-session-details",
            "api-reference/realtime-communication/end-session",
            "api-reference/realtime-communication/remove-participant",
          ],
        },
        {
          type: "category",
          label: "Recordings",
          collapsed: true,
          items: [
            "api-reference/realtime-communication/list-recordings",
            "api-reference/realtime-communication/get-recording-details",
            "api-reference/realtime-communication/remove-recording",
          ],
        },
      ],
      collapsed: true,
    },
    // {
    //   type: "category",
    //   label: "SDK Reference",
    //   collapsed: true,
    //   items: [
    //     {
    //       type: "category",
    //       label: "PREBUILT SDK JS",
    //       collapsed: true,
    //       items: [
    //         "api-reference/realtime-communication/sdk-reference/prebuilt-sdk-js/setup",
    //         "api-reference/realtime-communication/sdk-reference/prebuilt-sdk-js/video-sdk-meeting",
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "JAVASCRIPT SDK",
    //       collapsed: true,
    //       items: [
    //         "api-reference/realtime-communication/sdk-reference/javascript-sdk/setup",
    //         "api-reference/realtime-communication/sdk-reference/javascript-sdk/meeting-class",
    //         "api-reference/realtime-communication/sdk-reference/javascript-sdk/participant-class",
    //         "api-reference/realtime-communication/sdk-reference/javascript-sdk/stream-class",
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "REACT SDK",
    //       collapsed: true,
    //       items: [
    //         "api-reference/realtime-communication/sdk-reference/react-sdk/setup",
    //         "api-reference/realtime-communication/sdk-reference/react-sdk/use-meeting",
    //         "api-reference/realtime-communication/sdk-reference/react-sdk/use-participant",
    //         "api-reference/realtime-communication/sdk-reference/react-sdk/meeting-provider",
    //         "api-reference/realtime-communication/sdk-reference/react-sdk/meeting-consumer",
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "REACT NATIVE SDK",
    //       collapsed: true,
    //       items: [
    //         "api-reference/realtime-communication/sdk-reference/react-native-sdk/setup",
    //         "api-reference/realtime-communication/sdk-reference/react-native-sdk/setup-android",
    //         "api-reference/realtime-communication/sdk-reference/react-native-sdk/setup-ios",
    //         "api-reference/realtime-communication/sdk-reference/react-native-sdk/rtc-stream",
    //         "api-reference/realtime-communication/sdk-reference/react-native-sdk/use-meeting",
    //         "api-reference/realtime-communication/sdk-reference/react-native-sdk/use-participant",
    //         "api-reference/realtime-communication/sdk-reference/react-native-sdk/meeting-provider",
    //         "api-reference/realtime-communication/sdk-reference/react-native-sdk/meeting-consumer",
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "ELECTRON SDK",
    //       collapsed: true,
    //       items: ["api-reference/realtime-communication/sdk-reference/electron-sdk/setup"],
    //     },
    //     {
    //       type: "category",
    //       label: "ANDROID SDK",
    //       collapsed: true,
    //       items: [
    //         "api-reference/realtime-communication/sdk-reference/android-sdk/setup",
    //         "api-reference/realtime-communication/sdk-reference/android-sdk/video-sdk-class",
    //         "api-reference/realtime-communication/sdk-reference/android-sdk/meeting-class",
    //         "api-reference/realtime-communication/sdk-reference/android-sdk/participant-class",
    //         "api-reference/realtime-communication/sdk-reference/android-sdk/stream-class",
    //         "api-reference/realtime-communication/sdk-reference/android-sdk/meeting-event-listener-class",
    //         "api-reference/realtime-communication/sdk-reference/android-sdk/participant-event-listener-class",
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "IOS SDK",
    //       collapsed: true,
    //       items: [
    //         "api-reference/realtime-communication/sdk-reference/ios-sdk/setup",
    //         "api-reference/realtime-communication/sdk-reference/ios-sdk/video-sdk-class",
    //         "api-reference/realtime-communication/sdk-reference/ios-sdk/meeting-class",
    //         "api-reference/realtime-communication/sdk-reference/ios-sdk/participant-class",
    //         "api-reference/realtime-communication/sdk-reference/ios-sdk/stream-class",
    //         "api-reference/realtime-communication/sdk-reference/ios-sdk/meeting-event-listener-class",
    //         "api-reference/realtime-communication/sdk-reference/ios-sdk/participant-event-listener-class",
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "FLUTTER SDK",
    //       collapsed: true,
    //       items: [
    //         "api-reference/realtime-communication/sdk-reference/flutter-sdk/setup",
    //         "api-reference/realtime-communication/sdk-reference/flutter-sdk/meeting-builder-widget",
    //         "api-reference/realtime-communication/sdk-reference/flutter-sdk/meeting-class",
    //         "api-reference/realtime-communication/sdk-reference/flutter-sdk/participant-class",
    //         "api-reference/realtime-communication/sdk-reference/flutter-sdk/stream-class",
    //       ],
    //     },
    //   ],
    // },
    {
      type: "category",
      label: "See Also",
      items: [
        //"api-reference/realtime-communication/see-also/architecture",
        "api-reference/realtime-communication/see-also/device-browser-support",
        //"api-reference/realtime-communication/see-also/demos",
        //"api-reference/realtime-communication/see-also/hippa-healthcare",
      ],
      collapsed: true,
    },
  ],

  livestreamingSidebar: [
    {
      type: "category",
      label: "Live Streaming",
      items: ["api-reference/live-streaming/intro"],
      collapsed: true,
    },
    /*{
      type: "category",
      label: "GET STARTED",
      items: [
        "api-reference/live-streaming/get-started/features",
        "api-reference/live-streaming/get-started/live-streaming-with-rest-api",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "TUTORIALS",
      items: ["api-reference/live-streaming/tutorials/live-streaming-tutorial"],
      collapsed: true,
    },*/

    {
      type: "category",
      label: "Rest API Reference",
      items: [
        "api-reference/live-streaming/auth",
        "api-reference/live-streaming/create-live-stream",
        "api-reference/live-streaming/list-live-streams",
        "api-reference/live-streaming/get-live-stream",
        "api-reference/live-streaming/update-live-stream",
        "api-reference/live-streaming/delete-live-stream",
      ],
      collapsed: true,
    },
  ],

  videoondemandSidebar: [
    {
      type: "category",
      label: "Video On Demand",
      items: ["api-reference/video-on-demand/intro"],
      collapsed: true,
    },
    {
      type: "category",
      label: "Storage Rest API Reference",
      items: [
        "api-reference/video-on-demand/storage-api-reference/auth",
        "api-reference/video-on-demand/storage-api-reference/create-new-url",
        "api-reference/video-on-demand/storage-api-reference/upload-file",
        "api-reference/video-on-demand/storage-api-reference/list-all-files",
        "api-reference/video-on-demand/storage-api-reference/get-file-details",
        "api-reference/video-on-demand/storage-api-reference/delete-file",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Encoding Rest API Reference",
      items: [
        "api-reference/video-on-demand/encoding-api-reference/auth",
        "api-reference/video-on-demand/encoding-api-reference/create-encoding-job",
        "api-reference/video-on-demand/encoding-api-reference/list-all-encoding-jobs",
        "api-reference/video-on-demand/encoding-api-reference/get-encoding-job-details",
        "api-reference/video-on-demand/encoding-api-reference/delete-encoding-job",
      ],
      collapsed: true,
    },
  ],

  tutorials: [
    {
      type: "category",
      label: "Get Started",
      items: ["tutorials/introduction"],
      collapsed: true,
    },
    {
      type: "category",
      label: "User Dashboard",
      items: ["tutorials/user-dashboard/recording-storage-config"],
      collapsed: true,
    },
    {
      type: "category",
      label: "Audio/Video Conferencing SDK",
      items: [
        {
          type: "category",
          label: "Quickstart",
          collapsed: true,
          items: [
            "tutorials/realtime-communication/prebuilt-sdk/quickstart-prebuilt-js",
            "tutorials/realtime-communication/prebuilt-sdk/quickstart-prebuilt-wordpress",
            "tutorials/video-calling-api/react-js/quickstart",
          ],
        },
      ],
      collapsed: true,
    },
    // {
    //   type: "category",
    //   label: "Live Streaming API",
    //   items: [
    //     {
    //       type: "category",
    //       label: "Quickstart",
    //       collapsed: true,
    //       items: ["tutorials/live-streaming/api/quickstart-rest-api"],
    //     },
    //   ],
    //   collapsed: true,
    // },
    // {
    //   type: "category",
    //   label: "Video On Demand API",
    //   items: [
    //     {
    //       type: "category",
    //       label: "Quickstart",
    //       collapsed: true,
    //       items: ["tutorials/video-on-demand/api/quickstart-rest-api"],
    //     },
    //   ],
    //   collapsed: true,
    // },
    "tutorials/customized-layout",
  ],

  // resources: [
  //   {
  //     type: "category",
  //     label: "RESOURCES",
  //     items: ["resources/overview"],
  //     collapsed: true,
  //   },
  //   {
  //     type: "category",
  //     label: "CODE SAMPLES",
  //     items: [
  //       {
  //         type: "category",
  //         label: "RTC PREBUILT SDK",
  //         items: [
  //           //"resources/code-samples/real-time-communication/overview",
  //           "resources/code-samples/real-time-communication/js-prebuilt-sdk",
  //           "resources/code-samples/real-time-communication/angular-prebuilt-sdk",
  //           "resources/code-samples/real-time-communication/react-prebuilt-sdk",
  //           "resources/code-samples/real-time-communication/vue-prebuilt-sdk",
  //           "resources/code-samples/real-time-communication/android-prebuilt-sdk",
  //         ],
  //         collapsed: true,
  //       },
  //       {
  //         type: "category",
  //         label: "RTC RAW SDK",
  //         items: [
  //           //"resources/code-samples/real-time-communication/overview",
  //           "resources/code-samples/real-time-communication/node-js-auth",
  //           "resources/code-samples/real-time-communication/react-js-sdk",
  //           "resources/code-samples/real-time-communication/react-native-sdk",
  //           "resources/code-samples/real-time-communication/android-sdk",
  //         ],
  //         collapsed: true,
  //       },
  //       {
  //         type: "category",
  //         label: "LIVE STREAMING",
  //         items: [
  //           //"resources/code-samples/live-streaming/overview",
  //           "resources/code-samples/live-streaming/rtc-to-rtmp",
  //           "resources/code-samples/live-streaming/live-streaming-react",
  //           "resources/code-samples/live-streaming/live-streaming-react-native",
  //         ],
  //         collapsed: true,
  //       },
  //       {
  //         type: "category",
  //         label: "VIDEO ON DEMAND",
  //         items: [
  //           //"resources/code-samples/live-streaming/overview",
  //           "resources/code-samples/video-on-demand/react-js-sdk",
  //           "resources/code-samples/video-on-demand/react-native-sdk",
  //         ],
  //         collapsed: true,
  //       },
  //     ],
  //     collapsed: true,
  //   },
  // ],
};
