import "./App.css";
import Main from "./Layout/Main/Main";
import AppRoutes from "./routers/AppRoutes";

const App = () => {
  return (
      <Main children={<AppRoutes/>}/>
  );
};

export default App;
