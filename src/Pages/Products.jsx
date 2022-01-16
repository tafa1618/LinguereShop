import React from 'react'
import {Link} from 'react-router-dom' 

import Products from '../data/Products'

const Electromenager = () => {
	const style = {
    width: 350,
    height: 350
  };

	const Nuisettes = Products.filter(p => p.category === 'Nuisette')
	const Robes = Products.filter(p => p.category === 'Robe')
	const Shorts = Products.filter(p => p.category === 'Short')
	const Cosmetiques = Products.filter(p => p.category === 'Coesmétique')
	const Chaussures = Products.filter(p => p.category === 'Chaussure')
	const Sacs = Products.filter(p => p.category === 'Sacs')
	
  return (
    <div className="product-area section">
            <div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<h2>Nos Produits</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="product-info">
							<div className="nav-main">
								{/*<!-- Tab Nav --> */}
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									
									<li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Nuisettes</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Robes</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#shorts" role="tab">Shorts</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#cosmetique" role="tab">Cosmétiques</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#chaussures" role="tab">Chaussures</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#sacs" role="tab">Sacs</a></li>
									
								</ul>
								{/*<!--/ End Tab Nav -->*/}
							</div>
							<div className="tab-content" id="myTabContent">
								{/*<!-- Start Single Tab -->*/}
								<div className="tab-pane fade show active" id="man" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											{Nuisettes.map(Product => (
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src={Product.image} style={style} alt={Product.name} />
															<img className="hover-img" src={Product.image} style={style}alt={Product.name} />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter Au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">{Product.name}</Link></h3>
														<div className="product-price">
															<span>{Product.price}FCFA</span>
														</div>
													</div>
												</div>
											</div>

											))}
											
								

											
										
								
										</div>
									</div>
								</div>
								{/*<!--/ End Single Tab -->*/}
								{/*<!-- Start Single Tab -->*/}
								<div className="tab-pane fade" id="women" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											{Robes.map(r =>(

											<div className="col-xl-3 col-lg-4 col-md-4 col-12" key={r.id}>
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src={r.image} style={style} alt={r.name}/>
															<img className="hover-img" src={r.image}  style={style} alt={r.name}/>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">{r.name}</Link></h3>
														<div className="product-price">
															<span>{r.price}FCFA</span>
														</div>
													</div>
												</div>
											</div>
											))}
									
										</div>
									</div>
								</div>
								{/*<!--/ End Single Tab -->*/}
								{/*<!-- Start Single Tab -->*/}
								<div className="tab-pane fade" id="shorts" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											{Shorts.map(s => (

											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src={s.image} style={style}alt={s.name}  />
															<img className="hover-img" src={s.image}   style={style}alt={s.name}  />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">{s.name} </Link></h3>
														<div className="product-price">
															<span>{s.price}FCFA</span>
														</div>
													</div>
												</div>
											</div>
											))}
											
										
										</div>
									</div>
								</div>
								{/*<!--/ End Single Tab -->*/}
								{/*<!-- Start Single Tab -->*/}
								<div className="tab-pane fade" id="cosmetique" role="tabpanel">
									<div className="tab-single">
										<div className="row">
												{Cosmetiques.map(c=> (

											<div className="col-xl-3 col-lg-4 col-md-4 col-12" key={c.id}>
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src={c.image}  style={style} alt={c.name} />
															<img className="hover-img" src={c.image} style={style}  alt={c.name} />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">{c.name}</Link></h3>
														<div className="product-price">
															<span>{c.price}FCFA </span>
														</div>
													</div>
												</div>
											</div>
												))}
										

										</div>
									</div>
								</div>
								{/*<!--/ End Single Tab -->*/}
								{/*<!-- Start Single Tab -->*/}
								<div className="tab-pane fade" id="chaussures" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											{Chaussures.map(ch => (

											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src={ch.image} style={style} alt={ch.name} />
															<img className="hover-img" src={ch.image} style={style} alt={ch.name}/>
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">{ch.name}</Link></h3>
														<div className="product-price">
															<span>{ch.price}FCFA </span>
														</div>
													</div>
												</div>
											</div>
											))}
										
										

										</div>
									</div>
								</div>
								{/*<!--/ End Single Tab -->*/}
								{/*<!-- Start Single Tab -->*/}
								<div className="tab-pane fade" id="sacs" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											{Sacs.map(sa => (

											<div className="col-xl-3 col-lg-4 col-md-4 col-12" key={sa.id}>
												<div className="single-product">
													<div className="product-img">
														<Link to="product-details.html">
															<img className="default-img" src={sa.image}   style={style}   alt={sa.name} />
															<img className="hover-img" src={sa.image}   style={style}alt={sa.name} />
														</Link>
														<div className="button-head">
															<div className="product-action">
																<Link data-toggle="modal" data-target="#exampleModal" title="Quick View" to="#"><i className=" ti-eye"></i><span>Acheter</span></Link>
																<Link title="Wishlist" to="#"><i className=" ti-heart "></i><span>Pour plus tard</span></Link>
																
															</div>
															<div className="product-action-2">
																<Link title="Add to cart" to="#">Ajouter au panier</Link>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><Link to="product-details.html">{sa.name}</Link></h3>
														<div className="product-price">
															<span>{sa.price}FCFA </span>
														</div>
													</div>
												</div>
											</div>
											))}
										

										</div>
									</div>
								</div>
								{/*<!--/ End Single Tab -->*/}
								
					
							</div>
						</div>
					</div>
				</div>
            </div>
    </div>
  );
};

export default Electromenager
