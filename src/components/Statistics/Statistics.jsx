import css from './Statistics.module.css';
import PropTypes from 'prop-types';

console.log(css);

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={`${css.item} ${css[stat.id]}`}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};
