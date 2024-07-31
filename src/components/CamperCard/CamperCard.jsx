import css from './CamperCard.module.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import BasicModal from '../BasicModal/BasicModal';
import CampersDescription from '../CampersDescription/CampersDescription';
import Categories from '../Categories/Categories';
import { useState } from 'react';

const CamperCard = ({ data }) => {
  const { name, gallery, price, rating, location, reviews } = data;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <div className={css.camperCard}>
      <div>
        <img
          className={css.camperImage}
          src={gallery[0]}
          alt={name}
          width={290}
          height={310}
        />
      </div>
      <div className={css.cardDescription}>
        <div className={css.cardHeader}>
          <p className={css.camperName}>{name}</p>
          <div className={css.headerRight}>
            <p>€{price}</p>
            <button
              type="button"
              className={css.favoriteButton}
              // onClick={handleFavoriteClick}
            >
              <Icon
                iconName="heart-def"
                width="24"
                height="24"
                styles={css.iconHeart}
              />
            </button>
          </div>
        </div>
        <div className={css.ratingLocationDiv}>
          <div className={css.rating}>
            <Icon
              iconName="star"
              width="16"
              height="16"
              styles={css.iconStar}
            />
            {rating} ({reviews.length} Reviews)
          </div>
          <div className={css.location}>
            <Icon
              iconName="map-pin"
              width="18"
              height="20"
              styles={css.mapPin}
            />
            {location}
          </div>
        </div>
        <p className={css.supportingText}>
          The pictures shown here are example vehicles of the respective.
        </p>

        <div className={css.categoriesContainer}>
          <Categories data={data} />
        </div>

        <Button type="button" onClick={openModal}>
          Show more
        </Button>
        <BasicModal openModal={modalIsOpen} closeModal={closeModal}>
          <CampersDescription data={data} />
        </BasicModal>
      </div>
    </div>
  );
};

export default CamperCard;
