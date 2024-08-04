import { Suspense } from 'react';
import CamperFeatures from '../CamperFeatures/CamperFeatures';
import CamperReviews from '../CamperReviews/CamperReviews';
import HeaderLocation from '../HeaderLocation/HeaderLocation';
import Icon from '../Icon/Icon';
import css from './CamperModal.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';

const CamperModal = ({ data, onClose }) => {
  if (!data) {
    return null;
  }

  const { name, price, gallery, description } = data;

  return (
    <div className={css.modalWrapper}>
      <div className={css.modalContent}>
        <div className={css.modalHeader}>
          <HeaderLocation data={data} />
        </div>
        <p className={css.camperPrice}>€{price}</p>
        <button
          className={css.buttonCloseModal}
          type="button"
          onClick={() => onClose()}
        >
          <Icon
            iconName="cross"
            width={32}
            height={32}
            styles={css.iconCloseModal}
          ></Icon>
        </button>
        <div className={css.camperDescription}>
          <div className={css.gallery}>
            {gallery.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt={`${name} ${index + 1}`}
                  width={290}
                  height={310}
                  className={css.camperImage}
                  style={{ width: `calc(100% / ${gallery.length} - 16px)` }}
                />
              );
            })}
          </div>
          <div className={css.descriptionText}>{description}</div>
        </div>

        <div className={css.additionalInfo}>
          <ul className={css.tabList}>
            {/* <NavLink to="features" className={css.tabListBtn}> */}
            <button className={css.tabListBtn}>Features</button>
            {/* </NavLink> */}
            {/* <NavLink to="reviews" className={css.tabListBtn}> */}
            <button className={css.tabListBtn}>Reviews</button>
            {/* </NavLink> */}
          </ul>
          {/* <div className={css.tabLine}></div> */}
          {/* <Suspense>
            <Routes>
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} />
            </Routes>
          </Suspense> */}
        </div>
      </div>
    </div>
  );
};

export default CamperModal;
