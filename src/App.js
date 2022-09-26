import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListcontainer'

function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer title="Body section." />

    </div>
  );
}

export default App;
