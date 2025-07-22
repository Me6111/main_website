import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import NavBar from './NavBar/NavBar';
import MainPage from './MainPage';

import WTFD_page from './projects/WTFD/WTFD_page';
import Linguana_page from './projects/Linguana/Linguana_page';
import DevBusinessCard from './projects/DevBusinessCard/DevBusinessCard';




const ClashOfMetal_page = () => <div>Metal Games Project Page</div>;
const Tarots_page = () => <div>Tarots Project Page</div>;
const Shop_page = () => <div>Shop Page</div>;

function App() {
  const sections = [
    { id: "WFTDCard", name: "WTFD", href: "/projects/wtfd", },
    { id: "LinguanaCard", name: "Linguana", href: "/projects/linguana" },
    { id: "MetalGamesCard", name: "Metal Games", href: "/projects/metal-games" },
    { id: "TarotsCard", name: "Tarots", href: "/projects/tarots" },
    { id: "Shop", name: "Shop", href: "/projects/shop" },
  ];





  return (
    <Router>
      <div className='mainContainer'>
        
        <NavBar sections={sections} />
        
        
        <Routes>
          <Route path="/" element={
            <>
              <main>
                <MainPage></MainPage>
              </main>
            </>
          } />
          <Route path="/projects/wtfd" element={<WTFD_page />} />
          <Route path="/projects/linguana" element={<Linguana_page />} />
          <Route path="/projects/metal-games" element={<ClashOfMetal_page />} />
          <Route path="/projects/tarots" element={<Tarots_page />} />
          <Route path="/projects/shop" element={<Shop_page />} />

          <Route path="/DevBusinessCard" element={<DevBusinessCard />} />

        </Routes>



        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} John P2. All rights reserved.</p>
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </footer>


      </div>
    </Router>
  );
}

export default App;
