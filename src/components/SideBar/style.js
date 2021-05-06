import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Continer = styled.div`
  position: fixed;
  background-color: #0c111b;
  display: grid;
  z-index: 100;
  top: 0;
  align-items: center;
  width: 240px;
  justify-content: center;
  height: 100%;
  z-index: 999;
  transition: 550ms ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const Div = styled.div``;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 30px !important;
  color: #fff !important;
  position: absolute;
  top: 20px;
  cursor: pointer;
  right: 30px;
`;

export const SideBarMiddle = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  border-bottom: 1px solid #fff;
  width: 75%;
  margin-left: 10px;

  a {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    margin: 20px 10px;

    img {
      width: 40px;
    }

    span {
      font-size: 14px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;
      margin-left: 15px;
      &:after {
        content: "";
        transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        height: 2px;
        background: #fff;
        transform-origin: left center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1.1);
      }
    }
  }
`;

export const Profile = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 15px;
    font-size: 24px;
  }
`;

export const ProfileIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 2.5px solid #e66465;
  padding: 3px;
  cursor: pointer;
`;
