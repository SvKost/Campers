import CampersFeatures from '../CampersFeatures/CampersFeatures';
import CampersReviews from '../CampersReviews/CampersReviews';

const CampersDetails = ({ camper }) => {
  const { name, price, _id, rating, reviews, location, description } = camper;

  return (
    <div>
      <h1>CampersDetails</h1>
      {/* <Route path="/catalog/:advertsId/*" element={<CampersDetails />}>
        <Route path="features" element={<CampersFeatures />} />
        <Route path="reviews" element={<CampersReviews />} />
      </Route> */}
      <CampersFeatures />
      <CampersReviews />
    </div>
  );
};

export default CampersDetails;
