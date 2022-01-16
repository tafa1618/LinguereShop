import React from 'react'
import {Link} from 'react-router-dom'

const Chics = () => {
  return (
    <div className="product-area most-popular section">
        <div className="container">
            <div className="row">
				<div className="col-12">
					<div className="section-title">
						<h2>Produits Chics</h2>
					</div>
				</div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="owl-carousel popular-slider">
						{/* Start Single Product */}
						<div className="single-product">
							<div className="product-img">
								<Link to="product-details.html">
									<img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/unnamed.jpg?fit=500%2C500&ssl=1" alt="#" />
									<img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/unnamed.jpg?fit=500%2C500&ssl=1" alt="#" />
									<span className="out-of-stock">Hot</span>
								</Link>
								<div className="button-head">
									<div className="product-action">
										
										<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Ajouter au panier</span></Link>
										
									</div>
									<div className="product-action-2">
										<Link title="Add to cart" to="#">Ajouter au panier</Link>
									</div>
								</div>
							</div>
							<div className="product-content">
								<h3><Link to="product-details.html">Chaise pour Enfants</Link></h3>
								<div className="product-price">
									<span className="old">25000FCFA</span>
									<span>24000FCFA</span>
								</div>
							</div>
						</div>
						{/* End Single Product */}
						{/* Start Single Product */}
						<div className="single-product">
                            <div className="product-img">
                                <Link to="product-details.html">
                                    <img className="default-img" src="https://i2.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-21-1.jpg?fit=500%2C500&ssl=1" alt="#" />
                                    <img className="hover-img" src="https://i2.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-21-1.jpg?fit=500%2C500&ssl=1" alt="#" />
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
                                <h3><Link to="product-details.html">Moule à gâteau 3 formes</Link></h3>
                                <div className="product-price">
                                    <span>5500FCFA</span>
                                </div>
                            </div>
                        </div>
						{/* End Single Product */}
						{/* Start Single Product */}
						<div className="single-product">
                            <div className="product-img">
                                <Link to="product-details.html">
                                    <img className="default-img" src="https://i2.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/d74304ac-d73e-4c59-bc0f-0f1349435d30.jpg?fit=800%2C800&ssl=1" alt="#" />
                                    <img className="hover-img" src="https://i2.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/d74304ac-d73e-4c59-bc0f-0f1349435d30.jpg?fit=800%2C800&ssl=1" alt="#" />
									<span className="new">New</span>
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
                                <h3><Link to="product-details.html">Nier Dicer Quick 5 en 1</Link></h3>
                                <div className="product-price">
                                    <span>2900FCFA</span>
                                </div>
                            </div>
                        </div>
						{/* End Single Product */}
						{/* Start Single Product */}
						<div className="single-product">
                            <div className="product-img">
                                <Link to="product-details.html">
                                    <img className="default-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2-1.jpg?fit=500%2C500&ssl=1" alt="#" />
                                    <img className="hover-img" src="https://i1.wp.com/www.mondialevaise.com/wp-content/uploads/2021/06/1-2-1.jpg?fit=500%2C500&ssl=1" alt="#" />
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
                                <h3><Link to="product-details.html">Lot de 6 ustensiles de cuisine</Link></h3>
                                <div className="product-price">
                                    <span>2000FCFA</span>
                                </div>
                            </div>
                        </div>
						{/* End Single Product */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chics
