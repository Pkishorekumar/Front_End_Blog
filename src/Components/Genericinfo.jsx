import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

const Genericinfo = () => {

const Params = useParams()
const Location = useLocation()

console.log("Params:",Params,Location)

  return (
    <div>
    <div  className='card-container'>
         <h1>{Location.state.Details.title}</h1>
         <h3>{Location.state.Details.caption}</h3>
         <img src={Location.state.Details.url} alt="" />
        <h3>{Location.state.Details.date}</h3>
        <h3>{Location.state.Details.imdb}</h3>
        <h3>{Location.state.Details.Genre}</h3>
        <h3>{Location.state.Details.about}</h3>

    </div>
    </div>
  )
}

export default Genericinfo
