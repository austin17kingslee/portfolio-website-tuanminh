import React from 'react'
import './About.css'
import MEabout from '../../assets/me-about.jpg'
import {BiAward} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about' >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEabout} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 Years Internship</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>GHTK mentors</small>
            </article>

            <article className='about__card'>
              <AiOutlineProject className='about__icon' />
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>

          <p>
            I am a third year IT student at Hanoi University of Science & Technology. 
            I'm now working as an Web engineer intern for GHKT.
            I play Genshin Impact and listen to Taylor Swift in my free time. 
          </p>

          <a href="#contact" className='btn btn-primary'>Talk To Me</a>
        </div>
      </div>
    </section >
  )
}

export default About