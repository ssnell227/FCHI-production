import React from 'react'
import Slider from 'react-slick'
import './styles.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import leftArrow from '../../../static/icons/arrow-left-thick.png'
import rightArrow from '../../../static/icons/arrow-right-thick.png'

const NextArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, height: '400px' }}
        onClick={onClick}
    >
        <img style={{ position: 'absolute', top: '50%', left: '0px' }} src={rightArrow} alt='next'/>
    </div>
)
const PrevArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, height: '400px' }}
        onClick={onClick}
    >
        <img style={{ position: 'absolute', top: '50%', left: '0px' }} src={leftArrow} alt='previous' />
    </div>
)

const Carousel = ({ content }) => {
    const settings = {
        dots: true,
        className: 'slider',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        fade: true
    }

    return (
        <div className='columns'>

            <div className='column mobile-is-12 is-10 is-offset-1'>
                <Slider {...settings}>
                    <div className='slider-item'>
                        <h2 className=
                            'has-text-weight-bold is-size-4 is-size-2-tablet is-size-1-desktop carousel-text title-1'
                        >{content.carousel1.title}</h2>
                        <p className=' has-text-weight-bold is-size-6 is-size-4-tablet carousel-text text-1 '>{content.carousel1.text}</p>
                        <img src={content.carousel1.image} alt='image of red roofed house in wyoming'/>
                    </div>
                    <div className='slider-item'>
                        <div className='carousel-icon icon-2'>
                            <SearchIcon />
                        </div>
                        <h2 className='has-text-weight-bold has-text-centered is-size-4 is-size-2-tablet is-size-1-desktop carousel-text title-2'>{content.carousel2.title}</h2>
                        <p className='carousel-text has-text-right has-text-weight-bold is-size-6 is-size-5-tablet is-size-4-desktop text-2'>{content.carousel2.text}</p>
                        <img src={content.carousel2.image} alt='image of tools used in home inspection'/>
                    </div>
                    <div className='slider-item'>
                        <div className='carousel-icon icon-3'>
                            <MenuBookIcon/>
                        </div>
                        <h2 className='has-text-weight-bold is-size-4 is-size-2-tablet is-size-1-desktop carousel-text title-3'>{content.carousel3.title}</h2>
                        <p className='has-text-weight-bold is-size-6 is-size-4-tablet carousel-text text-3'>{content.carousel3.text}</p>
                        <img src={content.carousel3.image} alt='image of house in wyoming with mountains in background' />
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default Carousel