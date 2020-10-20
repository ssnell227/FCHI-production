import React from 'react'
import { Link } from 'gatsby'
import './styles.scss'

const Services = ({ services, servicesRef }) => (
    <div ref={servicesRef} className='section services-section'>
        <div className='content'>
            <h1 className='title is-1 has-text-centered'>Services</h1>
        </div>
        <div className='columns'>
            <div className='column'>
                <Link to='/services'>
                    <div className='card services-card'>
                        <figure className='image is-square'>
                            <img src={services[0].image} alt={services[0].title} />
                        </figure>
                        <h4 className='subtitle has-text-centered' >{services[0].title}</h4>
                    </div>
                </Link>
            </div>
            <div className='column'>
                <Link to='/services#asbestos'>
                    <div className='card services-card'>
                        <figure className='image is-square'>
                            <img src={services[1].image} alt={services[1].title} />
                        </figure>
                        <h4 className='subtitle has-text-centered' >{services[1].title}</h4>
                    </div>
                </Link>

            </div>
            <div className='column '>
                <Link to='/services#lead'>

                    <div className='card services-card'>
                        <figure className='image is-square'>
                            <img src={services[2].image} alt={services[2].title} />
                        </figure>
                        <h4 className='subtitle has-text-centered' >{services[2].title}</h4>
                    </div>
                </Link>
            </div>
            <div className='column '>
                <Link to='/services#radon'>

                    <div className='card services-card'>
                        <figure className='image is-square'>
                            <img src={services[3].image} alt={services[3].title} />
                        </figure>
                        <h4 className='subtitle has-text-centered' >{services[3].title}</h4>
                    </div>
                </Link>
            </div>
            <div className='column '>
                <Link to='/services#water'>
                    <div className='card services-card'>
                        <figure className='image is-square'>
                            <img src={services[4].image} alt={services[4].title} />
                        </figure>
                        <h4 className='subtitle has-text-centered' >{services[4].title}</h4>
                    </div>
                </Link>
            </div>
        </div>
    </div>
)

export default Services