import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { QuienesSomosContainer } from './components/QuienesSomosContainer/QuienesSomosContainer';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CustomProvider } from './context/CartContext';



function App() {

  return (
    <CustomProvider>
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
              <Route path="/QuienesSomos" element={<QuienesSomosContainer />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>

        </div>
      </BrowserRouter>
    </CustomProvider>
  );
};

export default App;
