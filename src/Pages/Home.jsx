import React from 'react'

import ShopServices from '../components/ShopServices';




import Robes from './Robes'
import Shorts from './Shorts'
import Nuisettes from './Nuisette'
import All from './All'



// import EnVogue from "../Pages/EnVogue"

import Cosmetiques from './Cosmetiques';
import Soutiens from './Soutiens';
import Parfums from './Parfums';



const Home = () => {

  return (
    <>

     

			<All  />
      <Nuisettes  />
			<Robes />
			<Shorts />
			
			<Cosmetiques />
			<Soutiens />
			<Parfums />

      
      {/* <EnVogue /> */}
      <ShopServices />
			{/* Whattsapp button */}
			<div className="whatsapp">
<a href="https://api.whatsapp.com/send?phone=+221781110455" >    
<i className="fa fa-whatsapp fa-3x fa-spin" aria-hidden="true"></i></a>
                </div>
			{/* Whattsapp button */}
     
      
    </>
  )
}

export default Home
