import React from "react";
import styled from "styled-components";
import slogan from "../assets/images/topbar/SloganWhite.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

const BottomBar = () => {
  return (
    <Container>
      All Rights Reserved © 2022 The Modern Touch | Term & Conditions | Privacy
      Policy
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1rem;

  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-style: italic;
  @media (max-width: 960px) {
    
  }
`;

export default BottomBar;
