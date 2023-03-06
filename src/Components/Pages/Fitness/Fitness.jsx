import React from 'react'
// import Pagedata from '../.././API-Data/pages.json';
import Toppost from '../../TopPosts/Toppost';
import Fit from '../.././API-Data/Fitness.json'
// import { useState } from 'react';


const Fitness = () => {
      

 

  return (
    <div className='Fitness'>
        <h1 className='Title-one'><span className='page-title'>Fit</span>ness</h1>
    
     


      <div className='fit-container'>
           {Fit.map(Fit=>(
            <div key={Fit.id} className='fit-sub-container'>
             <div>
             <img src={Fit.url} alt=""  className='fit-video'/>
              <h2 className='fit-caption'>{Fit.caption}</h2>

             </div>
             <hr className='fit-hr'/>
            </div>
           ))}
         
      </div>










       <div className='fit-top-post-page'>
       <h1><span className='top-hr-data'>&nbsp;Top&nbsp;</span>Post</h1>
       <div className='top-post-content'>
          <div className='first-one'>
            <img src="https://www.lifewire.com/thmb/bT2vSm9HwIRXITLigRs_9ukIYh8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dragonballz-5a4815110d327a0037d3057f.PNG" alt="" width={350} />
            <strong>Dragon Ball</strong>
            <p>Anime/ <span>1986-1989</span> </p>

          <Toppost/>

          </div>
       </div> 
    </div>
    
    
   <div className='fit-page-add'>
   <h3>Advertisement</h3>
  <div>
    <video src="https://player.vimeo.com/external/433944096.sd.mp4?s=984a46528bccbcda2bee0c17b7f4f5e933788795&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted width={320} height={180}></video>
  </div>

  <div>
    <video src="https://player.vimeo.com/external/403643704.sd.mp4?s=c0397692cd8f29b0d3b8cf5910f8e46f86d1c0bc&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted width={380} height={180}></video>
  </div>


   </div>
    </div>
  )
}

export default Fitness
