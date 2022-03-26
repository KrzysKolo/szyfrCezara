import React, { useState } from 'react';
import Button from './../Button/Button';
import { NavLink } from 'react-router-dom';
import './szyfr.scss';

const Szyfr = () => {
  const [value, setValue] = useState([]);
  const [encryption, setEncryption] = useState([]);
  const [krok, setKrok] = useState("");
  const Encryption = [];
  const backgroundColor = ['#f77474', '#6cb2f7', '#eec58b', '#f25bf7', '#f7f8f9']
  let color = () => {return backgroundColor[Math.floor(Math.random() * backgroundColor.length)]};
  const interpunkcjaASCII = [32, 33, 46, 58, 59, 63];
  const interpunkcjCODE = [" ", "*","[]", "/", "@", "!"]
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }

  const szyfrCezara = () => {
     for (let i=0; i< value.length; i++){
      let code = value.charCodeAt(i)+parseInt(krok);
      while (code > 122 ) {
        code = (code - 122) +96 ;
      }

      Encryption.push(String.fromCharCode(code).toUpperCase())
      console.log(Encryption.join(""))
       }
       setEncryption(Encryption)
       setValue("");
       setKrok("");
      }

  return (
    <>
      <div className='wrapper__szyfr '>
        <div className="wrapper__szyfr-input">
          <label>Wprowadź hasło: </label>
          <input type="text" value={value} onChange={handleChange} placeholder="wprowadź hasło...." />
        </div>
        <div className="wrapper__szyfr-input">
          <label>Podaj krok: </label>
          <input type="text" value={krok} onChange={(e)=> setKrok(e.target.value)} placeholder="wprowadź krok..." />
        </div>
        <div className="wrapper__szyfr-input">
          <NavLink to={'/'} className="navLink" ><Button title="<<" /></NavLink>
          <Button onClick={szyfrCezara} title="Szyfruj" />
        </div>
      </div>
      <div className='wrapper__password'>
        <h3>Twoje hasło po zaszyfrowaniu</h3>
        <div className='wrapper__password-letters'>
          {encryption.map((item, i) => (<div style={{background: `${color()}`}} className='wrapper__password-letters__letter' key={i}>{item}</div>) )}
        </div>
      </div>
    </>
  )
}

export default Szyfr;