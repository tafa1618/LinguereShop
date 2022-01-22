import React from 'react'
import {Link,useParams } from 'react-router-dom'
import Products from '../data/Products'

import ShopServices from '../components/ShopServices';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import MiddleInner from '../components/MiddleInner';
import HeaderInner from '../components/HeaderInner';
import Hero from '../components/Hero';


const ProductScreen = () => {
  const { id } = useParams()
  const article = Products.find((p)=> p.id === (id))
  

const brand = {
  fontSize: "13px"
}
const body = {
  width: "100%",
}
const actPrice ={
  color: "red",
  fontWeight: 700
}
const about ={
  fontSize: "14px"
}



const fa={
  marginRight: "10px"
}


  return (
    <>
     <header className='header shop'>
        <Topbar />
        <MiddleInner />
        <HeaderInner />
      </header>
      <Hero />
    <div className="container mt-5 mb-5" style={body}>
    <div className="row d-flex justify-content-center">
      
        <div className="col-md-10">
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> <img id="main-image" src={article.image} alt={article.name} width="300" /> </div>
                           
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1"><Link to="/" >Back</Link></span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                            </div>
                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted " style={brand}>Nom</span>
                                <h5 className="text-uppercase">{article.name}</h5>
                                <div className="price d-flex flex-row align-items-center"> <span className="act-price" style={actPrice}><strong>{article.price}</strong>  FCFA</span>
                                   
                                </div>
                            </div>
                            <p className="about" style={about}>{article.description}.</p>
                            {/* <div className="sizes mt-5">
                                <h6 className="text-uppercase">Size</h6> <label className="radio" style={radio}> <input type="radio" name="size" value="S" checked style={input}/> <span style={spaan}>S</span> </label> <label className="radio"style={radio}> <input type="radio" name="size" value="M"style={input} /> <span style={spaan}>M</span> </label> <label className="radio" style={radio}> <input type="radio" name="size" value="L" style={input}/> <span style={spaan}>L</span> </label> <label className="radio" style={radio}> <input type="radio" name="size" value="XL" style={input}/> <span style={spaan}>XL</span> </label> <label className="radio" style={radio}> <input type="radio" name="size" value="XXL" style={input}/> <span style={spaan}>XXL</span> </label>
                            </div> */}
                            <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Ajouter au panier</button> <i className="fa fa-heart text-muted" style={fa}></i> <i className="fa fa-share-alt text-muted" style={fa}></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
	{/* Whattsapp button */}
  <div className="whatsapp">
<a href="https://api.whatsapp.com/send?phone=+221781110455" >    
<i className="fa fa-whatsapp fa-3x fa-spin" aria-hidden="true"></i></a>
                </div>
			{/* Whattsapp button */}
      <ShopServices />
      <Footer />
</>
  )
}

export default ProductScreen
