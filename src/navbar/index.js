import "./styles.scss";
import React, { useState } from 'react'
import BurguerButton from './BurguerButton'

export default function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <nav className="navContainer">
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/">Home</a>
          <a onClick={handleClick} href="/archive">Archive</a>
          <a onClick={handleClick} href="/">News</a>
          <a onClick={handleClick} href="/">About</a>
          <a onClick={handleClick} href="/">Contact</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`initial ${clicked ? ' active' : ''}`}></div>
      </nav>
    </>
  )
}

