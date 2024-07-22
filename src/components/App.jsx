import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
// import HomePage from '../pages/HomePage/HomePage';
// import Catalog from '../pages/Catalog/Catalog';
// import Layout from '../components/Layout';
// import CampersDetails from '../components/CampersDetails/CampersDetails';
// import Favorites from '../pages/Favorites/Favorites';

import { lazy } from 'react';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
const Layout = lazy(() => import('../components/Layout'));
const CampersDetails = lazy(
  () => import('../components/CampersDetails/CampersDetails')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="/catalog/:advertsId/*" element={<CampersDetails />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
