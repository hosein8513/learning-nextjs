'use client'
import React from 'react';

const PlaceCom = ({places}) => {
    return (
       <>
       
         <div  className="col-lg-12">
                <div className="item last-item">
                  <div className="row">
                    <div className="col-lg-4 col-sm-5">
                      <div className="image">
                        <img src={`/assets/images/country-0${places.id}.jpg`} alt=""/>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-7">
                      <div className="right-content">
                        <h4 className='text-white'>{places.name}</h4>
                        <span>{places.continent}</span>
                       
                        <p>We hope this WoOx template is useful for you, please support us a <a href="https://paypal.me/templatemo" target="_blank">small amount of PayPal</a> to info [at] templatemo.com for our survival. We really appreciate your contribution.</p>
                        <ul className="info">
                          <li><i className="fa fa-user"></i> {places.population} Mil People</li>
                          <li><i className="fa fa-globe"></i> {places.area} km2</li>
                          <li><i className="fa fa-home"></i> ${places.price}</li>
                        </ul>
                        <div className="text-button">
                          <a href="about.html">Need Directions ? <i className="fa fa-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
       </>
    );
};

export default PlaceCom;