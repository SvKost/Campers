// import { useDispatch } from 'react-redux';

import CampersDetails from '../CampersDetails/CampersDetails';

const CamperCard = ({ data }) => {
  const { name, gallery, price, rating, location } = data;

  return (
    <div className="camperCard">
      <img src={gallery[0]} alt={name} width={290} height={310} />
      <div>
        <h4>{name}</h4>
        <p>{price}</p>
        <p>{rating}</p>
        <p>{location}</p>
      </div>
      <CampersDetails camper={data} />
    </div>
  );
};

export default CamperCard;
