import styled from "styled-components";
import FormButton from "./buttons/formButton";

interface ModalProps {
    title: string,
    content: string,
    onClose: ()=>void
}

const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    animation-name: appear;
    animation-duration: 300ms;
    font-family:calibri;
`;

const Dialog = styled.div`
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: slide-in;
    animation-duration: 0.5s;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #dbdbdb;
    justify-content: space-between;
`;

const Title = styled.div`
    margin: 0;
    font-size:22px;
`;

const Body = styled.div`
    overflow: auto;
`;

const Content = styled.div`
    padding: 1rem;
    font-size:18px;
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-top: 1px solid #dbdbdb;
    justify-content: flex-end;
`;

const InfoModal = ({title, content, onClose }:ModalProps) => {
    return (
        <Modal>
            <Dialog>
                <Header>
                    <Title>{title}</Title>
                </Header>
                <Body>
                    <Content>{content}</Content>
                </Body>
                <Footer>
                    <FormButton onClick={onClose}>OK</FormButton>
                </Footer>
            </Dialog>
        </Modal>
    )
}

export default InfoModal;