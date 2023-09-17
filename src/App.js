import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home.jsx"
import Sobre from "./pages/Sobre.jsx"

function App() {

  const location = window.location.pathname;
  console.log(location);

  const Router = () => 
  {
    if(location === "/")
    {
      return <Home />
    }
    else
    {
      return <Sobre />
    }
  }

  return (
    <>
      {Router()}
    </>
  );
}

export default App;
