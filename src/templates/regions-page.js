import React, {useRef, useEffect} from 'react'
import {useIntersection} from 'react-use'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import RegionsPageTemplate from '../components/RegionsPageTemplate'

import {fadeIn, fadeOut} from '../utils/animations'

const RegionsPage = ({data}) => {
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
        fadeIn('.regions-title')
      } else {

        fadeOut('.regions-title')
      }
    }, [titleIntersection])
    return (
        <Layout>
            <RegionsPageTemplate
            metaDescription={frontmatter.meta_description}
            metaTitle={frontmatter.meta_title}
            title={frontmatter.title}
            regionsServed={frontmatter.regionsServed}
            regionsList={frontmatter.regionsList}
            titleRef={titleRef}
            />
        </Layout>
    )
}

export default RegionsPage

export const pageQuery = graphql`
query RegionsPage($id: String) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
        meta_description
        meta_title
        title
        regionsServed {
          title
          regionType {
            blurb
            title
          }
        }
        regionsList {
          region {
            areaName
            county
            zipCode
          }
        }
      }
    }
  }

`
