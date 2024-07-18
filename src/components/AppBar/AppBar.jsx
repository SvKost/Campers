import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

const AppBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <header>
      <NavLink to="home" className={css.logo}>
        Campers Rent
      </NavLink>
      <nav>
        <NavLink to="/catalog" className={buildLinkClass}>
          catalog
        </NavLink>
        <NavLink to="/favorites" className={buildLinkClass}>
          <Icon iconName="favorite" width="18" height="18" />
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
