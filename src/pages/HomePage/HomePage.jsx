import { NavLink } from 'react-router-dom';
import Container from '../../components/Container/Container';
import AppBar from '../../components/AppBar/AppBar';

const HomePage = () => {
  return (
    <div>
      <title>Home Page</title>

      <AppBar />
      <section>
        <Container>
          <div>
            You can see our campers in{' '}
            <NavLink to="/catalog">
              <b>Catalog</b>
            </NavLink>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
