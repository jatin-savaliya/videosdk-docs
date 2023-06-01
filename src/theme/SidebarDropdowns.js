import React, { useEffect, useState } from "react";
import react_versions from "../../react_docs_versions.json";
import android_versions from "../../android_docs_versions.json";
import react_native_versions from "../../react_native_docs_versions.json";
import flutter_versions from "../../flutter_docs_versions.json";
import ios_versions from "../../ios_docs_versions.json";
import javascript_versions from "../../javascript_docs_versions.json";
import prebuilt_versions from "../../prebuilt_docs_versions.json";
import api_reference_versions from "../../api_reference_docs_versions.json";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";

export default function SidebarDropdowns() {
  const [sdk, setSDK] = useState("React");
  const [version, setVersion] = useState("0.0.x");
  const [versionList, setVersionList] = useState([]);
  const [viewType, setViewType] = useState("");
  const location = useLocation();

  function getSdkRoutingPath(value) {
    var currentPath = location.pathname;
    return value === "api-reference"
      ? "/api-reference/realtime-communication/intro"
      : "/" +
          value +
          (currentPath.split("/")[version == versionList[0] ? 2 : 3] == "guide"
            ? (value == "react" ||
                value == "react-native" ||
                value == "javascript" ||
                value == "flutter" ||
                value == "android") &&
              version == versionList[0]
              ? "/guide/video-and-audio-calling-api-sdk/concept-and-architecture"
              : value == "prebuilt"
              ? "/guide/prebuilt-video-and-audio-calling/getting-started"
              : value == "ios"
              ? "/guide/video-and-audio-calling-api-sdk/getting-started"
              : "/guide/video-and-audio-calling-api-sdk/concept-and-architecture"
            : "/api/sdk-reference/setup");
  }

  function getRouteVersion(value) {
    var currentPath = location.pathname;
    //check if version being viewed and change version is same or not
    if (version == value) {
      return location.pathname;
    }

    //check if change version is latest
    if (value == versionList[0]) {
      currentPath = currentPath.replace(currentPath.split("/")[2], "");
      currentPath = currentPath.replace("//", "/");
    } else {
      //check current viewing version is latest
      if (version == [versionList[0]]) {
        currentPath = currentPath.replace(
          currentPath.split("/")[1],
          sdk + "/" + value
        );
      } else {
        currentPath = currentPath.replace(currentPath.split("/")[2], value);
      }
    }
    return currentPath;
  }

  useEffect(() => {
    var currentSdk = location.pathname.split("/")[1];
    var currentVersion = location.pathname.split("/")[2];
    var versions = [];
    if (currentSdk == "react") {
      versions = react_versions;
    } else if (currentSdk == "javascript") {
      versions = javascript_versions;
    } else if (currentSdk == "react-native") {
      versions = react_native_versions;
    } else if (currentSdk == "android") {
      versions = android_versions;
    } else if (currentSdk == "ios") {
      versions = ios_versions;
    } else if (currentSdk == "flutter") {
      versions = flutter_versions;
    } else if (currentSdk == "prebuilt") {
      versions = prebuilt_versions;
    } else if (currentSdk == "api-reference") {
      versions = api_reference_versions;
    }

    if (
      currentVersion.match("([0-9])+.([0-9])+.([0-9]|[a-z])+") ||
      currentVersion.match("v([0-9])+")
    ) {
      setVersion(currentVersion);
      setViewType(location.pathname.split("/")[3]);
    } else {
      setVersion(versions[0]);
      setViewType(location.pathname.split("/")[2]);
    }
    setVersionList(versions);
    setSDK(currentSdk);
  }, []);

  const sdkList = [
    {
      id: "prebuilt",
      value: "Prebuilt (UIkit)",
      icon: "/img/icons/libraries/code.svg",
    },
    {
      id: "javascript",
      value: "Javascript",
      icon: "/img/icons/libraries/ic_javascript.svg",
    },
    {
      id: "react",
      value: "React",
      icon: "/img/icons/libraries/ic_react.svg",
    },
    {
      id: "react-native",
      value: "React Native",

      icon: "/img/icons/libraries/ic_react.svg",
    },
    {
      id: "android",
      value: "Android",
      icon: "/img/icons/libraries/ic_android.svg",
    },
    {
      id: "ios",
      value: "iOS",
      icon: "/img/icons/libraries/ic_ios.svg",
    },
    {
      id: "flutter",
      value: "Flutter",
      icon: "/img/icons/libraries/ic_flutter.svg",
    },
    {
      id: "api-reference",
      value: "Server Side",
      icon: "/img/icons/libraries/server.svg",
    },
  ];

  function getSDKName(value) {
    var name = sdkList.filter((i) => {
      return i.id == value;
    });
    return name;
  }

  return (
    <div className="row dropdown_menu">
      {sdk != "docs" && sdk != "no-code-sdk" && sdk != "help_docs" ? (
        <div className="col dropdown dropdown--hoverable dropdown--left">
          <div className="row navbar__link--active">
            {<img className="dropdown-logo" src={getSDKName(sdk)[0]?.icon} />}
            <div className="col" style={{ padding: "0px", fontSize: "1rem" }}>
              {getSDKName(sdk)[0]?.value}
            </div>

            <img src="/img/icons/ic_arrow_down.svg" />
          </div>
          <ul className="dropdown__menu">
            {sdkList.map((e, i) => {
              return (
                <li key={e.id}>
                  <Link
                    className={
                      e.id == sdk
                        ? "dropdown__link dropdown__link--active"
                        : "dropdown__link"
                    }
                    href={getSdkRoutingPath(e.id)}
                  >
                    <img className="dropdown-logo" src={e.icon} />
                    {e.value}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      {sdk != "docs" && sdk != "no-code-sdk" && sdk != "help_docs" ? (
        <div
          className={
            // sdk == "api-reference"
            //   ? "col dropdown dropdown--hoverable dropdown--left"
            //   :
            "dropdown dropdown--hoverable dropdown--right"
          }
        >
          <a className="row navbar__link--active">
            <div className="col" style={{ padding: "0px" }}>
              {sdk == "api-reference" ? "/" + version : version}
            </div>
            <img
              src="/img/icons/ic_arrow_down.svg"
              style={{ paddingLeft: "8px" }}
            />{" "}
          </a>
          <ul className="dropdown__menu">
            {versionList.map((v) => {
              return (
                <li key={v}>
                  <Link
                    className={
                      v == version
                        ? "dropdown__link dropdown__link--active"
                        : "dropdown__link"
                    }
                    href={getRouteVersion(v)}
                  >
                    {sdk == "api-reference" ? "/" + v : v}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
