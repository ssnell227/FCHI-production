import React, {useEffect, useRef} from 'react'
import {useIntersection} from 'react-use'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Layout from '../components/Layout'

import {slideInRight, slideOutRight} from '../utils/animations'

const AboutPage = ({ data }) => {
  const { markdownRemark: {frontmatter} } = data 

  //title animation
  const titleRef = useRef(null)

    const titleIntersection = useIntersection(titleRef, {
      root: null,
      rootMargin: '0px',
      threshold: .2
    })

    useEffect(() => {
      if (titleIntersection && titleIntersection.intersectionRatio > .2) {
        slideInRight('.about-title')
      } else {
        slideOutRight('.about-title')
      }
    }, [titleIntersection])

    //button animation
    const buttonRef = useRef(null)

    const buttonIntersection = useIntersection(buttonRef, {
      root: null,
      rootMargin: '0px',
      threshold: .2
    })

    useEffect(() => {
      if (buttonIntersection && buttonIntersection.intersectionRatio > .2) {
        slideInRight('.buttons-container')
      } else {
        slideOutRight('.buttons-container')
      }
    }, [buttonIntersection])
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.meta_title}</title>
        <meta name='description' content={frontmatter.meta_description} />
      </Helmet>
      <AboutPageTemplate
        title={frontmatter.title}
        aboutBlockItem={frontmatter.aboutBlockItem}
        aboutImage={frontmatter.aboutImage}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        titleRef={titleRef}
        buttonRef={buttonRef}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        aboutBlockItem {
          blurb
          image
          subtitle
          title
        }
        aboutImage
      }
    }
  }
`
