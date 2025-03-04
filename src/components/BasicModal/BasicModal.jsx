import Modal from 'react-modal';
import css from './BasicModal.module.css';

Modal.setAppElement('#root');

const BasicModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>{children}</div>
    </Modal>
  );
};

export default BasicModal;
