import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import LogOut from './LogOut/LogOut';
import ControlArea from './ControlArea/ControlArea';

const Home = () => {
  const navigate = useNavigate();
  const { User } = useContext(UserContext) ?? {}
  if (User) {    
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Welcome {User?.name}</h1>
      {User!.role === "Admin" ? 
      <ControlArea/>
      : 
      <button 
      onClick={() => navigate('/MyTask')}>
        My Task</button> 
        }
      {User ? <LogOut/> : <></>}
    </div>
  );
};
}

export default Home;