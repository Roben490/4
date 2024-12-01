import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Profile from '../User/MiniProfile';
import LogOut from './LogOut/LogOut';

const Home = () => {
  const navigate = useNavigate();
  const { User } = useContext(UserContext) ?? {}
  console.log(User);


  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Welcome to the Game</h1>
      {User ? <Profile/> : <></>}
      {User ? 
      <button 
        onClick={() => navigate('/game')}>
        PLAY</button> 
        : 
        <button onClick={() => navigate('/login')} 
        >Login</button>} 
      {User ? <LogOut/> : <></>}
    </div>
  );
};

export default Home;