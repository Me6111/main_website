import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import WTFD_page from './projects/WTFD/WTFD_page';
import Linguana_page from './projects/Linguana/Linguana_page';
import DevBusinessCard from './projects/DevBusinessCard/DevBusinessCard';
import MyStack from './projects/MyStack/MyStack';
import ReadyComponents from './projects/MyStack/ReadyComponents/ReadyComponents';

const ClashOfMetal_page = () => <div>Metal Games Project Page</div>;
const Tarots_page = () => <div>Tarots Project Page</div>;
const Shop_page = () => <div>Shop Page</div>;


function App() {
  return (
    <Router>

          <div
            className="a_0"
            style={{
              width: '100%',
              height: '100%',
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/projects/wtfd" element={<WTFD_page />} />
              <Route path="/projects/linguana" element={<Linguana_page />} />
              <Route path="/projects/metal-games" element={<ClashOfMetal_page />} />
              <Route path="/projects/tarots" element={<Tarots_page />} />
              <Route path="/projects/shop" element={<Shop_page />} />
              <Route path="/DevBusinessCard" element={<DevBusinessCard />} />
              <Route path="/MyStack" element={<MyStack />} />
              <Route path="/MyStack/ReadyComponents" element={<ReadyComponents />} />
            </Routes>





          </div>

    </Router>
  );
}

export default App;
