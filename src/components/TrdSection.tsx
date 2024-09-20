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
          <a href="https://www.youtube.com/" target="_self">
            <img
              alt="Youtube Icon"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="https://cdn.sanity.io/images/fuvbjjlp/production/82f958b51978ffcb001464840f4499f3f7f2e806-24x24.svg"
            />
          </a>
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          <a
            href="https://www.linkedin.com/company/unity-technologies"
            target="_self"
          >
            <img
              alt="LinkedIn icon"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="https://cdn.sanity.io/images/fuvbjjlp/production/dd69f2ffe65cf07cd992ed377edb6320d17695c5-24x24.svg"
            />
          </a>
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          <a href="https://www.twitter.com/" target="_self">
            <img
              alt="Twitter icon"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="https://cdn.sanity.io/images/fuvbjjlp/production/08e30b60b2187caae0c71513dca8a24bad28c7c6-25x24.svg"
            />
          </a>
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          <a href="https://www.facebook.com/" target="_self">
            <img
              alt="Facebook icon"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="https://cdn.sanity.io/images/fuvbjjlp/production/3c67aed6455caf27f09c3f552c581d0815b1ec01-24x24.svg"
            />
          </a>
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          <a href="https://www.instagram.com/" target="_self">
            <img
              alt="Facebook icon"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="https://cdn.sanity.io/images/fuvbjjlp/production/0d84cf67aa301c88e9eb1559d8d20ea14b73159a-24x24.svg"
            />
          </a>
        </p>
      </div>
    </Wrap>
  );
};

export default TrdSection;
