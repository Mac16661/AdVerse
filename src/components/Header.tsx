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

//@ts-ignore
const Header = () => {
  const [burgerState, setBurgerState] = useState(true);
  const cars = useSelector(selectCar);
  // const showBurgerNav = () => {
  //   setBurgerState(true);
  // };

  // const hideBurgerNav = () => {
  //   setBurgerState(false);
  // };

  const { publicKey, signMessage } = useWallet();

  useEffect(() => {
    //@ts-ignore
    localStorage.setItem("pubKey", publicKey?.toString());
  }, [publicKey])
  

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
      </RightMenu>

      <div></div>
    </Container>
  );
};

export default Header;
