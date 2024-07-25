import css from './CamperCard.module.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Categories from '../Categories/Categories';

const CamperCard = ({ data }) => {
  const { name, gallery, price, rating, location, reviews } = data;

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
        <div>
          <p>{name}</p>
          <div>
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

        <div>
          <Icon iconName="star" width="16" height="16" />
          {rating} ({reviews.length} Reviews)
        </div>
        <div>
          <Icon iconName="map-pin" width="18" height="20" />
          {location}
        </div>

        <p>The pictures shown here are example vehicles of the respective.</p>

        <div className={css.detailsContainer}>
          <Categories data={data} />
        </div>

        <Button>Show more</Button>
      </div>
    </div>
  );
};

export default CamperCard;
