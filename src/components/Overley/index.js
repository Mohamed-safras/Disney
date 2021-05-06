import React from "react";
import styled from "styled-components";
const OverleyC = ({ toggle, isOpen }) => {
  return <Overlay isOpen={isOpen} onClick={toggle} />;
};

export default OverleyC;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #0c111b;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: ${({ isOpen }) => (isOpen ? "" : "none")};
  transition: 550ms ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "45%" : "0%")};
`;
