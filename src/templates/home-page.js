import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

import { slideIn, slideOut, fadeIn, fadeOut } from '../utils/animations'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const {allGooglePlacesReview: {edges: googleReviews}} = data
  const bookingBannerRef = useRef(null)
  const servicesRef = useRef(null)

  const randomReviews = (totalReviews) => {
    const randomIndicies = []
    const shuffledRandom = []
    while (randomIndicies.length < 5) {
      const randomIndex = Math.floor(Math.random()* totalReviews.length)
      if (!randomIndicies.includes(randomIndex)) {
        randomIndicies.push(randomIndex)
      }
    }
    totalReviews.filter((item, index) => {
      return randomIndicies.includes(index) ? item : null
    }).forEach(review => Math.round(Math.random) === 1 ? shuffledRandom.push(review) : shuffledRandom.unshift(review))
    return shuffledRandom
  }

//booking banner animation
  const bookingBannerIntersection = useIntersection(bookingBannerRef, {
    root: null,
    rootMargin: '0px',
    threshold: .2
  })

  useEffect(() => {
    if (bookingBannerIntersection && bookingBannerIntersection.intersectionRatio > .2) {
      slideIn('.booking-banner-content')
    } else {
      slideOut('.booking-banner-content')
    }
  }, [bookingBannerIntersection])

  //services animation
  const servicesIntersection = useIntersection(servicesRef, {
    root: null,
    rootMargin: '0px',
    threshold: .2
  })

  useEffect(() => {
    if (servicesIntersection && servicesIntersection.intersectionRatio > .2) {
      fadeIn('.services-section')
    } else {
      fadeOut('.services-section')
    }
  })

  

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
        servicesRef={servicesRef}
        googleReviews={randomReviews(googleReviews)}
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
  allGooglePlacesReview {
    edges {
      node {
        author_name
        id
        profile_photo_url
        rating
        relative_time_description
        text
        time
      }
    }
  }
}
`
