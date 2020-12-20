import React, { useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'
import Layout from '../components/Layout'
import CommercialPageTemplate from '../components/CommercialPageTemplate'
import { graphql } from 'gatsby'

import { slideIn, slideOut, slideInRight, slideOutRight, fadeIn, fadeOut } from '../utils/animations'


const CommercialPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
console.log(data)
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
      <CommercialPageTemplate
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
        subtitleLinks={frontmatter.subtitleLinks}
      />
    </Layout>
  )
}

export default CommercialPage

export const commercialPageQuery = graphql`
  query CommercialPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitleTop
        subtitle
        meta_title
        meta_description
        subtitleLinks {
          interNACHI_link
          sampleReportLink
          text
        }
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
            link {
              text
              href
            }
          }
        }
        wellWaterBlock {
          image
          title
          listitem {
            text
            link {
              text
              href
            }
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