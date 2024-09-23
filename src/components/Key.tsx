import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import ArrowBtn from "./ArrowBtn";

function Key() {
  const [authToken, setAuthToken] = useState({
    token: "",
    api_key: "",
  });
  const { publicKey, signMessage } = useWallet();

  // TODO: NOT USING
  async function signAndSend() {
    if (!publicKey) return;

    const message = new TextEncoder().encode(
      "Get registered with ads-platform"
    );

    try {
      const signature = await signMessage?.(message);
      console.log(signature);
      console.log(publicKey);

      const response = await axios.post(`${URL}/user/registerOrganization`, {
        signature,
        wallet_address: publicKey?.toString(),
        name: "Zomato", // Dummy name
        org_category: "Food delivery", // Dummy category
      });

      setAuthToken({
        token: response.data.token,
        api_key: response.data.api_key,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.api_key);
    } catch (e) {
      console.log("Err -> ", e);
      alert("Signin unsuccessful");
    }
  }

  //TODO: need to implement (calls backend and fetches api key(user id) corresponds to the wallet)
  const handleClick = async () => {
    console.log(publicKey);
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
      {authToken.api_key === "" ? (
        <ArrowBtn label="GET API KEY" click={handleClick} />
      ) : (
        authToken.api_key
      )}
    </div>
  );
}

export default Key;
