import React, { useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'
import Layout from '../components/Layout'
import ServicesPageTemplate from '../components/ServicesPageTemplate'
import { graphql } from 'gatsby'

import { slideIn, slideOut, slideInRight, slideOutRight, fadeIn, fadeOut } from '../utils/animations'


const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  //title animation
  const titleRef = useRef(null)

  const titleIntersection = useIntersection(titleRef, {
    root: null,
    rootMargin: '0px',
    threshold: .2
  })

  useEffect(() => {
    if (titleIntersection && titleIntersection.intersectionRatio > .2) {
      slideIn('.services-title')
    } else {

      slideOut('.services-title')
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
      slideIn('.button-left')
      slideInRight('.button-right')
    } else {
      slideOut('.button-left')
      slideOutRight('.button-right')
    }
  }, [buttonIntersection])
  return (
    <Layout>
      <ServicesPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        subtitleTop={frontmatter.subtitleTop}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        asbestosBlock={frontmatter.asbestosBlock}
        homeInspectionBlock={frontmatter.homeInspectionBlock}
        leadBlock={frontmatter.leadBlock}
        radonBlock={frontmatter.radonBlock}
        wellWaterBlock={frontmatter.wellWaterBlock}
        pricingBlock={frontmatter.pricingBlock}
        titleRef={titleRef}
        buttonRef={buttonRef}
      />
    </Layout>
  )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitleTop
        subtitle
        meta_title
        meta_description
        asbestosBlock {
          image
          title
        }
        homeInspectionBlock {
          image
          text
          title
        }
        asbestosBlock {
          listitem {
            text
          }
          image
          title
        }
        leadBlock {
          image
          title
          listitem {
            text
          }
        }
        radonBlock {
          image
          title
          listitem {
            text
          }
        }
        wellWaterBlock {
          image
          title
          listitem {
            text
          }
        }
        pricingBlock {
          homeInspectionPricing {
            pricing {
              price
              text
            }
            title
          }
          additionalPricing {
            pricing {
              item
              price
            }
            title
          }
          title
        }
      }
    }
  }
`