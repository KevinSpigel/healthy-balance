import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer title="Item List Container" />} />
          <Route path="/detail" element={<ItemDetailContainer />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
