import React from 'react'
import {Link} from 'react-router-dom'
import Products from '../data/Products'


const Soutiens = () => {
	const Soutiens = Products.filter(p => p.category === 'Soutien')
	const style = {
    width: 350,
    height: 350
  };
  return (
      <>
    <div className="product-area most-popular section">
        <div className="container">
            <div className="row">
							
				<div className="col-12">
					<div className="section-title">
						<h2>Soutiens Gorge et Madona</h2>
					</div>
				</div>
            </div>
            <div className="row">
                <div className="col-12">
									<div className="owl-carousel popular-slider"  >
		
						{/* Start Single Product */}
							{Soutiens.map(nuisette => (
						<div className="single-product" key={nuisette.id}>
                            <div className="product-img">
                                <Link to={`/article/${nuisette.id}`}>
                                    <img className="default-img"  style={style} src={nuisette.image} alt={nuisette.name} />
                                    <img className="hover-img" style={style} src={nuisette.image} alt={nuisette.name}/>
                                </Link>
								<div className="button-head">
									<div className="product-action">
									
										<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
										
									</div>
									<div className="product-action-2">
										<Link title="Add to cart" to="#">Ajouter au panier</Link>
									</div>
								</div>
                            </div>
                            <div className="product-content">
                                <h3><Link to={`/article/${nuisette.id}`}>{nuisette.name}</Link></h3>
                                <div className="product-price">
                                    <span>{nuisette.price}FCFA</span>
                                </div>
                            </div>
                        </div>


))}
{/* End Single Product */}
						</div>
</div>
			
					
					
            </div>
        </div>
    </div>
      </>
  )
}

export default Soutiens
