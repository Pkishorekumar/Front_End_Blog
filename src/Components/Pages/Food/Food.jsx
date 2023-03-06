import React from 'react'
import Toppost from '../../TopPosts/Toppost';
import food from '../.././API-Data/Food.json'

const Food = () => {
  return (
    <div>
     <h1 className='Title-one'><span className='page-title'>Food</span></h1>

    
     
     <div className='food-container'>
      {food.map(food=>(
        <div key={food.id} className='food-sub-container'>
          <img src={food.url} alt="" className='food-img'/>

          <div className='food-data'>
               <h2 className='food-caption'>{food.caption}</h2>
               <h3 className='food-location'>Location: <br />{food.location}</h3>
               <p className='food-ingrediants'> <strong>Ingrediants:</strong> <br /> {food.ingrediants}</p>
          </div>

        </div>
      ))}
    </div>

       <div className='food-top-post-page'>
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
    
    
   <div className='food-page-add'>
   <h3>Advertisement</h3>
  <div>
    <video src="https://player.vimeo.com/external/397971689.sd.mp4?s=eba98d2b01389d23bdaff27f7122cd1aef9ccca8&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted width={320} height={180}></video>
  </div>

  <div>
    <video src="https://player.vimeo.com/external/606417024.sd.mp4?s=95bf9decb07528f4442537d91011aebe91d08cf4&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted width={380} height={180}></video>
  </div>


   </div>
    </div>
  )
}

export default Food
