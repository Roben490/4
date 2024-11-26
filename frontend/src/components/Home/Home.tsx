import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { playerContext } from '../../context/playerContext';

const Home = () => {
  const navigate = useNavigate();
  const { player } = useContext(playerContext) ?? {}


  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Welcome to the Game</h1>
      {player ? 
      <button 
        onClick={() => navigate('/game')}>
        PLAY</button> 
        : 
        <button onClick={() => navigate('/register')} 
        >Login</button>} 
    </div>
  );
};

export default Home;