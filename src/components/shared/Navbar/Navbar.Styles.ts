import styled from "styled-components";

export const NavbarLinkContainer = styled.button`
  align-items: center;
  width: auto;
  margin: 10px;
  padding: 4px 10 px;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: black;
  background-color: white;
  text-decoration: none;
  :hover {
    background-color: #98efc0;
    border-radius: 5px;
  }
  & * {
    color: black;
    text-decoration: none;
  }
`;

export const NavbarContainer = styled.div`
  border-bottom: 3px solid #98efc0;
  margin-bottom: 5px;
`;
