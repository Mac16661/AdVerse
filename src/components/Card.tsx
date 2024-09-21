import React from "react";

//@ts-ignore
function Card({ image, title, views }) {
  return (
    <div
      style={{
        width: "350px",
        height: "250px",
        borderRadius: "10px",
        backgroundColor: "rgba(21, 21, 20, 255)",
      }}
    >
      <div>
        <img
          src={image}
          alt="My Image"
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          height: "50px",
          flexDirection: "column",
          rowGap: "0px",
          columnGap: "0px",
          justifyContent:"flex-start",
          alignItems: "flex-start"
        }}
      >
        <p style={{ margin: "0px", marginLeft:"10px", color: "rgba(255,254,254,255)", fontFamily:
                  "__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system", fontWeight: "700", }}>
          {title}
        </p>
        <p style={{ margin: "1px", marginLeft:"10px", color: "rgba(255,254,254,255)", fontSize: "10px", fontFamily:
                  "__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system",}}>{`${views} impressions`}</p>
      </div>
    </div>
  );
}



export default Card;
