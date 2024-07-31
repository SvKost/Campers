import { useSelector } from 'react-redux';
import {
  selectAdverts,
  selectIsError,
  selectIsLoading,
} from '../../redux/selectors';
import CamperCard from '../CamperCard/CamperCard';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';
import css from './CampersList.module.css';
import { useState } from 'react';

const CampersList = () => {
  const adverts = useSelector(selectAdverts);
  const [advertsPerPage, setAdvertsPerPage] = useState(4);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  // const location = useLocation();

  const shownAdverts = adverts.slice(0, advertsPerPage);

  const handleLoadMore = () => {
    setAdvertsPerPage(setAdvertsPerPage => setAdvertsPerPage + 4);
  };

  return (
    <div className={css.campersListContainer}>
      {isError && <p>Error loading adverts</p>}
      <ul className={css.campersList}>
        {shownAdverts.map(advert => (
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
