import React from 'react'

import './styles.scss'


const InfoBlock = ({ content, smallImg }) => (
  <div className='container'>
    <article className='columns '>
      <div className={`column  ${smallImg ? 'is-2 is-offset-1 small-img' : 'is-4'}`}>
          <figure className={`image is-square ${smallImg && 'small-img'}`}>
            <img  src={content.image} className={`${smallImg && 'small-img'}`} alt={content.title}/>
          </figure>
      </div>
      <div className='column is-8 '>
        <div className='content'>
          <h2>{content.title}</h2>
          <ul>
            {content.listitem.map((item, index) => (
              <li key={`info-item-${index}`}>
                {item.title && <h3>{item.title}</h3>}
                <p>{item.text}</p>
                {item.link && <a href={item.link.href}><p>{item.link.text}</p></a>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  </div>
)

export default InfoBlock


