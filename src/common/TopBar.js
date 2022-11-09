import React from "react";
import styled from "styled-components";
import slogan from "../assets/images/slider/SLIDER-08.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
  return (
    <Container
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <Content>
        <div>info@themoderntouch.co</div>
        <Slogan>
          <SloganImg src={slogan} alt="slogan" />
        </Slogan>
        <div>+84 28 39 305 018</div>
      </Content>
      <SubNav>
        <Search>
          <SearchIcon sx={{ fontSize: 15 }} />
        </Search>
        <DropDown>
          <Language>EN</Language> <ArrowDropDownIcon sx={{ fontSize: 15 }} />
        </DropDown>
      </SubNav>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1.5rem;
  padding-left: calc(100% / 12);
  padding-right: calc(100% / 12);
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  @media (max-width: 960px) {
    display: none;
  }
`;

const Content = styled.div`
  width: calc(11 * 100% / 12);
  padding-left: calc(100% / 12);
  text-align: center;
  font-size: 0.75rem;
  font-style: italic;
  line-height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Slogan = styled.div`
  margin-top: 10px;
`;

const SloganImg = styled.img`
  height: 20px;
  padding-left: 25px;
`;

const SubNav = styled.div`
  width: calc(100% / 12);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: right;
`;

const Search = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  cursor: pointer;
`;

const DropDown = styled.div`
  display: flex;
  cursor: pointer;
`;

const Language = styled.div`
  font-size: 0.8rem;
`;

export default TopBar;
