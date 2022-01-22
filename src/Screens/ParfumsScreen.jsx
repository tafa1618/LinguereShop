import React from 'react';
import {Link} from 'react-router-dom'
import Parfums from '../Pages/Parfums'
import Topbar from '../components/Topbar'
import MiddleInner from '../components/MiddleInner'
import HeaderInner from '../components/HeaderInner'
import Hero from '../components/Hero'
import ShopServices from '../components/ShopServices'
import Footer from '../components/Footer'




const ParfumsScreen = () => {
  const style = {
    width: 350,
    height: 400
  };

  return (
    <>
     <header className='header shop'>
        <Topbar />
        <MiddleInner />
        <HeaderInner />
      </header>
      <Hero />
      <section className="small-banner section">
		<div className="container-fluid">
			<div className="row">
				{/*<!-- Single Banner  -->*/}
				<div className="col-lg-4 col-md-6 col-12">
					<div className="single-banner">
						<img src="https://i.ibb.co/b68TMRd/Whats-App-Image-2021-11-24-at-22-15-37.jpg" alt="#" style={style}/>
						<div className="content">
							<p>Nuisettes</p>
							
							<Link to="/nuisettes">Découvrir</Link>
						</div>
					</div>
				</div>
				{/*<!-- /End Single Banner  -->*/}
				{/*<!-- Single Banner  -->*/}
				<div className="col-lg-4 col-md-6 col-12">
					<div className="single-banner">
						<img src="https://i.ibb.co/8gvJdH0/Whats-App-Image-2021-11-24-at-22-15-41-1.jpg" style={style} alt="#" />
						<div className="content">
							<p>Robes</p>
							
							<Link to="/robes">Acheter</Link>
						</div>
					</div>
				</div>
				{/*<!-- /End Single Banner  -->*/}
				{/*<!-- Single Banner  -->*/}
				<div className="col-lg-4 col-12">
					<div className="single-banner tab-height">
						<img src="https://i.ibb.co/CpLbrFn/5.jpg" style={style} alt="#" />
						<div className="content">
							<p>Nuisettes</p>
							
							<Link to="#">Découvrir</Link>
						</div>
					</div>
				</div>
				{/*<!-- /End Single Banner  -->*/}
			</div>
		</div>
	</section>
  
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
};

export default ParfumsScreen;
