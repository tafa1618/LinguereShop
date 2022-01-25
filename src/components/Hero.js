import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const mBottom = {
    marginBottom: '-150px',
  };
  return (
    <section className='hero-slider' style={mBottom}>
      {/* Single Slider */}
      <div className='single-slider'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col-lg-9 offset-lg-3 col-12'>
              <div className='text-inner'>
                <div className='row'>
                  <div className='col-lg-7 col-12'>
                    <div className='hero-text'>
                      <h1>
                        Lingeries<span> et divers articles féminins</span>
                      </h1>

                      <div className='button'>
                        <Link to='#' className='btn'>
                          Bon Shopping
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Single Slider */}
    </section>
  );
};

export default Hero;
