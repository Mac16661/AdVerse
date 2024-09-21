import React,{useRef} from "react";
import { styled } from "styled-components";
import ArrowBtn from "./ArrowBtn";
import Stats from "./Stats";

//2 7 10 8
const Wrap = styled.div`
  height: 97.5vh;
  //@ts-ignore
  background: ${(props) => `url("/images/2.jfif")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 10rem;
  p {
    margin-top: 1rem;
  }
  animation: fadeBottom 2s;
`;

// const Buttons = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// margin-bottom:0.5rem;
// `

// const ButtonGroup = styled.div`
// display: flex;
//   justify-content: center;
//   align-items: center;
//   gap:2rem;
//   @media (max-width:768px) {
//   flex-direction: column;

//  }

// `
// const LeftButton = styled.button`
// background-color: rgba(23, 26, 32, 0.8);
//   height: 2.5rem;
//   width: 16rem;
//   color: white;
//   border: none;
//   border-radius: 2rem;
//   text-transform: uppercase;
//   font-size: 12px;
//   opacity:0.85;
//   cursor: pointer;

// `

// const RightButton = styled(LeftButton)`
// background-color: rgb(227,224,222);
// color:black;
// opacity:0.7
// `
// const DownArrow = styled.img`
// margin-top:20px;
// height:40px;
// ${'' /* overflow-y:hidden; */}
// animation: bouncingBtn infinite 1.5s;
// `

//@ts-ignore
const Section = ({ tittle, background }) => {
  const targetElementRef = useRef(null);

  const handleClick = () => {
    //@ts-ignore
    targetElementRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    //@ts-ignore
    <Wrap bgimg={background}>
      <ItemText>
        <h1
          style={{
            fontSize: "6.9em",
            fontWeight: "500",
            color: "rgb(255, 255, 255)",
            paddingBottom: "30px",
            fontFamily:
              "__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system",
          }}
        >
          {tittle}
        </h1>
        <ArrowBtn label="TRY NOW" click={handleClick} />
      </ItemText>
      <Stats />
      <div ref={targetElementRef}>This is the target element.</div>
    </Wrap >
  );
};

export default Section;
