import css from './CamperCard.module.css';
import CampersDetails from '../CampersDetails/CampersDetails';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

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
                iconName="heart"
                width="24"
                height="24"
                styles={css.iconHeart}
              />
            </button>
          </div>
        </div>

        <p>
          {rating}({reviews.length} Reviews)
        </p>
        <p>{location}</p>

        <p>The pictures shown here are example vehicles of the respective.</p>

        <CampersDetails data={data} />

        <Button>Show more</Button>
      </div>
    </div>
  );
};

export default CamperCard;
