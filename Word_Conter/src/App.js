import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  
  return (
    <>
      <div className="bg-[#042743] w-[100vw] h-[100vh] text-white overflow-x-hidden">
        <Header />
        <div className="w-11/12 max-w-[1140px] mx-auto flex flex-col">
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
