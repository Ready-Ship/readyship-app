import { FC, MouseEvent } from 'react';
import '../stylesheets/components/Overlay.css';

interface OverlayProps {
  show: boolean,
  click: (event: MouseEvent) => void
}

const Overlay:FC<OverlayProps> = ({ show, click }) => {
  if(show) return <div className="overlay" onClick={click}></div>;
  return null;
};

export default Overlay;
