import React, {useEffect, useRef} from 'react'
import {useIntersection} from 'react-use'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

import {slideIn, slideOut} from '../utils/animations'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const bookingBannerRef = useRef(null)

  const intersection = useIntersection(bookingBannerRef, {
    root: null,
    rootMargin: '0px',
    threshold: .2
})

useEffect(() => {
  if (intersection && intersection.intersectionRatio > .2) {
      slideIn('.booking-banner-content')
  } else {
    slideOut('.booking-banner-content')
  }
}, [intersection])

  return (
    <Layout>
      <HomePageTemplate
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
        carousel={frontmatter.carousel}
        whyblock={frontmatter.whyblock}
        services={frontmatter.services}
        bookingBanner={frontmatter.bookingBanner}
        bookingBannerRef={bookingBannerRef}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
query IndexPage($id: String) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
      meta_title
      meta_description
      heading
      description
      carousel {
        carousel1 {
          image
          text
          title
        }
        carousel2 {
          image
          text
          title
        }
        carousel3 {
          image
          text
          title
        }
      }
      whyblock {
        image
        title
        listitem {
          text
          title
        }
      }
      services {
        image
        title
      }
      bookingBanner
    }
  }
}
`
