import React from "react";
import {
  Continer,
  CloseIcon,
  SideBarMiddle,
  Profile,
  ProfileIcon,
} from "../SideBar/style";
import home_icon from "../../assets/images/home-icon.svg";
import series_icon from "../../assets/images/series-icon.svg";
import movie_icon from "../../assets/images/movie-icon.svg";
import original_icon from "../../assets/images/original-icon.svg";
import search_icon from "../../assets/images/search-icon.svg";
import watchlist_icon from "../../assets/images/watchlist-icon.svg";
const SideBar = ({ toggle, isOpen }) => {
  return (
    <Continer isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <SideBarMiddle>
        <a href="#home">
          <img src={home_icon} alt="home_icon" />
          <span>Home</span>
        </a>
        <a href="#search">
          <img src={search_icon} alt="search_icon" />
          <span>search</span>
        </a>
        <a href="#watchlist">
          <img src={watchlist_icon} alt="watchlist_icon" />
          <span>watchlist</span>
        </a>
        <a href="#original">
          <img src={original_icon} alt="original_icon" />
          <span>original</span>
        </a>
        <a href="#movie">
          <img src={movie_icon} alt="movie_icon" />
          <span>movie</span>
        </a>
        <a href="#series">
          <img src={series_icon} alt="series_icon" />
          <span>Series</span>
        </a>
      </SideBarMiddle>
      <Profile>
        <ProfileIcon src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <span>AWSafras</span>
      </Profile>
    </Continer>
  );
};

export default SideBar;
