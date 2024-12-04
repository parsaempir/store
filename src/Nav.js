import { useState, useEffect } from 'react';
import './App.css';

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
 
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='NavOnwer'>
   <div className='tv-navbar'>
   
 <span className='btn'>
<button>Login</button>
<button>sign up</button></span>
</div>
</div>
    </nav>
    <div className='header'></div>
  </>
  );
};

export default Navbar;
