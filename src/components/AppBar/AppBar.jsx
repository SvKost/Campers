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
      <header className={css.header}>
        <nav className={css.nav}>
          <div>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </div>
          <div className={css.headerRight}>
            <NavLink to="/catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
            <button type="button" className={css.favoriteButton}>
              <NavLink to="/favorites" className={buildLinkClass}>
                <Icon
                  iconName="heart-def"
                  width="24"
                  height="24"
                  styles={css.iconHeart}
                />
              </NavLink>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default AppBar;
