import { IoCubeOutline } from 'react-icons/io5';

function MetricChip({ value = 0, style, logo = true }) {
  return (
    <p className="chip chip--metric" style={style}>
      {logo ? <IoCubeOutline /> : ''}
      <span>{value}</span>
    </p>
  );
}

export { MetricChip };