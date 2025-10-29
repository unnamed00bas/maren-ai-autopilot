import { Navigation } from './Navigation';

interface HeaderProps {
  onCalcClick: () => void;
  onDemoClick: () => void;
}

export const Header = ({ onCalcClick, onDemoClick }: HeaderProps) => {
  return <Navigation onCalcClick={onCalcClick} onDemoClick={onDemoClick} />;
};
