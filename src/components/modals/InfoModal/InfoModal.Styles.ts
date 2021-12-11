import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9990;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: appear;
  animation-duration: 300ms;
  font-family: calibri;
`;

export const Dialog = styled.div`
  width: 100%;
  max-width: 550px;
  background: white;
  position: relative;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  // -webkit-animation-name: animatetop;
  // -webkit-animation-duration: 0.4s;
  // animation-name: slide-in;
  // animation-duration: 0.5s;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dbdbdb;
  justify-content: space-between;
`;

export const Title = styled.div`
  margin: 0;
  font-size: 22px;
`;

export const Body = styled.div`
  overflow: auto;
`;

export const Content = styled.div`
  padding: 1rem;
  font-size: 18px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-top: 1px solid #dbdbdb;
  justify-content: flex-end;
`;
