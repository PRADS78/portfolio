import React, { useState } from 'react';
import About from '../components/MainContent/About';
import Skills from "./MainContent/Skills"
import Contact from '../components/MainContent/Contact';
import Modal from '../components/MainContent/Modal';
import Projects from './MainContent/Project';
import { NavItems } from '../contants';

const MainContent = ({activePage, handleActivePage}) => {
  const data = {
    isOpen: false,
    id: null,
    message: ""
  }
  const [modalData, setModalData] = useState(data);

  const handleModal = (isOpen, id, message) => {
    setModalData({isOpen,id,message});
  };

  return (
    <div>
      {<Modal isOpen={modalData.isOpen} closeModal={() => handleModal(false, null, "")} id={modalData.id} message={modalData.message}/>}
      {activePage === NavItems.about && <About handleActivePage={handleActivePage}/>}      
      {activePage === NavItems.projects && <Projects/>}
      {activePage === NavItems.skills && <Skills />}
      {activePage === NavItems.contact && <Contact handleModal={handleModal}/>}
    </div>
  );
};

export default MainContent;
