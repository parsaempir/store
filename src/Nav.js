import { useState, useEffect } from 'react';
import './App.css';
import Serch from './serch-mood.png'
import { Link } from 'react-router-dom';
import menu from './bars-solid (2).svg';
import Logo from './PARSA_logo_high_res.png';
import Vid from './Vid.mp4'
let Navbar = () => {
  let [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (<>
 <div className='herder-div'></div>
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='NavOnwer'>
   <div className='tv-navbar'>

 <span className='btn'><Link className='link' to='/'>Home</Link>
 <img src={Logo}height='50px'></img>

 <span> <input type='text' className='inp' placeholder='Search for itemms'></input><img src={Serch} className='serch' height='20px'></img></span>

<button>Login</button>
<button>sign up</button>
</span>

<span className='menu-span'><img src={menu} height='30px' className='menu'></img></span>


</div>
</div>
    </nav>
    <div className='header'>
      <video src={Vid} className='vid' type="video/mp4" autoPlay 
        muted 
        loop  ></video>
    </div>
  </>
  );
};

export default Navbar;
