import React from "react";
import { styled } from "styled-components";

const Wrap = styled.div`
  height: 24.8vh;
  background-size: cover;
  background-color: black;
  display: flex;
  flex-direction: column;
  left: 0
  align-items: center;
`;

// paddingBottom: "0.5rem",

//@ts-ignore
const TrdSection = ({ background }) => {
  return (
    //@ts-ignore
    <Wrap bgimg={background}>
      <div
        style={{
          width: "10px",
          marginLeft: "5rem",
          paddingTop: "1rem",
        }}
      >
        <h3
          style={{
            color: "rgba(255,254,254,255)",
          }}
        >
          Social
        </h3>
        <br
          style={{
            margin: "1rem",
            borderColor: "rgb(38 38 38))",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "5rem",
          width: "100px",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          Y
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          L
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          I
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          T
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          D
        </p>
      </div>
    </Wrap>
  );
};

export default TrdSection;
