import React, { useState, useEffect } from 'react'
import './styles.scss'

import StarRateIcon from '@material-ui/icons/StarRate';

const GoogleReview = ({ data: {
    author_name,
    profile_photo_url,
    relative_time_description,
    text,
} }) => {
    const [modalActive, setModalActive] = useState(false)

    // useEffect(() => {
    //     return setModalActive(false)
    // }, [modalActive])

    const toggleModal = state => setModalActive(!state)

    return (
        <div className='column is-6-tablet is-4-desktop is-one-fifth-widescreen'>
            <div onClick={() => toggleModal(modalActive)} className='card review-card'>
                <div className='card-content'>
                    <div className='media'>
                        <div className='media-left'>
                            <figure className='image is-48x48'>
                                <img src={profile_photo_url} alt={author_name} />
                            </figure>
                        </div>
                        <div className='media-content'>
                            <p className='is-size-4 is-size-5-tablet is-size-4-widescreen'>{author_name}</p>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='icon-container'>
                            <figure className='icon is-small star-container'>
                                <StarRateIcon />
                                <StarRateIcon />
                                <StarRateIcon />
                                <StarRateIcon />
                                <StarRateIcon />
                            </figure>
                        </div>
                        <p className='text-container is-size-6'>{text}</p>
                        <br />
                        <time >{relative_time_description}</time>
                    </div>
                </div>
            </div>
            <div className={`modal review-modal ${modalActive && 'is-active'}`}>
                <div onClick={() => toggleModal(modalActive)} className="modal-background"></div>
                <div className='modal-content'>
                    <div className='card'>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-left'>
                                    <figure className='image is-48x48'>
                                        <img src={profile_photo_url} alt={author_name} />
                                    </figure>
                                </div>
                                <div className='media-content'>
                                    <p className='is-size-4 is-size-5-tablet is-size-4-widescreen'>{author_name}</p>
                                </div>
                            </div>
                            <div className='content'>
                                <div className='icon-container'>
                                    <figure className='icon is-small star-container '>
                                        <StarRateIcon />
                                        <StarRateIcon />
                                        <StarRateIcon />
                                        <StarRateIcon />
                                        <StarRateIcon />
                                    </figure>
                                </div>
                                <p className='text-container-modal is-size-6'>{text}</p>
                                <br />
                                <time >{relative_time_description}</time>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => toggleModal(modalActive)} className="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    )
}

export default GoogleReview