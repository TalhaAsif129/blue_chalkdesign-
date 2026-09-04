import React from 'react';
import './App.css';
import './index.css';
import Allroutes from './components/Allroutes';
import PageLoader from './components/PageLoader';

function App() {
  return (
    <>
      <PageLoader />
      <Allroutes />
    </>
  );
}

export default App;