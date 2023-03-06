import React from 'react'


import {Link} from 'react-router-dom'
import Lateststories from '../../LatestStories/Lateststories';
import Latestarticle from '../../LatestArticle/Latestarticle';



const Home = () => {
  return (
    <div className='App'>
     
      <div className='content'>
     <div className='big-content'>
         <Link to='/tokyoinfo'><img src='https://wallpapercave.com/dwp1x/wp9159261.jpg' alt="" className='img-tokyo'/></Link>
          <h1 className='tokyo-headone'>Tokyo Revengers</h1>
          <div className='tokyo-data'><span>Anime/</span><span> 2021-04-10</span></div>

     </div>
     <div className='small-content'>
         <div className='small-contentone'>
             <Link to='/narutoinfo'> <img src='https://wallpapercave.com/dwp1x/wp8944510.jpg' alt="" className='img-naruto'/></Link>
             <h1 className='naruto-headone'>Naruto</h1>
             <div className='naruto-data'><span>Anime/</span><span> 2005-09-10</span></div>
         </div>
         <div className='small-contenttwo'>
         <Link to='/demoninfo'><img src='https://wallpapercave.com/dwp1x/wp11860687.png' alt="" className='img-dslayer' width={430}/></Link>
         <h1 className='demon-headone'>Demon Slayer</h1>
             <div className='demon-data'><span>Anime/</span><span> 2021-01-22</span></div>
         </div>
     </div>
   </div>
     <Lateststories/>
    <Latestarticle/>

   

    </div>
  )
}

export default Home
