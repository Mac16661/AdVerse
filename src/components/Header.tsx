import React, { useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { selectCar } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import Button from "../components/Button";

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
    padding: 0.0rem 0.5rem;
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
    padding: 0.0rem 0.5rem;
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

const Header = () => {
  const [burgerState, setBurgerState] = useState(true);
  const cars = useSelector(selectCar);

  // const showBurgerNav = () => {
  //   setBurgerState(true);
  // };

  // const hideBurgerNav = () => {
  //   setBurgerState(false);
  // };

  return (
    <Container>
      <a>
        <img src="/images/adVerse.png" alt="Ads" style={{ height: "16px" }} />
      </a>

      <Menu>
        <p style={{ cursor: "pointer" }}>Enable Ad</p>
        <p style={{ cursor: "pointer" }}>Create Ad</p>
        <p style={{ cursor: "pointer" }}>Demo</p>
        <p style={{ cursor: "pointer" }}>Community</p>
        <p style={{ cursor: "pointer" }}>Support</p>
        <FullWidthp></FullWidthp>
      </Menu>

      <RightMenu>
        <Button label="PLANS AND PRICING" />
      </RightMenu>

      <div></div>
    </Container>
  );
};

export default Header;
