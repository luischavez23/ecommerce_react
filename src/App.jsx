import './App.css'
import './index.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting={'Bienvenido'}/>
      </div>
    </>
  )
}

export default App;
 