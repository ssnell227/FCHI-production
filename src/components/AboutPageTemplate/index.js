import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

import './styles.scss'

import SvgIcon from '@material-ui/core/SvgIcon';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import BuildIcon from '@material-ui/icons/Build';

const AboutPageTemplate = ({ title, aboutBlockItem, aboutImage }) => {
  return (
    <div className='container'>
      <section class="hero about-hero">
        <div class="hero-body">
          <div class="container">
          <h1 className='title is-1 has-text-centered'>{title}</h1>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='columns is-desktop'>
          {aboutBlockItem.map((block, index) => (
            <div key={`about-block-${index}`} className='column'>
              <div className='box about-block-container'>
                <figure className='large-icon columns is-mobile'>
                  {index === 0 ?
                    <MenuBookIcon className='column' /> :
                    index === 1 ?
                      <SearchIcon className='column' /> :
                      <BuildIcon className='column' />
                  }
                </figure>
                <div className='card-content'>
                  <div className='content has-text-centered about-block-titles'>
                    <p className='title '>{block.title}</p>
                    <p className='subtitle '>{block.subtitle}</p>
                  </div>
                  <div className='box'>
                    {block.blurb}
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
      <section className='section section--gradient'>
        <div className='columns'>
          {/* <div className='column'>
            <figure className='image is-3by4'>
              <img src={aboutImage} alt='Ryan Morse-Brady' />
            </figure>
          </div> */}
          <div className='column buttons-container'>
            <button className='button is-large'>Contact</button>
            <button className='button is-large'>Book Now</button>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

export default AboutPageTemplate
