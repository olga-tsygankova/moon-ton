import './Logo.css';
import { useNavigate } from 'react-router-dom';
import { MoonTonLogo } from '../../../../ui/svg';

export const Logo = () => {
  const navigate = useNavigate();
  const handleGoMain = () => navigate('/');

  return (
    <div className="logo" onClick={handleGoMain}>
      <MoonTonLogo />
    </div>
  );
};
