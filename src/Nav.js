import { useState, useEffect } from 'react';
import './App.css';
import Serch from './serch-mood.png'
import { Link } from 'react-router-dom';
import menu from './bars-solid (2).svg';
import Logo from './PARSA_logo_high_res.png';
import Vid from './Vid.mp4';
import user from './user.png';
import bag from './bag.png'
let Navbar = () => {
  let [scrolled, setScrolled] = useState(false);
  let [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    let handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (<>
 <div className='herder-div'>FREE SHIPPING ON ORDERS $75+</div>
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='NavOnwer'>
   <div className='tv-navbar'>
   <div>
   

    <div className='head-d'>
      
<span className='head-a'>
  <a className='a-link'>TOPS</a>
  <a className='a-link'>BOTTOMS</a>
  <a className='a-link'>ACCESSORIES</a>
  <a className='a-link'>OUTERWEAR</a>

</span>
<span className='logo'><img src={Logo}height='69.5px' ></img></span>
<span className='logo-png'>
<img src={bag} height='25px'></img>
<img src={user} height='25px' className='user'></img></span>
</div>

</div>

</div>
</div>
<span className='menu-span'>
            <img
              src={menu}
              height='30px'
              className='menu'
              alt='Menu'
              onClick={() => setMenuOpen(!menuOpen)} 
            />
          </span>
    </nav>
    {menuOpen && ( 
        <div className='dropdown-menu'>
          <a className='dropdown-link'>TOPS</a>
          <a className='dropdown-link'>BOTTOMS</a>
          <a className='dropdown-link'>ACCESSORIES</a>
          <a className='dropdown-link'>OUTERWEAR</a>
          <a className='dropdown-link'>
            <img src={bag} height='20px' alt='Bag' />
          </a>
          <a className='dropdown-link'>
            <img src={user} height='20px' className='user' alt='User' />
          </a>
        </div>
      )}
    <div className='header'>
      <video src={Vid} className='vid' type="video/mp4" autoPlay 
        muted 
        loop  ></video> 
        <span className='span-head'> <input type='text' className='inp' placeholder='Search...'></input>
       
        </span>
    </div>
  </>
  );
};

export default Navbar;
