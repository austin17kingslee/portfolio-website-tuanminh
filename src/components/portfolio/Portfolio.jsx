import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Analysis on Trending Youtube Videos',
    github: 'https://github.com/austin17kingslee/Analyzing-Top-Trending-Youtube-Videos.git',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Transform Facial Expressions Into Emojis',
    github: 'https://github.com/austin17kingslee/Transform-Facial-Expressions-Into-Emojis.git',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Knapsack Problem - Genetic Algorithm',
    github: 'https://github.com/austin17kingslee/Knapsack-Problem-Using-Genetic-Algorithm.git',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Sorting Algorithms Display App',
    github: 'https://github.com/austin17kingslee/Sorting-Algorithms-Display-App.git',
    demo: 'https://dribble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Coffee Shop Website',
    github: 'https://github.com/VinhTongThanh/SE.20212.Group502.git',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'E-commerce Website',
    github: 'https://github.com/theobmgit/e-commerce-webinfosys.git',
    demo: 'https://dribble.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map( ({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta"> 
                  <a href={github} className="btn">Github</a>
                  <a href={demo}className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Portfolio