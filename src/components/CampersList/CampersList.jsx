import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdverts,
  selectFilteredAdverts,
  selectIsError,
  selectIsLoading,
} from '../../redux/selectors';
import CamperCard from '../CamperCard/CamperCard';
import { NavLink, useLocation } from 'react-router-dom';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';
import css from './CampersList.module.css';
import { useState } from 'react';

const CampersList = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  // const location = useLocation();

  const itemsPerPage = 4;
  const [advertsPerPage, setAdvertsPerPage] = useState(itemsPerPage);

  const handleLoadMore = () => {
    setAdvertsPerPage(setAdvertsPerPage => setAdvertsPerPage + itemsPerPage);
  };

  const advertsShown = adverts.slice(0, advertsPerPage);

  return (
    <div className={css.campersListContainer}>
      {isError && <p>Error loading adverts</p>}
      <ul className={css.campersList}>
        {advertsShown.map(advert => (
          <li key={advert._id}>
            <CamperCard data={advert} />
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {advertsPerPage < adverts.length && (
        <ButtonLoadMore type="button" onClick={handleLoadMore}>
          Load more
        </ButtonLoadMore>
      )}
    </div>
  );
};

export default CampersList;
