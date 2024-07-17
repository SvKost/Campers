import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <title>HomePage</title>
      <h1>Welcome to Campers rent!</h1>
      <article>
        <p>
          You can see our campers in{' '}
          <Link to="/catalog">
            <b>Catalog</b>
          </Link>
        </p>
      </article>
    </div>
  );
};

export default HomePage;
