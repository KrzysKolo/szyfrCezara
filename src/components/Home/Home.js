import React, { useState } from 'react';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import './home.scss';

const Home = () => {
  const [szyfrowanie, setSzyfrowanie]=useState(false);
  const [deszyfrowanie, setDeszyfrowanie]=useState(false);
  return (
    <section className="container">
      <div className='container__btn'>
        <NavLink to={'/szyfr'} className="navLink" ><Button title="Szyfrowanie" onClick={()=>setSzyfrowanie(!szyfrowanie)} /></NavLink>
        <NavLink to={'/deszyfr'} className="navLink" ><Button title="Deszyfrowanie" onClick={()=>setDeszyfrowanie(!deszyfrowanie)} /></NavLink>
      </div>
    </section>
  )
}

export default Home;