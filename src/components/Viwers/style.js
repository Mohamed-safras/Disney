import styled from "styled-components";

export const Continer = styled.div`
  padding: 20px;
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

export const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);

  transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  video {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
