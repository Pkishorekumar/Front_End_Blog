import React from 'react'
import Topdata from '../.././Components/API-Data/Toppostarticle.json'

const Toppost = () => {
  return (
    <div>
      
      <div className='top-post-json'>
       {Topdata && Topdata.map(({topid,topurl,topcaption,topdate})=>(
        <div key={topid}>
        <img src={topurl} alt="" width={100} height={100}/>
        <div className='top-image-data'>
        <h4>{topcaption}</h4>
        
        <p>Release:{topdate}</p>
        </div>
        <hr />
        </div>
        
        ))}
       </div>

    </div>
  )
}

export default Toppost
