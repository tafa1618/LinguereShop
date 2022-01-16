import React from 'react';
import { Link } from 'react-router-dom';

const HeaderInner = () => {
  const style = {
    width: 225,
    height: 255,
  };
  return (
    <div className='header-inner'>
      <div className='container'>
        <div className='cat-nav-head'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='all-category'>
                <h3 className='cat-heading'>
                  <i className='fa fa-bars' aria-hidden='true'></i>CATEGORIES
                </h3>
                <ul className='main-category'>
                  <li className='main-mega'>
                    <Link to='#'>
                      Meilleures Ventes{' '}
                      <i className='fa fa-angle-right' aria-hidden='true'></i>
                    </Link>
                    <ul className='mega-menu'>
                      <li className='single-menu'>
                        <Link to='#' className='title-link'>
                          Nuisettes
                        </Link>
                        <div className='image'>
                          <img
                            src='https://i.ibb.co/fpCwXYQ/2.jpg'
                            style={style}
                            alt='#'
                          />
                        </div>
                        <div className='inner-link'>
                          <Link to='#'>Robes</Link>
                          <Link to='#'>Robes</Link>
                          <Link to='#'>Robes</Link>
                          <Link to='#'>Robes</Link>
                        </div>
                      </li>
                      <li className='single-menu'>
                        <Link to='#' className='title-link'>
                          Nuisettes
                        </Link>
                        <div className='image'>
                          <img
                            src='https://i.ibb.co/8gvJdH0/Whats-App-Image-2021-11-24-at-22-15-41-1.jpg'
                            style={style}
                            alt='#'
                          />
                        </div>
                        <div className='inner-link'>
                          <Link to='#'>Nuisettee</Link>
                          <Link to='#'>Nuisettee</Link>
                          <Link to='#'>Nuisettee</Link>
                          <Link to='#'>Nuisettee</Link>
                        </div>
                      </li>
                      <li className='single-menu'>
                        <Link to='#' className='title-link'>
                          Sacs
                        </Link>
                        <div className='image'>
                          <img
                            src='https://via.placeholder.com/225x155'
                            style={style}
                            alt='#'
                          />
                        </div>
                        <div className='inner-link'>
                          <Link to='#'>Sacs</Link>
                          <Link to='#'> Sacs</Link>
                          <Link to='#'>Sacs</Link>
                          <Link to='#'>Sacs</Link>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to='#'>Nuisettes</Link>
                  </li>
                  <li>
                    <Link to='#'>Shorts</Link>
                  </li>
                  <li>
                    <Link to='#'>Sacs</Link>
                  </li>
                  <li>
                    <Link to='#'>Robes</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-9 col-12'>
              <div className='menu-area'>
                {/* Main Menu */}
                <nav className='navbar navbar-expand-lg'>
                  <div className='navbar-collapse'>
                    <div className='nav-inner'>
                      <ul className='nav main-menu menu navbar-nav'>
                        <li className='active'>
                          <Link to='#'>Accueil</Link>
                        </li>
                        <li>
                          <Link to='#'>Produits</Link>
                        </li>

                        <li>
                          <Link to='#'>
                            Achat<i className='ti-angle-down'></i>
                            <span className='new'>New</span>
                          </Link>
                          <ul className='dropdown'>
                            <li>
                              <Link to='cart.html'>Panier</Link>
                            </li>
                            <li>
                              <Link to='checkout.html'>Paiement</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to='#'>Pages</Link>
                        </li>
                        <li>
                          <Link to='#'>
                            Blog<i className='ti-angle-down'></i>
                          </Link>
                          <ul className='dropdown'>
                            <li>
                              <Link to='blog-single-sidebar.html'>
                                Blog Single Sidebar
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to='contact.html'>Nous contacter</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                {/*/ End Main Menu */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInner;
