import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import Icon from '../Icon/Icon';

const AppBar = () => {
  return (
    <header>
      <NavLink to="home" className={css.logo}>
        Campers Rent
      </NavLink>
      <nav>
        <NavLink to="/catalog">catalog</NavLink>
        <NavLink to="/favorites" className={css.favorites}>
          <Icon iconName="favorite" width="18" height="18" />
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
