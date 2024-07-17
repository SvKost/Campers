import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage/HomePage';
import Catalog from '../pages/Catalog/Catalog';
import Favorites from '../pages/Favorites/Favorites';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/catalog" element={<Catalog />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

// “/” - домашня сторінка з загальним описом послуг, що надає компанія

// “/catalog” - сторінка, що містить каталог камперів різної комплектації

// “/favorites” - сторінка з оголошеннями(оформлення на ваш розсуд), які були додані користувачем в улюблені

// Якщо користувач зайшов за маршрутом, якого не існує, його необхідно перенаправляти на  домашню сторінку.
