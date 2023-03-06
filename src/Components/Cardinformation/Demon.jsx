import React from 'react'
import Lateststories from '../LatestStories/Lateststories'
// import carddata from '.././API-Data/cardfooter.json';


const Demon = () => {
  return (
    <div>
     <div className='card-container'>
        <h2 className='title'>Demmo Slayer</h2>
        <div className='profile-data'>
          <div className='author'>
            <img src="https://th.bing.com/th/id/OIP.nTK-yAWL01laY6CKjMEq3gHaHa?w=204&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={40} height={40}/>
            <h5 className='Details'>	Koyoharu Gotouge <br />February 15, 2016</h5>
          </div>
          <div className='social-media'>

          <a href="https://www.facebook.com/"><img src="https://th.bing.com/th/id/OIP.bD6otkD2EDUCHCDdXc03-gHaGK?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={35} height={30}/></a>
          <a href="https://twitter.com/i/flow/login"><img src="https://th.bing.com/th/id/OIP.H836RvDYYgQZcZn0TC8qBAAAAA?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={28} height={28}/></a>
          <a href="https://www.instagram.com/"><img src="https://th.bing.com/th/id/OIP.2spOcwGpwKFSn-ZDDhdeIgHaHd?w=186&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={28} height={28}/></a>
          <a href="https://www.instagram.com/"><img src="https://th.bing.com/th/id/OIP.1hX8tUyNC8XTZ8u6BLuGEAHaHa?w=184&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={30} height={30}/></a>
            
          </div>

        </div>
  <img src="https://wallpapercave.com/dwp1x/wp10590693.png" alt="" width={500} className='media-card-img'/>
        <p>
        Demon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba, "Blade of Demon Destruction"[4]) is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in 23 tankōbon volumes.
        </p>
  <img src="https://wallpapercave.com/dwp1x/wp11318532.jpg" alt="" width={500} className='media-card-img'/> <br />
        <p className='tags'>
        <mark>Anime </mark> <mark> Animation </mark> <mark> Demon Slayer</mark> 
        </p>
       <div className='clap'>
        <img src="https://th.bing.com/th/id/OIP.hPrHY47kVkCYcRQMG678WAAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={40} height={40}/> 9.4k
       </div>
       <hr />

       <div className='profile-data'>
          <div className='author'>
            <img src="https://th.bing.com/th/id/OIP.nTK-yAWL01laY6CKjMEq3gHaHa?w=204&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={40} height={40}/>
            <h5 className='Details'>Koyoharu Gotouge <br />February 15, 2016</h5>
          </div>
          <div className='social-media'>

          <a href="https://www.facebook.com/"><img src="https://th.bing.com/th/id/OIP.bD6otkD2EDUCHCDdXc03-gHaGK?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={35} height={30}/></a>
          <a href="https://twitter.com/i/flow/login"><img src="https://th.bing.com/th/id/OIP.H836RvDYYgQZcZn0TC8qBAAAAA?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={28} height={28}/></a>
          <a href="https://www.instagram.com/"><img src="https://th.bing.com/th/id/OIP.2spOcwGpwKFSn-ZDDhdeIgHaHd?w=186&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={28} height={28}/></a>
          <a href="https://www.instagram.com/"><img src="https://th.bing.com/th/id/OIP.1hX8tUyNC8XTZ8u6BLuGEAHaHa?w=184&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={30} height={30}/></a>
            
          </div>

        </div>

        <hr />
     </div>


     <div>
      <h5>More From The Siren</h5>
      <hr />
      
<Lateststories/>
     </div>
    </div>
  )
}

export default Demon
