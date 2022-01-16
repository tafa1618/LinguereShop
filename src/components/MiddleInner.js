import React from 'react';
import { Link } from 'react-router-dom';
const MiddleInner = () => {
  return (
    <div className='middle-inner'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 col-md-2 col-12'>
            {/* Logo */}
            <div className='logo'>
              <Link to='/'>
                <h5>Keur Linguère</h5>
              </Link>
            </div>
            {/*/ End Logo */}
            {/* Search Form */}
            <div className='search-top'>
              <div className='top-search'>
                <Link to='#0'>
                  <i className='ti-search'></i>
                </Link>
              </div>
              {/* Search Form */}
              <div className='search-top'>
                <form className='search-form'>
                  <input
                    type='text'
                    placeholder='Search here...'
                    name='search'
                  />
                  <button value='search' type='submit'>
                    <i className='ti-search'></i>
                  </button>
                </form>
              </div>
              {/*/ End Search Form */}
            </div>
            {/*/ End Search Form */}
            <div className='mobile-nav'></div>
          </div>
          <div className='col-lg-8 col-md-7 col-12'>
            <div className='search-bar-top'>
              <div className='search-bar'>
                <select>
                  <option selected='selected'>All Category</option>
                  <option>Robes</option>
                  <option>Nuisettes</option>
                  <option>Sacs</option>
                  <option>Chaussures</option>
                </select>
                <form>
                  <input
                    name='search'
                    placeholder='Search Products Here.....'
                    type='search'
                  />
                  <button className='btnn'>
                    <i className='ti-search'></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-12'>
            <div className='right-bar'>
              {/* Search Form */}
              <div className='sinlge-bar'>
                <Link to='#' className='single-icon'>
                  <i className='fa fa-heart-o' aria-hidden='true'></i>
                </Link>
              </div>
              <div className='sinlge-bar'>
                <Link to='#' className='single-icon'>
                  <i className='fa fa-user-circle-o' aria-hidden='true'></i>
                </Link>
              </div>
              <div className='sinlge-bar shopping'>
                <Link to='#' className='single-icon'>
                  <i className='ti-bag'></i>{' '}
                  <span className='total-count'>0</span>
                </Link>
                {/* Shopping Item */}
                <div className='shopping-item'>
                  <div className='dropdown-cart-header'>
                    <span>2 Items</span>
                    <Link to='#'>View Cart</Link>
                  </div>
                  <ul className='shopping-list'>
                    <li>
                      <Link to='#' className='remove' title='Remove this item'>
                        <i className='fa fa-remove'></i>
                      </Link>
                      <Link className='cart-img' to='#'>
                        <img src='https://via.placeholder.com/70x70' alt='#' />
                      </Link>
                      <h4>
                        <Link to='#'>Woman Ring</Link>
                      </h4>
                      <p className='quantity'>
                        1x - <span className='amount'>$99.00</span>
                      </p>
                    </li>
                    <li>
                      <Link to='#' className='remove' title='Remove this item'>
                        <i className='fa fa-remove'></i>
                      </Link>
                      <Link className='cart-img' to='#'>
                        <img src='https://via.placeholder.com/70x70' alt='#' />
                      </Link>
                      <h4>
                        <Link to='#'>Woman Necklace</Link>
                      </h4>
                      <p className='quantity'>
                        1x - <span className='amount'>$35.00</span>
                      </p>
                    </li>
                  </ul>
                  <div className='bottom'>
                    <div className='total'>
                      <span>Total</span>
                      <span className='total-amount'>$134.00</span>
                    </div>
                    <Link to='checkout.html' className='btn animate'>
                      Checkout
                    </Link>
                  </div>
                </div>
                {/*/ End Shopping Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleInner;
