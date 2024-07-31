import { NavLink } from 'react-router-dom';
import Container from '../../components/Container/Container';
// import AppBar from '../../components/AppBar/AppBar';
import DocumentTitle from '../../components/DocumentTitle';
import CampersDescription from '../../components/CampersDescription/CampersDescription';

const HomePage = () => {
  return (
    <div>
      <DocumentTitle>Home Page</DocumentTitle>

      <Container>
        <section>
          You can see our campers in{' '}
          <NavLink to="/catalog">
            <b>Catalog</b>
          </NavLink>
          <p>About us</p>
        </section>
        <CampersDescription />
      </Container>
    </div>
  );
};

export default HomePage;
