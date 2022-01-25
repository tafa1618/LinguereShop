import React from 'react'
import {Link} from 'react-router-dom' 
import Products from '../data/Products'


const Soutiens = () => {
	const style = {
    width: 350,
    height: 350
  };

	const Nuisettes = Products.filter(p => p.category === 'Nuisette')
	const Robes = Products.filter(p => p.category === 'Robe')
	const Shorts = Products.filter(p => p.category === 'Short')
	const Cosmetiques = Products.filter(p => p.category === 'Cosmétique')
	const Soutiens = Products.filter(p => p.category === 'Soutien')
	const Parfums = Products.filter(p => p.category === 'Parfum')
	
  return (
    <div className="product-area section">
            <div className="container">
				
				<div className="row">
					<div className="col-12">
						<div className="product-info">
							<div className="nav-main">
								{/*<!-- Tab Nav --> */}
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									
									<li className="nav-item"><a className="nav-link " data-toggle="tab" href="#man" role="tab">Nuisettes</a></li>
									<li className="nav-item"><a className="nav-link " data-toggle="tab" href="#women" role="tab">Robes</a></li>
									<li className="nav-item"><a className="nav-link " data-toggle="tab" href="#shorts" role="tab">Shorts</a></li>
									<li className="nav-item"><a className="nav-link " data-toggle="tab" href="#cosmetique" role="tab">Cosmétiques</a></li>
									<li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Soutiens" role="tab">Soutiens</a></li>
									<li className="nav-item"><a className="nav-link " data-toggle="tab" href="#Parfums" role="tab">Parfums</a></li>
									
								</ul>
								{/*<!--/ End Tab Nav -->*/}
							</div>
							<div className="tab-content" id="myTabContent">
								{/*<!-- Start Single Tab -->*/}
								<div className="tab-pane fade " id="man" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											{Nuisettes.map(Product => (
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												
												<div className="single-product">
													<div className="product-img">
														<Link to={`/article/${Product.id}`}>
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
														<h3><Link to={`/article/${Product.id}`}>{Product.name}</Link></h3>
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
								<div className="tab-pane fade " id="women" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											{Robes.map(r =>(

											<div className="col-xl-3 col-lg-4 col-md-4 col-12" key={r.id}>
												<div className="single-product">
													<div className="product-img">
														<Link to={`/article/${r.id}`}>
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
														<h3><Link to={`/article/${r.id}`}>{r.name}</Link></h3>
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
								<div className="tab-pane fade " id="shorts" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											{Shorts.map(s => (

											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to={`/article/${s.id}`}>
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
														<h3><Link to={`/article/${s.id}`}>{s.name} </Link></h3>
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
								<div className="tab-pane fade " id="cosmetique" role="tabpanel">
									<div className="tab-single">
										<div className="row">
												{Cosmetiques.map(c=> (

											<div className="col-xl-3 col-lg-4 col-md-4 col-12" key={c.id}>
												<div className="single-product">
													<div className="product-img">
														<Link to={`/article/${c.id}`}>
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
														<h3><Link to={`/article/${c.id}`}>{c.name}</Link></h3>
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
								<div className="tab-pane fade show active" id="Soutiens" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											{Soutiens.map(ch => (

											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<Link to={`/article/${ch.id}`}>
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
														<h3><Link to={`/article/${ch.id}`}>{ch.name}</Link></h3>
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
								<div className="tab-pane fade " id="Parfums" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											{Parfums.map(sa => (

											<div className="col-xl-3 col-lg-4 col-md-4 col-12" key={sa.id}>
												<div className="single-product">
													<div className="product-img">
														<Link to={`/article/${sa.id}`}>
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
														<h3><Link to={`/article/${sa.id}`}>{sa.name}</Link></h3>
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

export default Soutiens
