import Modal from 'react-modal';
import css from './BasicModal.module.css';

Modal.setAppElement('#root');

const BasicModal = ({ openModal, closeModal, children }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={openModal}
      onRequestClose={() => closeModal()}
      overlayClassName={css.overlay}
    >
      {children}
    </Modal>
  );
};

export default BasicModal;
