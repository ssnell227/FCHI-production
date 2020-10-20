import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ContactForm } from '../forms'

import './styles.scss'

const ContactPageTemplate = ({ title, subtitle, meta_title, meta_description }) => {
  return <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className="hero contact-hero" >
      <div className="hero-body">
        <div className="container box contact-title">
          <h1 className='title is-1 is-size-2-tablet is-size-3-mobile has-text-centered '>{title}</h1>
        </div>
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <ContactForm />
      </div>
    </section>
  </div>
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default ContactPageTemplate
