import Button from '../Button/Button';
import css from './Filters.module.css';

const Filters = () => {
  return (
    <section>
      <div className={css.filtersContainer}>
        <div className={css.filtersLocationDiv}>
          <label className={css.filtersLabel} htmlFor="location">
            Location
          </label>
          <input
            className={css.filtersInput}
            type="text"
            name="location"
            placeholder="City"
          ></input>
        </div>

        <p className={css.filtersSupportingText}>Filters</p>
        <h4 className={css.filterCardsHeader}>Vehicle equipment</h4>
        <div className={css.filterCards}>equipments</div>
        <h4 className={css.filterCardsHeader}>Vehicle type</h4>
        <div className={css.filterCards}>types</div>
        <Button>Search</Button>
      </div>
    </section>
  );
};

export default Filters;
