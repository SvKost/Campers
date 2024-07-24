import CampersFeatures from '../CampersFeatures/CampersFeatures';
import CampersReviews from '../CampersReviews/CampersReviews';

const CampersDetails = ({ data }) => {
  const {
    airConditioner,
    bathroom,
    kitchen,
    beds,
    TV,
    CD,
    radio,
    shower,
    toile,
    freezer,
    hob,
    microwave,
    gas,
    water,
  } = data;

  return (
    <div>
      <h1>CampersDetails</h1>
    </div>
  );
};

export default CampersDetails;
