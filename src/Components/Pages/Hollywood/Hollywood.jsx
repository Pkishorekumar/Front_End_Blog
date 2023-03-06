import React from 'react'
import Holly from '../.././API-Data/Hollywood.json';
import Toppost from '../../TopPosts/Toppost';

const Hollywood = () => {
  return (
    <div>
      <h1 className='Title-one'><span className='page-title'>Holly</span>wood</h1>
   
       <div className='holly-continer'>
       {Holly.map(Holly =>(
         <div key={Holly.id} className='Holly-sub-container'>
            
            <img src={Holly.url} alt="" className='bolly-img'/>
          <div className='Holly-data'>
            <h3 className='Holly-title'>Title:- {Holly.title}</h3>
            <h4>IMDB:- {Holly.imdb}</h4>
            <h5>Genre:- {Holly.Genre}</h5>
            <h6>Release:- {Holly.date}</h6>
          </div>
         </div>
       ))}
       </div>


       <div className='Holly-top-post-page'>
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
    
    
   <div className='Holly-page-add'>
   <h3>Advertisement</h3>
  <div>
    <video src="https://player.vimeo.com/external/504794279.sd.mp4?s=e6bb49b50c8c743a8d2f7056f5567c9d599aae74&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted width={380} height={180}></video>
  </div>

  <div>
    <video src="https://player.vimeo.com/external/398019917.sd.mp4?s=2bbbea67989978ce4e2c8a8a5a665282ba5cb002&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted width={380} height={180}></video>
  </div>


   </div>

    </div>
  )
}

export default Hollywood
