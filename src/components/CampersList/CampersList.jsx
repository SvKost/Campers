import { useSelector } from 'react-redux';
import {
  selectAdverts,
  selectFilteredAdverts,
  selectIsError,
  selectIsLoading,
} from '../../redux/selectors';
import CamperCard from '../CamperCard/CamperCard';
import { NavLink, useLocation } from 'react-router-dom';

const CampersList = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const location = useLocation();

  console.log(adverts);

  return (
    <section>
      <h4>CampersList</h4>
      <ul>
        {adverts.map(advert => {
          return (
            <li key={advert._id}>
              <NavLink to={`/adverts/${advert._id}`} state={{ from: location }}>
                <CamperCard data={advert} />
              </NavLink>
            </li>
          );
        })}
      </ul>
      <button>Load more</button>
    </section>
  );
};

export default CampersList;
