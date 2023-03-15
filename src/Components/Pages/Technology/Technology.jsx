import React from 'react'
import Toppost from '../../TopPosts/Toppost'
// import tech from '../.././API-Data/Technology.json'
import {TechData} from '../.././API-Data/Technology'
// import Pagedata from '../.././API-Data/pages.json'
import { useNavigate } from 'react-router-dom'
import Genericpage from '../../Genericpage'

const Technology = () => {

  const Navigate = useNavigate()
  const handlenav=(id,tech)=>{
    Navigate(`/Details/${id}`,{
      state: {Details : tech}
    })
  }

  return (
    <div>
        <h1 className='Title-one'><span className='page-title'>Tech</span>nology</h1>
  


       {/* <div className='tech-container'>

  

      {tech.map(tech=>(
        <div key={tech.id} className="tech-sun-container">
          <img src={tech.url} alt="" className="tech-img"/>
          <div className='tech-data'>
            <strong className='tech-caption'>{tech.caption}</strong>
            <p className='tech-pera'>{tech.about}</p>
           
          </div>
         <hr className='tech-line'/>
        </div>
      ))}
     
       </div> */}

       <div>
        {TechData.map((tech)=>{
          return(
            <div key={tech.id} onClick={()=>handlenav(tech.id , tech)}>

            <Genericpage
             
             id={tech.id}
             url={tech.url}
             caption={tech.caption}
             about={tech.about}
  
            />
  
          </div>
          )
        })}
       </div>



       <div className='tech-post-page'>
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
    
    
   <div className='tech-page-add'>
   <h3>Advertisement</h3>
  <div>
    <video src="https://player.vimeo.com/external/372335193.sd.mp4?s=80151fa22b2eba81883c8641f2c9e493762c7357&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted width={320} height={180}></video>
  </div>

  <div>
    <video src="https://player.vimeo.com/external/357563488.sd.mp4?s=b1cfbc7c4eb11d8a10dc5dfe36ed63466cb3da61&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted width={380} height={180}></video>
  </div>


   </div>
    </div>
  )
}

export default Technology
