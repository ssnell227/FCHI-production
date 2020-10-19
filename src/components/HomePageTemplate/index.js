import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Services from '../Services'
import InfoBlock from '../InfoBlock'
import Carousel from '../Carousel'
import GoogleReview from '../GoogleReview'


const HomePageTemplate = ({
  heading,
  description,
  meta_title,
  meta_description,
  carousel,
  whyblock,
  services,
  bookingBanner,
  bookingBannerRef,
  servicesRef,
  googleReviews
}) => (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='section section--gradient'>
        <div className='container'>
          <Carousel content={carousel} />
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    <h2 className='has-text-weight-semibold is-size-2'>
                      {heading}
                    </h2>
                    <p>{description}</p>
                    <Link className='button is-primary' to='/about'>About Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section hero is-primary is-bold' ref={bookingBannerRef}>
        <div className='hero-body'>
          <div className='container booking-banner-content'>
            <h3 className='subtitle'>{bookingBanner}</h3>
            <button className='button is-white is-outlined'>Schedule an Appointment Now</button>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <Services services={services} servicesRef={servicesRef} />
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container '>
          <InfoBlock content={whyblock} imgSize='large' />
        </div>
      </section>
      <section className='section hero is-primary is-bold'>
        <div className='content'>
          <h2 className='title has-text-weight-semibold is-size-2 is-white has-text-centered'>What people are saying about us</h2>
        </div>
        <div className='columns'>
          {googleReviews.map(item => (
            <GoogleReview key={item.node.id} data={item.node} />
          ))}
        </div>
        <div className='content has-text-centered'>
          <a href='https://g.page/fremont-county-home-inspection/review?rc' target="__blank" className='button is-large is-outlined is-white'><img src='/img/googleclear.png' width='50' alt='google icon'/>Leave Us a Review!</a>
        </div>
      </section>
    </div>
  )

HomePageTemplate.propTypes = {
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.array,
  carousel: PropTypes.object,
  whyblock: PropTypes.object,
  services: PropTypes.array
}

export default HomePageTemplate
