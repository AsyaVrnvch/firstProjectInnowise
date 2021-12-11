import React from "react";
import Button from "../../shared/Button/Button";
import * as Styles from "./InfoModal.Styles";
import { selectIsAuth } from "../../../redux/selectors/auth";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppRoutes } from "../../../config/routes";

interface ModalProps {
  title: string;
  content?: string;
  onClose: () => void;
}

const InfoModal: React.FC<ModalProps> = ({ title, content, onClose, children }) => {
  const isAuth = useSelector(selectIsAuth);
  const history = useHistory();

  const toMain = () => {
    history.replace(AppRoutes.Main);
  }

  const close = !isAuth ? onClose : toMain;
  
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
          <Button onClick={close}>OK</Button>
        </Styles.Footer>
      </Styles.Dialog>
    </Styles.Modal>
  );
};

export default InfoModal;
