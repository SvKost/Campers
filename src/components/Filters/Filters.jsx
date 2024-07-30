import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './Filters.module.css';
import { selectLocation } from '../../redux/selectors';
import { useId } from 'react';

const Filters = () => {
  // const location = useSelector(selectLocation);
  const inputLocationId = useId();

  return (
    <div className={css.filtersContainer}>
      <div className={css.filtersLocationDiv}>
        <label className={css.filtersLabel} htmlFor="location">
          Location
        </label>
        <div className={css.locationInput}>
          <input
            className={css.filtersInput}
            type="text"
            name="location"
            // value={location}
            id={inputLocationId}
            placeholder="Kyiv, Ukraine"
          />
          <Icon iconName="map-pin" width="18" height="20" styles={css.mapPin} />
        </div>
      </div>

      <p className={css.filtersSupportingText}>Filters</p>
      <h4 className={css.filterCardsHeader}>Vehicle equipment</h4>
      <div className={css.filterCards}>equipments</div>
      <h4 className={css.filterCardsHeader}>Vehicle type</h4>
      <div className={css.filterCards}>types</div>
      <Button>Search</Button>
    </div>
  );
};

export default Filters;
