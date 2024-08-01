import Modal from 'react-modal';
import Icon from '../Icon/Icon';
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

  // return (
  //   <>
  //     {isOpen && (
  //     <div className={css.modal}>
  //       <div className={css.modalWrapper}>
  //         <div className={css.modalContent}>
  //           <button className={css.buttonCloseModal} onClick={() => onClose()}>
  //             <Icon
  //               iconName="cross"
  //               width={32}
  //               height={32}
  //               styles={css.iconCloseModal}
  //             ></Icon>
  //           </button>
  //           {children}
  //         </div>
  //       </div>
  //     </div>
  //     )}
  //   </>
  // );
};

export default BasicModal;
