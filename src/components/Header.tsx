import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { selectCar } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { Link } from "react-router-dom";

// Styled components
const Container = styled.div`
  background-color: rgb(0, 0, 0);
  width: 100vw;
  position: fixed;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  p {
    font-family: __Inter_36bd41, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    color: rgb(192, 192, 192);
    font-weight: 400;
    font-size: 0.8rem;
    padding: 0rem 0.5rem;
    transition: linear 0.5s;
  }

  p:hover {
    color: white;
    cursor: pointer;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 15px;
    padding: 0rem 0.5rem;
    transition: linear 0.5s;
  }

  p:hover {
    cursor: pointer;
  }
`;

const BurgerNav = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  list-style: none;
  background-color: white;
  width: 16.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  text-transform: capitalize;
  cursor: pointer;
  li {
    padding: 0.2rem 0.5rem;
    width: 13rem;
  }
  a {
    font-weight: 500;
    font-size: 14px;
  }
  li:hover {
    background-color: rgba(222, 220, 220, 0.493);
    border-radius: 5px;
  }
  .icon {
    margin-left: 11rem;
    margin-bottom: 1.5rem;
  }
`;

const FullWidthp = styled.p`
  width: 600px; /* Make the span grow to take up available space */
`;

const ButtonProfile = styled.button`
  display: none;
  opacity: 0;
  border-radius: 9999px;
  padding: 0.5rem;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  border: none;
  outline: none;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    display: block;
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    background-color: #333;
  }

  &:focus {
    background-color: #333;
    outline: 2px solid #333;
  }
