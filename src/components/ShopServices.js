import React from 'react';

const ShopServices = () => {
  return (
    <section className='shop-services section home'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-12'>
            {/* Start Single Service */}
            <div className='single-service'>
              <i className='ti-rocket'></i>
              <h4>Livraison partout</h4>
              <p>au Sénégal</p>
            </div>
            {/* End Single Service */}
          </div>
          <div className='col-lg-3 col-md-6 col-12'>
            {/* Start Single Service */}
            <div className='single-service'>
              <i className='ti-reload'></i>
              <h4>Retour</h4>
              <p>sur 3 jours</p>
            </div>
            {/* End Single Service */}
          </div>
          <div className='col-lg-3 col-md-6 col-12'>
            {/* Start Single Service */}
            <div className='single-service'>
              <i className='ti-lock'></i>
              <h4>Paiement</h4>
              <p>à la livraison</p>
            </div>
            {/* End Single Service */}
          </div>
          <div className='col-lg-3 col-md-6 col-12'>
            {/* Start Single Service */}
            <div className='single-service'>
              <i className='ti-tag'></i>
              <h4>Meilleurs Produits</h4>
              <p>Aux meilleurs prix</p>
            </div>
            {/* End Single Service */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopServices;
