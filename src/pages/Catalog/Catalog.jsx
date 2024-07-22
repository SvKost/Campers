import CampersList from '../../components/CampersList/CampersList';
import Container from '../../components/Container/Container';
import DocumentTitle from '../../components/DocumentTitle';
import Filters from '../../components/Filters/Filters';
import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>
      <Container>
        <div className={css.catalog}>
          <Filters />
          <CampersList />
        </div>
      </Container>
    </>
  );
};

export default Catalog;
