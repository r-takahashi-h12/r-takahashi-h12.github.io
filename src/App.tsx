import React from 'react';
import './App.css';

import Biography from 'components/biography';
import Education from 'components/education';
import Publications from 'components/publications';
import Experiences from 'components/experiences'
import Footer from 'components/footer';


export default function App() {
  return (
    <>
        <Biography />
        <Education />
        <Publications />
        <Experiences />
        <Footer />
    </>

  );
}

