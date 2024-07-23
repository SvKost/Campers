import { useSelector } from 'react-redux';
import {
  selectAdverts,
  selectFilteredAdverts,
  selectIsError,
  selectIsLoading,
} from '../../redux/selectors';
import CamperCard from '../CamperCard/CamperCard';
import { NavLink, useLocation } from 'react-router-dom';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';

const CampersList = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const location = useLocation();

  return (
    <div>
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
      <ButtonLoadMore>Load more</ButtonLoadMore>
    </div>
  );
};

export default CampersList;
