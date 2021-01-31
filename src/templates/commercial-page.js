import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import Layout from "../components/Layout";
import CommercialPageTemplate from "../components/CommercialPageTemplate";
import { graphql } from "gatsby";

import {
  slideIn,
  slideOut,
  slideInRight,
  slideOutRight,
  fadeIn,
  fadeOut,
} from "../utils/animations";

const CommercialPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(data);
  //title animation
  const titleRef = useRef(null);

  const titleIntersection = useIntersection(titleRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  useEffect(() => {
    if (titleIntersection && titleIntersection.intersectionRatio > 0.2) {
      slideInRight(".commercial-title");
    } else {
      slideOutRight(".commercial-title");
    }
  }, [titleIntersection]);

  //button animation
  const buttonRef = useRef(null);

  const buttonIntersection = useIntersection(buttonRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  useEffect(() => {
    if (buttonIntersection && buttonIntersection.intersectionRatio > 0.2) {
      slideIn(".button-left");
      slideInRight(".button-right");
    } else {
      slideOut(".button-left");
      slideOutRight(".button-right");
    }
  }, [buttonIntersection]);
  return (
    <Layout>
      <CommercialPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        subtitleTop={frontmatter.subtitleTop}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        asbestosBlock={frontmatter.asbestosBlock}
        commercialInspectionBlock={frontmatter.commercialInspectionBlock}
        leadBlock={frontmatter.leadBlock}
        radonBlock={frontmatter.radonBlock}
        waterAnalysisBlock={frontmatter.waterAnalysisBlock}
        moldBlock={frontmatter.moldBlock}
        clandestineDrugBlock={frontmatter.clandestineDrugBlock}
        airQualityBlock={frontmatter.airQualityBlock}
        pricingBlock={frontmatter.pricingBlock}
        titleRef={titleRef}
        buttonRef={buttonRef}
        subtitleLinks={frontmatter.subtitleLinks}
        commercialSubsection1={frontmatter.commercialSubsection1}
        commercialSubsection2={frontmatter.commercialSubsection2}
        commercialSubsection3={frontmatter.commercialSubsection3}
      />
    </Layout>
  );
};

export default CommercialPage;

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
        commercialInspectionBlock {
          image
          text
          title
        }
        commercialSubsection1 {
          title
          text
        }
        commercialSubsection2 {
          title
          text
        }
        commercialSubsection3 {
          title
          text
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
        clandestineDrugBlock {
          image
          title
          listitem {
            text
          }
        }
        airQualityBlock {
          image
          title
          listitem {
            text
          }
        }
        moldBlock {
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
        waterAnalysisBlock {
          image
          title
          listitem {
            text
          }
        }
        pricingBlock {
          title
        }
      }
    }
  }
`;
