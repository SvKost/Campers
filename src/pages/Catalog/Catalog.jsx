import { useEffect } from 'react';
import CampersList from '../../components/CampersList/CampersList';
import Container from '../../components/Container/Container';
import DocumentTitle from '../../components/DocumentTitle';
import Filters from '../../components/Filters/Filters';
import css from './Catalog.module.css';
import { useDispatch } from 'react-redux';
import { getAdverts } from '../../redux/operations';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

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
