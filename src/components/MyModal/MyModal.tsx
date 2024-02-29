import { ModalProps, Modal } from "antd";
import { observer } from "mobx-react-lite";

import { modalStore } from "../../modules/modal/modal.store";
import classNames from "classnames";

import styles from "./MyModal.module.scss";

interface MyModalProps extends ModalProps {
  customCancel?: () => void;
}

export const MyModal = observer((props: MyModalProps) => {
  const handleCancel = () => {
    props.customCancel && props.customCancel();
    modalStore.clearModal();
  };

  const modalClasses = classNames([styles.container]);

  return (
    <Modal className={modalClasses} {...props} onCancel={handleCancel}>
      {props.children}
    </Modal>
  );
});
