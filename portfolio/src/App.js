import React, {useState} from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import "./App.css"
import { NavItems } from './contants';

const App = () => {
  const [activePage, setActivePage] = useState(NavItems.about);
  return (
    <main >
      <Sidebar />
      <div className="main-content">
        <Navbar setActivePage={setActivePage} activePage={activePage} />
        <MainContent activePage={activePage} handleActivePage={setActivePage}/>
      </div>
    </main>
  );
};

export default App;
