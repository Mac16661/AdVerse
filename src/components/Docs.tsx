import React from "react";
import { styled } from "styled-components";

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(21, 21, 20, 255);
  width: 97.5%;
  border-radius: 0.5rem;
`;

const Child2 = styled.div`
  background-color: white;
  height: 20vh;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  display: flex;
`;

const Child3 = styled.div`
  background-color: rgba(21, 21, 20, 255);
`;

function Docs() {
  return (
    <div style={{ backgroundColor: "black", height: " 51.7vh" }}>
      <Parent style={{ margin: "1rem", marginTop: "1.5rem" }}>
        <Child2>
          <Child3 style={{ width: "40%" }}>
            <h2
              style={{
                color: "rgba(255,254,254,255)",
                fontSize: "20px",
                fontWeight: "400",
                fontFamily:
                  "__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system",
                paddingLeft: "20px",
                paddingTop: "10px",
              }}
            >
              Quick Start Guide: Enable Ads in Unity Games
            </h2>
          </Child3>
          <Child3 style={{ width: "60%" }}>
            <h3
              style={{
                color: "rgba(255,254,254,255)",
                fontSize: "16px",
                fontWeight: "400",
                fontFamily:
                  "__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system",
                lineHeight: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p>Get Started in 3 Easy Steps </p>
              <p>
                Step 1: Download Unity Asset Download the required asset from:
                https://github.com/Mac16661/AdVerse-Unity
              </p>
              <p>
                Step 2: Import Asset into Unity Simply drag and drop the
                downloaded asset into your current Unity project.
              </p>
              <p>
                {" "}
                Step 3: Configure Billboard Drag the Billboard prefab into your
                scene to complete the setup. You're Now Ready to Go!
              </p>
              <p>
                {" "}
                Ensure at least one Event System is present in your project
                hierarchy.
              </p>
              <p>
                {" "}
                Script Loader: Verify that the Script Loader file is correctly
                added and configured.
              </p>
            </h3>
          </Child3>
        </Child2>
        <div
          style={{
            backgroundColor: "",
            height: "30vh",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            paddingRight: "7rem",
          }}
        ></div>
      </Parent>
    </div>
  );
}

export default Docs;
