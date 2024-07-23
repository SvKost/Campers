import css from './ButtonLoadMore.module.css';

const ButtonLoadMore = ({ children }) => {
  return <button className={css.button}>{children}</button>;
};

export default ButtonLoadMore;
