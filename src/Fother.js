import './Fother.css';
import appl from './apple.svg';
import play from './googlepng.parspng.com-5.png';
import ins from './instagram-brands-solid.svg';
import tik from './tiktok-brands-solid.svg';
import you from './youtube-brands-solid.svg';
import fac from './square-facebook-brands-solid.svg';
function Fother(){



return(
<>
<div className='fot'>
<div className='width-fot'>
<div className='fot-out'>
<span className='head-fot'>Shop <br/> 
<span className='top-fot'>Our Story
</span><br/>
<span className='top-fot'>Our Fabrice</span><br/>
<span className='top-fot'>Parsa Retail Stores</span><br/>
<span className='top-fot'>Athletes & Partners
</span><br/>
<span className='top-fot'> First Responders
</span><br/>
<span className='top-fot'>Parsa+ Rewards
</span>
</span><br/>
<span className='head-fot'>How it's Parsa <br/>
<span className='top-fot'>Frequently Asked 

</span><br/>
<span className='top-fot'>Returns & Exchanges
</span><br/>
<span className='top-fot'>Contact Us
</span><br/>
<span className='top-fot'>Careers

</span><br/>
<span className='top-fot'> Corporate Sales

</span>

</span>
<span className='head-fot'>Support<br/>
<span className='top-fot'>Shipping Policies
</span><br/>
<span className='top-fot'>Returns Policy
</span><br/>
<span className='top-fot'>Terms & Conditions
</span><br/>
<span className='top-fot'>Privacy Policy
</span><br/>
<span className='top-fot'>Track My Order
</span>

</span>
<span className='head-fot'>Sections <br/>
<span className='top-fot'>Cookie Policy

</span><br/>

<span className='top-fot'>Do not sell or share my personal information

</span><br/>
<span className='top-fot'>Report Fakes

</span><br/>
<span className='top-fot'>Accessibility

</span>

</span>
<span className='head-fot' id='head-fott'>SAVE UP TO 30% OFF <br/>
<span className='top-fot'> Sign up & save with Parsa Premium Basics</span> <br/>
<span><input type='text' className='input' placeholder='Enter you email address'></input>
 <button className='butn'>SUBMIT</button></span>
</span>
</div>

<div className='logo-svg'>

<img src={appl}></img>
<img src={ins} height='25px'></img>
<img src={fac} height='25px'></img>
<img src={tik} height='25px'></img>
<img src={you} height='25px'></img>
</div>
<div className='select'>
<select>
<option>Germany</option>
<option>Iran</option>
<option>Itali</option>
<option>Usa</option>
<option>Turki</option>
<option>Paris</option>
<option>Qinda</option>
<option>English</option>

</select>

</div>
<div className='top-head'>Copyright © 2024 , Parsa. All Rights Reserved

</div>
</div>

</div>

</>
)



}
export default Fother;