import { useEffect, useState } from "react";
import Header from "../components/Header";
// import styled from "styled-components";
import Card from "../components/Card";
import PopUpInput from "../components/PopUpInput";
import axios from "axios";

const URL = "https://localhost:8080";
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
  const [ads, setAds] = useState({});

  const fetchData = async () => {
    const response = await axios.get(`${URL}/ad/v2/getPublishedAds`, {
      params: {
        org_id: localStorage.getItem("userId"),
      },
    });

    //@ts-ignore
    const newAd = response.data;
    //@ts-ignore

    setAds(newAd);
    //@ts-ignore
    // console.log(typeof(newAd))
    console.log(ads);
    // return response.data;
  };

  useEffect(() => {
    fetchData();

    // return () => {

    // }
  }, []);

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
            {Object.values(ads).map((ad) => (
              //@ts-ignore
              <div key={ad.id}>
                {/* @ts-ignore */}
                <Card image={ad.image} title={ad.name} views={ad.impression} />
              </div>
            ))}
        </div>
        <PopUpInput />
      </div>
    </div>
  );
}

export default OrgPage;
