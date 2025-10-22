import { IoCubeOutline } from 'react-icons/io5';

function GamerCredChip({ value }) {
  return (
    <p className="chip chip--gamer-cred">
      <IoCubeOutline />
      <span>{value}</span>
    </p>
  );
}

export { GamerCredChip };
