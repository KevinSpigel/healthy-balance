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

        <header>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/QuienesSomos" element={<ItemListContainer />} />
            <Route path="/TipsSaludables" element={<ItemListContainer />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
