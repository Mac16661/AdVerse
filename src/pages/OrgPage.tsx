import Header from "../components/Header";
// import styled from "styled-components";
import Card from "../components/Card";
import PopUpInput from "../components/PopUpInput";

// const Button = styled.button`
//   all: unset;
//   cursor: pointer;
// `;

//@ts-ignore
// export function AddCard({ click }) {
//   return (
//     <div
//       style={{
//         width: "350px",
//         height: "250px",
//         borderRadius: "10px",
//         backgroundColor: "rgba(21, 21, 20, 255)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Button onClick={click}>
//         <div>
//           <img
//             src="https://static.vecteezy.com/system/resources/thumbnails/001/500/603/small/add-icon-free-vector.jpg"
//             alt="My Image"
//             style={{ width: "90%", height: "30%", borderRadius: "10px" }}
//           />
//         </div>
//       </Button>
//     </div>
//   );
// }

function OrgPage() {
  return (
    <div>
      <Header />
      <div
        style={{
          background: `url(/images/image.png)`,
          height: "100vh",
          width: "100%",
          position: "absolute",
        }}
      >
        <div
          style={{
            margin: "40px",
            marginTop: "80px",
            display: "grid",
            height: "85%",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridRowGap: "0px",
            gridColumnGap: "0px", // Reduce horizontal gap
          }}
        >
          <Card image="/images/6.jpeg" title="CREATE AD" views="1M" />
          <Card image="/images/1.jpg" title="CREATE AD" views="1M" />
          <Card image="/images/3.jpg" title="CREATE AD" views="1M" />
          <Card image="/images/4.jpg" title="CREATE AD" views="1M" />
          <Card image="/images/5.jpeg" title="CREATE AD" views="1M" />
          <Card image="/images/7.jpg" title="CREATE AD" views="1M" />
          <Card image="/images/8.jpg" title="CREATE AD" views="1M" />
          {/* <AddCard click={handleClick} /> */}
        </div>
        <PopUpInput />
      </div>
    </div>
  );
}

export default OrgPage;
