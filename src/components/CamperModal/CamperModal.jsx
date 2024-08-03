import HeaderLocation from '../HeaderLocation/HeaderLocation';
import Icon from '../Icon/Icon';
import css from './CamperModal.module.css';

const CamperModal = ({ data, onClose }) => {
  const { name, price, gallery, description } = data;

  return (
    <div className={css.modalWrapper}>
      <div className={css.modalContent}>
        <div className={css.modalHeader}>
          <HeaderLocation data={data} />
        </div>
        <p className={css.camperPrice}>€{price}</p>

        <button
          className={css.buttonCloseModal}
          type="button"
          onClick={() => onClose()}
        >
          <Icon
            iconName="cross"
            width={32}
            height={32}
            styles={css.iconCloseModal}
          ></Icon>
        </button>
        <div className={css.camperDescription}>
          <div className={css.gallery}>
            {gallery.map((image, index) => {
              <img
                key={index}
                src={image}
                alt={`${name} ${index + 1}`}
                className={css.camperImage}
                width={290}
                height={310}
              />;
            })}
          </div>
          <div className={css.descriptionText}>{description}</div>
        </div>
        <div className={css.additionalDescription}>
          <div className={css.additionalHeader}>Features</div>
          <div className={css.additionalHeader}>Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default CamperModal;
