import PropTypes from 'prop-types';
import {
  StatPercentage,
  StatLabel,
  StatItem,
  StatList,
  SectionTitle,
  Section,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} id={id}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
