import React from "react";
import Button from "../../shared/Button/Button";
import * as Styles from "./InfoModal.Styles";

interface ModalProps {
  title: string;
  content?: string;
  onClose: () => void;
}

const InfoModal: React.FC<ModalProps> = ({ title, content, onClose, children }) => {
  return (
    <Styles.Modal>
      <Styles.Dialog>
        <Styles.Header>
          <Styles.Title>{title}</Styles.Title>
        </Styles.Header>
        <Styles.Body>
          <Styles.Content>{content}{children}</Styles.Content>
        </Styles.Body>
        <Styles.Footer>
          <Button onClick={onClose}>OK</Button>
        </Styles.Footer>
      </Styles.Dialog>
    </Styles.Modal>
  );
};

export default InfoModal;
