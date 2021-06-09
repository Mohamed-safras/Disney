import React, { useEffect, useState } from "react";

import {
  Continer,
  Logo,
  NavMenu,
  Profile,
  ProfileIcon,
  MenuBar,
} from "../../components/Header/style";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import home_icon from "../../assets/images/home-icon.svg";
import series_icon from "../../assets/images/series-icon.svg";
import movie_icon from "../../assets/images/movie-icon.svg";
import original_icon from "../../assets/images/original-icon.svg";
import search_icon from "../../assets/images/search-icon.svg";
import watchlist_icon from "../../assets/images/watchlist-icon.svg";

const Header = ({ toggle }) => {
  const [scrollnav, setScrollnav] = useState(false);

  const changNav = () => {
    if (window.scrollY >= 80) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changNav);
  }, []);

  return (
    <Continer scrollnav={scrollnav}>
      <Logo src={logo} />

      <NavMenu>
        <a href="#">
          <img src={home_icon} alt="home_icon" />
          <span>Home</span>
        </a>
        <a href="#">
          <img src={search_icon} alt="search_icon" />
          <span>search</span>
        </a>
        <a href="#">
          <img src={watchlist_icon} alt="watchlist_icon" />
          <span>watchlist</span>
        </a>
        <a>
          <img src={original_icon} alt="original_icon" />
          <span>original</span>
        </a>
        <a href="#">
          <img src={movie_icon} alt="movie_icon" />
          <span>movie</span>
        </a>
        <a href="#">
          <img src={series_icon} alt="series_icon" />
          <span>Series</span>
        </a>
      </NavMenu>
      <Profile>
        <ProfileIcon src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </Profile>
      <MenuBar onClick={toggle}>
        <FaBars size={30} />
      </MenuBar>
    </Continer>
  );
};

export default Header;
