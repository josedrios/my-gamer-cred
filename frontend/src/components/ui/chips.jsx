import { IoCubeOutline } from 'react-icons/io5';

function MetricChip({ value }) {
  return (
    <p className="chip chip--metric">
      <IoCubeOutline />
      <span>{value}</span>
    </p>
  );
}

export { MetricChip };
