import styled from "styled-components";

export const Continer = styled.div`
  background-color: ${({ scrollnav }) => (scrollnav ? "#fff" : "#0c111b")};
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0 26px;
  overflow-x: hidden;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 15px;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    img {
      width: 25px;
    }

    span {
      font-size: 14px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

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
        transform: scaleX(1);
      }
    }
  }
`;

export const Profile = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  border: 2.5px solid #e66465;
  padding: 3px;
  cursor: pointer;
`;

export const MenuBar = styled.div`
  cursor: pointer;
  font-size: 34px;
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  } ;
`;
