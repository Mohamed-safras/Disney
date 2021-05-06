import styled from "styled-components";

export const Continer = styled.div`
  background-color: #0c111b;
  min-height: 100vh;
  /* padding: calc(3.5vw + 4.5px); */
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://image.freepik.com/free-photo/dark-blue-plain-wall-background_53876-92976.jpg")
      center center / cover no-repeat fixed;
    z-index: -1;
  }
`;
