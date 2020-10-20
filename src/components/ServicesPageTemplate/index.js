import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import './styles.scss'

import InfoBlock from '../InfoBlock'

const ServicesPageTemplate = ({
    title,
    subtitleTop,
    subtitle,
    meta_title,
    meta_description,
    asbestosBlock,
    homeInspectionBlock,
    leadBlock,
    radonBlock,
    wellWaterBlock,
    pricingBlock,
    titleRef,
    buttonRef
}) => {
    return (
        <div>
            <Helmet>
                <title >{meta_title}</title>
                <meta name='description' content={meta_description} />
            </Helmet>
            <section className="hero services-hero " >
                <div className="hero-body">
                    <div ref={titleRef} className="container box services-title">
                        <h1 className='title is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered '>{title}</h1>
                    </div>
                </div>
            </section>
            <div className='container'>
                <section className='section section--gradient'>
                    <h3 className='subtitle has-text-centered'>{subtitleTop}</h3>
                    <div className='columns'>
                        <div className='column '>
                            <figure className='image is-square'>
                                <img src={homeInspectionBlock[0].image} alt={homeInspectionBlock[0].title} />
                            </figure>
                            <h3 className='subtitle has-text-centered'>{homeInspectionBlock[0].title}</h3>
                            <p className='has-text-centered'>{homeInspectionBlock[0].text}</p>
                        </div>
                        <div className='column '>
                            <figure className='image is-square'>
                                <img src={homeInspectionBlock[1].image} alt={homeInspectionBlock[1].title} />
                            </figure>
                            <h3 className='subtitle has-text-centered'>{homeInspectionBlock[1].title}</h3>
                            <p className='has-text-centered'>{homeInspectionBlock[1].text}</p>
                        </div>
                        <div className='column '>
                            <figure className='image is-square'>
                                <img src={homeInspectionBlock[2].image} alt={homeInspectionBlock[2].title} />
                            </figure>
                            <h3 className='subtitle has-text-centered'>{homeInspectionBlock[2].title}</h3>
                            <p className='has-text-centered'>{homeInspectionBlock[2].text}</p>
                        </div>
                    </div>
                    <div ref={buttonRef} className='level is-mobile'>
                        <div className='level-item ' />
                        <Link to='/services#pricing' className='button is-large is-primary level-item button-left'>Pricing</Link>
                        <div className='level-item' />
                        <StaticQuery query={graphql`
    query scheduleLinkServices  {
        markdownRemark (id: {eq: "21bc2c2b-fb89-5377-a6dc-536d1c46f8bc"}){
          frontmatter {
            schedule_link
          }
        }
      }
        `} render={data => (
                                <a target='__blank' href={data.markdownRemark.frontmatter.schedule_link} className='button is-large is-primary level-item button-right'>Book Now</a>
                            )} />
                        <div className='level-item' />
                    </div>
                </section>
                <div className='content'>
                    <h2 className='title is-1 has-text-centered'>Other Services</h2>
                </div>
                <section className='section section--gradient ' id='asbestos'>
                    <InfoBlock content={asbestosBlock} smallImg={true} />
                </section>
                <section className='section section--gradient ' id='lead'>
                    <InfoBlock content={leadBlock} smallImg={true} />
                </section>
                <section className='section section--gradient' id='radon'>
                    <InfoBlock content={radonBlock} smallImg={true} />
                </section>
                <section className='section section--gradient' id='water'>
                    <InfoBlock content={wellWaterBlock} smallImg={true} />
                </section>
                <section className='section section--gradient' id='pricing'>
                    <h2 className='title is-1 has-text-centered'>{pricingBlock.title}</h2>
                    <div className='columns'>
                        <div className='column'>
                            <div className='section'>
                                <div className=' pricing-card'>
                                    <h3 className='title is-3 has-text-centered'>{pricingBlock.homeInspectionPricing.title}</h3>
                                    <div className='card-content'>
                                        {pricingBlock.homeInspectionPricing.pricing.map((pricingItem, index) => (
                                            <div className='pricing-item' key={`homeInspectionPricing-${index}`}>
                                                <p><strong>{pricingItem.text}</strong>: {pricingItem.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column '>
                            <div className='section'>
                                <div className='pricing-card'>
                                    <h3 className='title is-3 has-text-centered'>{pricingBlock.additionalPricing.title}</h3>
                                    <div className='card-content'>
                                        {pricingBlock.additionalPricing.pricing.map((pricingItem, index) => (
                                            <div className='pricing-item' key={`homeInspectionPricing-${index}`}>
                                                <p><strong>{pricingItem.item}</strong>: {pricingItem.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ServicesPageTemplate