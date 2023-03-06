import React from 'react'
import Footerdata from '../.././Components/API-Data/Footerstories.json'

const Footerstories = () => {
  return (
    <div>
        <div className='Footer-Latest'>
<h1 className='Latestheader'><span className='Latesthead'>&nbsp;Latest&nbsp;</span>Stories</h1>
<div className='The-Latest'>
{Footerdata && Footerdata.map(({footerid,footercaption,footerabout,footerdate}) =>(
 
<div key={footerid} className='footerstories-sub-container'>
  <h4>{footercaption}</h4>
 
  <p className='latest-pera'>{footerabout}</p>
  <p>{footerdate}</p>
</div>

))}

</div>
  
  
<hr />

<button className='footer-btn'>View More <span className='right-arrow'> &#8594;</span></button>
    </div>

    </div>
  )
}

export default Footerstories
