import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/game');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Welcome to the Game</h1>
      <button onClick={handlePlayClick} style={{ fontSize: '24px', padding: '10px 20px' }}>
        PLAY
      </button>
    </div>
  );
};

export default Home;