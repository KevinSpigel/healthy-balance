import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Footer } from './components/Footer/Footer';


function App() {

  return (
    <div className="App">

      <NavBar />
      <ItemListContainer title="Body section." />
      <Footer />

    </div>
  );
};

export default App;
