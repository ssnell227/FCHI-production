import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'

import './styles.scss'



import SvgIcon from '@material-ui/core/SvgIcon';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import BuildIcon from '@material-ui/icons/Build';

const AboutPageTemplate = ({
  title,
  aboutBlockItem,
  aboutImage,
  meta_title,
  meta_description,
  titleRef,
  buttonRef
}) => {
  return (
    <div>
      <Helmet>
        <title >{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className="hero about-hero" >
        <div className="hero-body">
          <div ref={titleRef} className="container box about-title">
            <h1 className='title is-1 is-size-2-tablet is-size-3-mobile has-text-centered '>{title}</h1>
          </div>
        </div>
      </section>
      <div className='container'>
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
                      <h2 className='title '>{block.title}</h2>
                      <p className='subtitle '>{block.subtitle}</p>
                    </div>
                    <div className='box'>
                      <p>
                        {block.blurb}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>
        <section className='section section--gradient'>
          <div className='columns'>
            <div className='column'>
              <figure className='image '>
                <img src={aboutImage} alt='Photo of owner, Ryan Morse-Brady' />
              </figure>
            </div>
            <div ref={buttonRef} className='column buttons-container'>
              <Link to='/contact' className='button is-primary is-large about-link'>Contact</Link>
              <StaticQuery query={graphql`
    query scheduleLinkAbout {
      allMarkdownRemark(filter: {frontmatter: {schedule_link: {ne: null}}}) {
        nodes {
          frontmatter {
            schedule_link
          }
        }
      }
    }
        `} render={data => (
                  <a target='__blank' href={data.allMarkdownRemark.nodes[0].frontmatter.schedule_link} className='button is-primary is-large about-link'>Book Now</a>
                )} />            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

export default AboutPageTemplate
