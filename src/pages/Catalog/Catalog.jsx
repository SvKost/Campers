import CampersList from '../../components/CampersList/CampersList';
import Container from '../../components/Container/Container';
import DocumentTitle from '../../components/DocumentTitle';

const Catalog = () => {
  return (
    <div>
      <DocumentTitle>Catalog</DocumentTitle>
      <section>
        <Container>
          <div>filters</div>
          <div>
            <CampersList />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Catalog;
