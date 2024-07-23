import css from './CamperCard.module.css';
import CampersDetails from '../CampersDetails/CampersDetails';
import Icon from '../Icon/Icon';

const CamperCard = ({ data }) => {
  const { name, gallery, price, rating, location } = data;

  return (
    <div className={css.camperCard}>
      <div className={css.camperImage}>
        <img src={gallery[0]} alt={name} width={290} height={310} />
      </div>
      <div>
        <div>
          <p>{name}</p>
          <p>€{price}.00</p>
          <Icon
            width="24"
            height="24"
            iconName="heart"
            styles={css.iconHeart}
            // style={{ fill: 'blue' }}
          ></Icon>
        </div>
        <p>{rating}</p>
        <p>{location}</p>
      </div>

      {/* modal
      <CampersDetails camper={data} /> */}
    </div>
  );
};

export default CamperCard;
