import Button from '../Button/Button';

const Filters = () => {
  return (
    <section>
      <label htmlFor="location">Location</label>
      <input type="text" name="location" placeholder=""></input>

      <p>Filters</p>
      <h4>Vehicle equipment</h4>
      <h4>Vehicle type</h4>

      <Button>Search</Button>
    </section>
  );
};

export default Filters;
