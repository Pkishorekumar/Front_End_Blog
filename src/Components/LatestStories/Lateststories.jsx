import React from 'react'
import Data from '../.././Components/API-Data/Lateststories.json'

const Lateststories = () => {
  return (
    <div>
        <h1 className='stort-head'> <span className='the-hr-line'>&nbsp; The &nbsp;</span> Latest</h1>
       

       <div className='data-main-container'> 
       {Data && Data.map(({storiesid,storiesurl,storiescaption,storiesabout,storiesdate})=>(
        <div key={storiesid} className='data-sub-container'>
        <img src={storiesurl} alt="" width={400} height={250} className='lateststories-img'/>
        <h4>{storiescaption}</h4>
        <p className='latest-story-pera'>{storiesabout}</p>
        <p>{storiesdate}</p>
        </div>
       
        ))}
        
       </div>


       
      {/* </div> */}
    </div>
  )
}

export default Lateststories
