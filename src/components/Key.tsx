import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import ArrowBtn from "./ArrowBtn";

const URL = "https://localhost:8080";

function Key() {
  // const [authToken, setAuthToken] = useState({
  //   token: "",
  //   api_key: "",
  //   name: "",
  // });
  const [apiKey, setApiKey] = useState("");
  const { publicKey, signMessage } = useWallet();

  async function signAndSend() {
    if (!publicKey) return;
    if (localStorage.getItem("token")) return;

    const message = new TextEncoder().encode(
      "Get registered with ads-platform"
    );

    try {
      const signature = await signMessage?.(message);
      console.log(signature);
      console.log(publicKey);
      // @ts-ignore
      const response = await axios.post(`${URL}/user/v2/register`, {
        signature,
        wallet_address: publicKey?.toString(),
      });

      //   console.table(response);
      // setAuthToken({
      //   token: response.data.token,
      //   api_key: response.data.api_key,
      //   name: response.data.name,
      // });
      console.log(response);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.api_key);
      localStorage.setItem("name", response.data.name);

      setApiKey(response.data.api_key);
    } catch (e) {
      console.log("Err -> ", e);
      alert("Signin unsuccessful");
    }
  }

  //TODO: NEED TO UPGRADE TO REDUX
  const handleClick = async () => {
    console.log(publicKey);
    //@ts-ignore
    if (localStorage.getItem("token") && localStorage.getItem("userId")) {
      //@ts-ignore
      setApiKey(localStorage.getItem("userId"));
      return;
    }

    signAndSend();
  };

  return (
    <div
      style={{
        height: "40vh",
        background: `url(/images/image.png)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {apiKey === "" || apiKey == null ? (
        <ArrowBtn label="GET API KEY" click={handleClick} />
      ) : (
        <ApiKey label={apiKey} />
      )}
    </div>
  );
}

//@ts-ignore
function ApiKey({ label }) {
  return (
    <div style={{}}>
      <p>{label}</p>
    </div>
  );
}

export default Key;
