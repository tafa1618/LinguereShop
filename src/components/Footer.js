import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      {/* Footer Top */}
      <div className='footer-top section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-md-6 col-12'>
              {/* Single Widget */}
              <div className='single-footer about'>
                <div className='logo'>
                  <Link to='/'>
                    <h5>Keur Linguère</h5>
                  </Link>
                </div>
                <p className='text'>
                  Nous sommes pour l'innovation, et votre satisfaction est notre
                  raison d'être
                </p>
                <p className='call'>
                  Vous avez une question? vous pouvez nous appeler 24h/24 7j/7
                  <span>
                    <Link to='tel:123456789'>+221781110455</Link>
                  </span>
                </p>
              </div>
              {/* End Single Widget */}
            </div>
            <div className='col-lg-2 col-md-6 col-12'>
              {/* Single Widget */}
              <div className='single-footer links'>
                <h4>Information</h4>
                <ul>
                  <li>
                    <Link to='#'>A propos de nous</Link>
                  </li>

                  <li>
                    <Link to='#'>Termes & Conditions</Link>
                  </li>
                  <li>
                    <Link to='#'>Contacts</Link>
                  </li>
                  <li>
                    <Link to='#'>Aide</Link>
                  </li>
                </ul>
              </div>
              {/* End Single Widget */}
            </div>
            <div className='col-lg-2 col-md-6 col-12'>
              {/* Single Widget */}
              <div className='single-footer links'>
                <h4>Services Clients</h4>
                <ul>
                  <li>
                    <Link to='#'>Méthode de paiement</Link>
                  </li>
                  <li>
                    <Link to='#'>Retourner un produit</Link>
                  </li>

                  <li>
                    <Link to='#'>Livraison</Link>
                  </li>
                </ul>
              </div>
              {/* End Single Widget */}
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              {/* Single Widget */}
              <div className='single-footer social'>
                <h4>Get In Touch</h4>
                {/* Single Widget */}
                <div className='contact'>
                  <ul>
                    <li>Marché Diamagueune .</li>
                    <li>Arrêt Bus Ligne 78</li>
                    <li>service.keurlinguere@gmail.com</li>
                    <li>+221781110455</li>
                  </ul>
                </div>
                {/* End Single Widget */}
                <ul>
                  <li>
                    <a href='https://web.facebook.com/Baana-Baana-110699808088557'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='fa fa-instagram'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='fa fa-twitter'></i>
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </div>
              {/* End Single Widget */}
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top */}
      <div className='copyright'>
        <div className='container'>
          <div className='inner'>
            <div className='row'>
              <div className='col-lg-6 col-12'>
                <div className='left'>
                  <p>
                    Copyright © {year}{' '}
                    <Link to='http://www.wpthemesgrid.com' target='_blank'>
                      made with
                      <i className='fa fa-heart'></i> by Tapha Gaye
                    </Link>{' '}
                    - Tout droits réservés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
