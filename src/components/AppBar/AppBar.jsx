import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

const AppBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home </NavLink>

          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
          <NavLink to="/favorites" className={buildLinkClass}>
            <Icon iconName="favorite" width="18" height="18" />
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default AppBar;
