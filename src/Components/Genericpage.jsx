import React from 'react'





const Genericpage = ({id,url,title,imdb,Genre,date,caption,about}) => {
  return (
    <div>
    <div  className='bolly-container'>

     <div className="bolly-sub-container">
    <img src={url} alt="img" className='bolly-img'/>
    <div className='bolly-data'> 
    <h2  className='bolly-title'>{title}</h2>
    <h3>{imdb}</h3>
    <h4>{Genre}</h4>
    <h5>{date}</h5>
    <div className='tech-data'>
      <strong className='tech-caption'>{caption}</strong>
      <p className='tech-pera'>{about}</p>
     
    </div>
    </div>
    
   
   
    </div>
   
  </div> 

 

  {/* <div className='tech-container'>

  <div key={id} className="tech-sun-container"> 
    <img src={url} alt="" className="tech-img"/>
    <div className='tech-data'>
      <strong className='tech-caption'>{caption}</strong>
      <p className='tech-pera'>{about}</p>
     
    </div>
   <hr className='tech-line'/>
  </div>

 </div> */}



    </div>
  )
}

export default Genericpage
