import './App.css'
import Main from './layout/Main/Main'
import AppRoutes from './router/AppRoutes'

function App() {
  return (
    <Main children={<AppRoutes/>}/>
  )
}

export default App
