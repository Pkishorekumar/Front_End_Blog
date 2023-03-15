// import React from 'react'

// import bolly from '../../../.././src/Components/API-Data/Bollywood.json';
// 

// const Bollywood = () => {
//   return (
//     <div>
//      <h1 className='Title-one'><span className='page-title'>Bolly</span>wood</h1>
   
// <div className='bolly-container'>
// {bolly.map(bolly =>(
//     <div key={bolly.id} className="bolly-sub-container">
//    <img src={bolly.url} alt="" className='bolly-img'/>
//    <div className='bolly-data'>
//     <h3 className='bolly-title'>Title:- {bolly.title}</h3>
//     <h4>IMDB:- {bolly.imdb}</h4>
//     <h5>Genre:- {bolly.Genre}</h5>
//     <h6>Release:- {bolly.date}</h6>
//    </div>
 
//     </div>
//   ))}
 
// </div>

    
    
    
 
    // </div>
//   )
// }

// export default Bollywood



import React from 'react'
import { BollywoodData } from '../../API-Data/Bollywood'
import Genericpage from '../.././Genericpage'
import {useNavigate} from 'react-router-dom'
import Toppost from '../../TopPosts/Toppost';


const Bollywood = () => {

const Navigate = useNavigate()
const handlenav=(id,item)=>{
  Navigate(`/Details/${id}`,{
    state: {Details : item}
  })
}

  return (
    <div>
      <h1 className='Title-one'><span className='page-title'>Bolly</span>wood</h1>
   <div>
    {BollywoodData.map((item)=>{
      return(
        <div key={item.id} onClick={()=>handlenav(item.id , item)}>

          <Genericpage
           
          id={item.id}
          url={item.url}
          title={item.title}
          imdb={item.imdb}
          Genre={item.Genre}
          date={item.date}

          />

        </div>
      )
    })}
  </div>
   

  <div className='bolly-top-post-page'>
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
 

  <div className='bolly-page-add'>
   <h3>Advertisement</h3>
  <div>
    <video src="https://player.vimeo.com/external/470786742.sd.mp4?s=e526f03d37500c7295c8ca7065a037f300fb7e03&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted width={320} height={180}></video>
  </div>

  <div>
    <video src="https://player.vimeo.com/external/371511160.sd.mp4?s=900a8526842b669712c2db6dc9e8fa38e8bcf483&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted width={380} height={180}></video>
  </div>


   </div>


    </div>
  )
}

export default Bollywood
