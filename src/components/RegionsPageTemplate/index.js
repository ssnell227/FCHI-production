import React from 'react'
import Helmet from 'react-helmet'
import './styles.scss'

import RegionSearch from '../RegionSearch'

const RegionsPageTemplate = ({ 
    metaTitle, 
    metaDescription, 
    title, 
    regionsServed, 
    regionsList,
    titleRef
}) => (
    <div>
        <Helmet>
            <title >{metaTitle}</title>
            <meta name='description' content={metaDescription} />
        </Helmet>
        <section className="hero regions-hero" >
            <div className="hero-body">
                <div ref={titleRef} className="container box regions-title">
                    <h1 className='title is-size-1-desktop is-size-3-tablet is-size-4-mobile has-text-centered '>{title}</h1>
                </div>
            </div>
        </section>
        <div className='container'>
            <section className='section section--gradient'>
                <RegionSearch regionsList={regionsList} />
            </section>
            <section>
                <h2 className='title is-1 has-text-centered'>{regionsServed.title}</h2>
                <div className='columns'>
                    {regionsServed.regionType.map((item, index) => (
                        <div key={`region-${index}`} className='column'>
                            <div className='section'>
                                <div className=' region-card'>
                                    <h3 className='title is-3 has-text-centered'>{item.title}</h3>
                                    <div className='card-content'>
                                        <p>{item.blurb}</p>
                                        <ul className='regions-list'>
                                            {item.title === 'Fremont County' ?
                                                regionsList.filter(regionItem => regionItem.region.county === 'Fremont').map((regionItem, index) => {
                                                    return <li key={`city-${index}`}>
                                                        {regionItem.region.areaName}
                                                    </li>
                                                }) :
                                                [...new Set(regionsList.filter(regionItem => regionItem.region.county !== 'Fremont')
                                                    .flatMap(item => item.region.areaName))]
                                                    .map((regionItem, index) => (
                                                        <li key={`city-${index}`}>
                                                            {regionItem}
                                                        </li>
                                                    ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
)

export default RegionsPageTemplate