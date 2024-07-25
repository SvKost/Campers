import Icon from '../Icon/Icon';
import css from './Categories.module.css';

const Categories = ({ data }) => {
  const {
    adults,
    transmission,
    engine,
    details: { kitchen, beds, airConditioner },
  } = data;

  return (
    <div>
      <ul className={css.detailsList}>
        <li>
          <Icon iconName="users" width="20" height="20"></Icon>
          {adults} adults
        </li>
        <li>
          <Icon iconName="automatic" width="20" height="20"></Icon>
          {transmission}
        </li>
        <li>
          <Icon iconName="fuel" width="20" height="20"></Icon>
          {engine}
        </li>
        <li>
          <Icon iconName="kitchen" width="20" height="20"></Icon>
          {kitchen} kitchen
        </li>
        <li>
          <Icon iconName="bed" width="20" height="20"></Icon>
          {beds} beds
        </li>
        <li>
          <Icon iconName="wind" width="20" height="20"></Icon>
          {airConditioner} AC
        </li>
      </ul>
    </div>
  );
};

export default Categories;
