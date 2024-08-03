import Icon from '../Icon/Icon';
import css from './CamperModal.module.css';

const CamperModal = ({ data, onClose }) => {
  const { name, price, location, reviews, rating, gallery } = data;

  return (
    <div className={css.modalWrapper}>
      <div className={css.modalHeader}>
        <p>{name}</p>
        <p>{rating}</p>
        <p>{price}</p>{' '}
      </div>
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

      <div className={css.modalContent}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid non
          reiciendis consequuntur, magni suscipit tenetur dignissimos eaque!
          Minima, reiciendis vitae commodi nulla voluptatem, saepe est molestias
          temporibus repudiandae aspernatur incidunt quaerat perferendis
          consectetur rerum nemo asperiores repellendus. Alias dolores,
          exercitationem fuga ratione ab id debitis enim ea est perspiciatis
          voluptatem.
        </p>
        <div>
          {gallery.map((image, index) => {
            <img
              key={index}
              src={image}
              alt={name}
              className={css.camperImage}
              width={290}
              height={310}
            />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CamperModal;
