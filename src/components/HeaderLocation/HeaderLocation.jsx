import Icon from '../Icon/Icon';
import css from './HeaderLocation.module.css';

const HeaderLocation = ({ data }) => {
  const { name, rating, location, reviews } = data;
  return (
    <div className={css.headerLocation}>
      <p className={css.camperName}>{name}</p>

      {/* LOCATION */}
      <div className={css.ratingLocationDiv}>
        <div className={css.rating}>
          <Icon iconName="star" width="16" height="16" styles={css.iconStar} />
          {rating} ({reviews.length} Reviews)
        </div>
        <div className={css.location}>
          <Icon iconName="map-pin" width="18" height="20" styles={css.mapPin} />
          {location}
        </div>
      </div>
    </div>
  );
};

export default HeaderLocation;
