// import React, { Component } from 'react';
import { useState } from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from '../../Components/Pages/Home/Home';
import Bollywood from '../../Components/Pages/Bollywood/Bollywood';
import Technology from '../.././Components/Pages/Technology/Technology';
import Hollywood from '../.././Components/Pages/Hollywood/Hollywood';
import Fitness from '../.././Components/Pages/Fitness/Fitness';
import Food from '../.././Components/Pages/Food/Food';
import Tokyo from '../.././Components/Cardinformation/Tokyo';
import Demon from '../.././Components/Cardinformation/Demon';
import Naruto from '../.././Components/Cardinformation/Naruto';
import Genericinfo from '../.././Components/Genericinfo'
// import Dropdown from 'react-bootstrap/Dropdown';
// import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBContainer,dropdownActive,setDropdownActive } from 'mdb-react-ui-kit';





import React from 'react'

const Router = () => {


  const [funcHidden, setFuncHidden] = useState(true);
  const handlebtn = () => setFuncHidden((current) => !current);
  return (
    <div>
       <BrowserRouter>


<div className="the-siren">
      <div className='the-text'>The</div>
      <div className='siren-text'>Siren</div>
  </div>





<div className='drop-down'>
<div className='media-title'>
<div className='the-media'>The</div>
<div className='media-siren'>Siren</div>
</div>


 <div className='drop-down-menu'>


 <button onClick={handlebtn} className='drop-btn'> <p>_ <br />_ <br />_</p></button>

{!funcHidden? 
<div className='drop-down-list'>

<div onClick={handlebtn}><Link to='/' className='head-text'>Home</Link></div>
<div onClick={handlebtn}> <Link to='/bollywood' className='head-text'>Bollywood</Link></div>
<div onClick={handlebtn}><Link to='/technology' className='head-text'>Technology</Link></div>
<div onClick={handlebtn}><Link to='/hollywood' className='head-text'>Hollywood</Link></div>
<div onClick={handlebtn}><Link to='/fitness' className='head-text'>Fitness</Link></div>
<div onClick={handlebtn}> <Link to='/food' className='head-text'>Food</Link></div>
</div>:null

}

 </div>

</div>







<div className='header'>
  <Link to='/' className='head-text'>Home</Link>
  <Link to='/bollywood' className='head-text'>Bollywood</Link>
  <Link to='/technology' className='head-text'>Technology</Link>
  <Link to='/hollywood' className='head-text'>Hollywood</Link>
  <Link to='/fitness' className='head-text'>Fitness</Link>
  <Link to='/food' className='head-text'>Food</Link>

</div>
<hr />
<Routes>
 
  <Route path='/' element={<Home/>}/>
  <Route path='/bollywood' element={<Bollywood/>}/>
  <Route path='/technology' element={<Technology/>}/>
  <Route path='/hollywood' element={<Hollywood/>}/>
  <Route path='/fitness' element={<Fitness/>}/>
  <Route path='/food' element={<Food/>}/>
  <Route path='/tokyoinfo' element={<Tokyo/>}/>
  <Route path='/narutoinfo' element={<Naruto/>}/>
  <Route path='/demoninfo' element={<Demon/>}/>
  <Route path='/Details/:id' element={<Genericinfo/>}/>
</Routes>

</BrowserRouter>

    </div>
  )
}

export default Router
