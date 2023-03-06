import React from 'react'

import Articledata from '../.././Components/API-Data/Latestarticle.json';

import Slideimg from '../.././Components/API-Data/imagesslide.json';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Toppost from '../TopPosts/Toppost';
import Footerstories from '../Footerstories/Footerstories';




const Latestarticle = () => {
  return (
    <div>
      <h1 className='article-head'><span className='article-hr-data'>&nbsp;Latest &nbsp;</span> Article</h1>

      <div className='article-main-container'> 
       {Articledata && Articledata.map(({id,url,caption,about,date})=>(
        <div key={id} className='article-img-data'>
       <div>
       <img src={url} alt="" width={300} height={250} className='article-img'/>
       </div>

        <div className='image-information'>
        <h4>{caption}</h4>
        <p className='about-image'>{about}</p>
        <p>Release:{date}</p>
        </div>
      
        </div>
        ))}
       
       </div>

       
    
       <div className='advertaisment'>
        <h1 className='add-head'> Advertaisment</h1>
           
            <div>
                <video src='https://player.vimeo.com/external/188563770.sd.mp4?s=e962246cfa9b99986ca6fdd351f94487d2a9e5fa&profile_id=164&oauth2_token_id=57447761' muted autoPlay loop className='add-one'></video>
            </div>
            <div>
            <video src='https://player.vimeo.com/external/363625327.sd.mp4?s=2c170349e1fb2195661722ba0a29eb9e837ffac7&profile_id=164&oauth2_token_id=57447761' muted loop autoPlay className='add-two'></video>
            </div>
            <div>
            <video src='https://player.vimeo.com/external/222141051.sd.mp4?s=d094b37ff6caa17d3e0eeb835401b21fb47f3082&profile_id=164&oauth2_token_id=57447761' muted loop autoPlay className='add-three'></video>
            </div>
       </div>

    <div className='top-post'>
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

    <button className='article-btn'> <span className='down-arrow'>&#8595;</span> LoadMore</button>


{/* image slideshow */}

    <div className='article-single-img'>
   <Slide>
    {Slideimg && Slideimg.map(({id,url})=>(
      <div key={id}>
        <img src={url} alt="" width={800} height={440}/>
      </div>
      
     
     
    ))}
   </Slide>

    </div>
    <Footerstories/>
    </div>
  )
}

export default Latestarticle
