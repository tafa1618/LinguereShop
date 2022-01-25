import React from 'react'
import {Link} from 'react-router-dom'

import ShopServices from '../components/ShopServices';




import Robes from './Robes'
import Shorts from './Shorts'

import All from './All'



// import EnVogue from "../Pages/EnVogue"

import Cosmetiques from './Cosmetiques';
import Soutiens from './Soutiens';
import Parfums from './Parfums';
import Topbar from '../components/Topbar';
import MiddleInner from '../components/MiddleInner';
import HeaderInner from '../components/HeaderInner';
import Footer from '../components/Footer';
import Hero from '../components/Hero';



const Home = () => {
	const style = {
    width: 350,
    height: 400,
  };
  const mLeft={
    marginLeft:"40px"
  }

  return (
    <>

     
<header className='header shop'>
        <Topbar />
        <MiddleInner />
        <HeaderInner />
      </header>
      <Hero />
      <section className='small-banner section ' style={mLeft} >
        <div className='container-fluid'>
          <div className='row'>
            {/*<!-- Single Banner  -->*/}
            <div className='col-lg-4 col-md-6 col-12'>
              <div className='single-banner'>
                <img
                  src='https://i.ibb.co/b68TMRd/Whats-App-Image-2021-11-24-at-22-15-37.jpg'
                  alt='#'
                  style={style}
                />
                <div className='content'>
                  <p>Nuisettes</p>

                  <Link to='/nuisettes'>Découvrir</Link>
                </div>
              </div>
            </div>
            {/*<!-- /End Single Banner  -->*/}
            {/*<!-- Single Banner  -->*/}
            <div className='col-lg-4 col-md-6 col-12'>
              <div className='single-banner'>
                <img
                  src='https://i.ibb.co/8gvJdH0/Whats-App-Image-2021-11-24-at-22-15-41-1.jpg'
                  style={style}
                  alt='#'
                />
                <div className='content'>
                  <p>Robes</p>

                  <Link to='/robes'>Acheter</Link>
                </div>
              </div>
            </div>
            {/*<!-- /End Single Banner  -->*/}
            {/*<!-- Single Banner  -->*/}
            <div className='col-lg-4 col-12'>
              <div className='single-banner tab-height'>
                <img
                  src='https://i.ibb.co/CpLbrFn/5.jpg'
                  style={style}
                  alt='#'
                />
                <div className='content'>
                  <p>Robe</p>

                  <Link to='/robes'>Découvrir</Link>
                </div>
              </div>
            </div>
            {/*<!-- /End Single Banner  -->*/}
          </div>
        </div>
      </section>
			<All  />
      
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
			<Footer />
     
      
    </>
  )
}

export default Home