`;

const URL = "https://node-user-container-1050562161100.us-central1.run.app";

//@ts-ignore
const Header = () => {
  const [burgerState, setBurgerState] = useState(true);
  const cars = useSelector(selectCar);
  const [authToken, setAuthToken] = useState({
    token: "",
    api_key: "",
    name: "",
  });
  // const showBurgerNav = () => {
  //   setBurgerState(true);
  // };

  // const hideBurgerNav = () => {
  //   setBurgerState(false);
  // };

  const { publicKey, signMessage } = useWallet();

  useEffect(() => {
    if (!publicKey) return; // Exit early if publicKey is null/undefined
  
    localStorage.setItem("pubKey", publicKey.toString());
    console.log(publicKey.toString());
  
    const signAndSend = async () => {
      // TODO: Restricts login if token and api key is there
      if (localStorage.getItem("token") && localStorage.getItem("userId")) return;
  
      const message = new TextEncoder().encode(
        "Get registered with ads-platform"
      );
  
      try {
        //@ts-ignore
        const signature = await signMessage(message);
        console.log(signature);
        console.log(publicKey);
  
        const response = await axios.post(`${URL}/user/v2/register`, {
          signature,
          wallet_address: publicKey.toString(),
        });
  
        setAuthToken({
          token: response.data.token,
          api_key: response.data.api_key,
          name: response.data.name,
        });
        console.log(response);
  
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.api_key);
        localStorage.setItem("name", response.data.name);
      } catch (e) {
        console.log("Err -> ", e);
        alert("Signin unsuccessful");
      }
    };
  
    signAndSend();
  }, [publicKey, signMessage, URL, setAuthToken]);

  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src="/images/adVerse.png" alt="Ads" style={{ height: "16px" }} />
      </Link>

      <Menu>
        <Link to="/app" style={{ textDecoration: "none" }}>
          <p
            style={{
              cursor: "pointer",
            }}
          >
            Enable Ad
          </p>
        </Link>
        <Link to="/org" style={{ textDecoration: "none" }}>
          <p style={{ cursor: "pointer" }}>Create Ad</p>
        </Link>
        <p style={{ cursor: "pointer" }}>Demo</p>
        <p style={{ cursor: "pointer" }}>Community</p>
        <p style={{ cursor: "pointer" }}>Support</p>
        <FullWidthp></FullWidthp>
      </Menu>

      <RightMenu>
        {publicKey ? (
          <WalletDisconnectButton
            style={{
              alignItems: "center",
              backgroundColor: "rgba(33, 150, 243, 1)",
              borderRadius: "2rem",
              color: "white",
              cursor: "pointer",
              display: "inline-flex",
              fontSize: "0.625rem",
              fontWeight: "800",
              justifyContent: "center",
              letterSpacing: "0.24em",
              lineHeight: "0.875rem",
              margin: "0 0.5rem",
              outline: "2px solid transparent",
              outlineOffset: "2px",
              overflowX: "hidden",
              padding: "0.5rem 0.75rem",
              textTransform: "uppercase",
              transition: "all 0.3s ease-in-out",
              height: "30px",
              overflow: "hidden",
              overflowY: "hidden",
              scrollBehavior: "auto",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          />
        ) : (
          <WalletMultiButton
            style={{
              alignItems: "center",
              backgroundColor: "rgba(33, 150, 243, 1)",
              borderRadius: "2rem",
              color: "white",
              cursor: "pointer",
              display: "inline-flex",
              fontSize: "0.625rem",
              fontWeight: "800",
              justifyContent: "center",
              letterSpacing: "0.24em",
              lineHeight: "0.875rem",
              margin: "0 0.5rem",
              outline: "2px solid transparent",
              outlineOffset: "2px",
              overflowX: "hidden",
              padding: "0.5rem 0.75rem",
              textTransform: "uppercase",
              transition: "all 0.3s ease-in-out",
              height: "30px",
              overflow: "hidden",
              overflowY: "hidden",
              scrollBehavior: "auto",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          />
        )}

        <Link to="/profile" style={{ textDecoration: "none" }}>
          <ButtonProfile type="button">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM4.7875 14.4297C5.23964 13.7226 5.86251 13.1406 6.59869 12.7375C7.33488 12.3345 8.16069 12.1232 9 12.1232C9.83932 12.1232 10.6651 12.3345 11.4013 12.7375C12.1375 13.1406 12.7604 13.7226 13.2125 14.4297C12.0081 15.3664 10.5258 15.8749 9 15.8749C7.4742 15.8749 5.99193 15.3664 4.7875 14.4297ZM6.5 8.375C6.5 7.88055 6.64663 7.3972 6.92133 6.98607C7.19603 6.57495 7.58648 6.25452 8.04329 6.0653C8.50011 5.87608 9.00278 5.82657 9.48773 5.92304C9.97268 6.0195 10.4181 6.2576 10.7678 6.60723C11.1174 6.95686 11.3555 7.40232 11.452 7.88727C11.5484 8.37223 11.4989 8.87489 11.3097 9.33171C11.1205 9.78852 10.8001 10.179 10.3889 10.4537C9.97781 10.7284 9.49446 10.875 9 10.875C8.33696 10.875 7.70108 10.6116 7.23224 10.1428C6.7634 9.67393 6.5 9.03804 6.5 8.375ZM14.1375 13.5633C13.4404 12.5532 12.4603 11.7717 11.3203 11.3172C11.9327 10.8349 12.3795 10.1737 12.5987 9.4257C12.8179 8.67766 12.7985 7.87992 12.5433 7.1434C12.2881 6.40687 11.8097 5.76819 11.1746 5.31616C10.5396 4.86414 9.77949 4.62123 9 4.62123C8.22052 4.62123 7.4604 4.86414 6.82536 5.31616C6.19033 5.76819 5.71193 6.40687 5.45671 7.1434C5.20149 7.87992 5.18212 8.67766 5.40131 9.4257C5.62049 10.1737 6.06734 10.8349 6.67969 11.3172C5.5397 11.7717 4.55956 12.5532 3.8625 13.5633C2.9817 12.5728 2.406 11.3488 2.20473 10.0387C2.00346 8.72856 2.1852 7.3882 2.72806 6.17898C3.27093 4.96977 4.15178 3.94326 5.26454 3.22308C6.3773 2.50289 7.67452 2.11972 9 2.11972C10.3255 2.11972 11.6227 2.50289 12.7355 3.22308C13.8482 3.94326 14.7291 4.96977 15.2719 6.17898C15.8148 7.3882 15.9966 8.72856 15.7953 10.0387C15.594 11.3488 15.0183 12.5728 14.1375 13.5633Z"></path>
            </svg>
          </ButtonProfile>
        </Link>
      </RightMenu>

      <div></div>
    </Container>
  );
};

export default Header;
