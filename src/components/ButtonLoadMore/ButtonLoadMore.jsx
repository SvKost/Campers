import css from './ButtonLoadMore.module.css';

const ButtonLoadMore = ({ children, onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonLoadMore;
