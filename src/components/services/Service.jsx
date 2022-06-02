import React from 'react'
import './Service.css'
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
    <section id='service'>
      <h5>What I Can Offer</h5>
      <h2>Services</h2>

      <div className='container service__container'>
        <article className="service">
          <div className="service__head">
            <h3>Languege</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>7.5 IELTS (C1 Certificate)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Working knowledge level Korean</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Have years of experience in translation interpretation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>No problem working with foreign clients</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Many projects finished</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Have been studying and practing since freshman year</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Internship at 2 different companies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Familiar with various frameworks</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managing Taylor Swift Vietnam fanpage on Facebook</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Photo and videos editing skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Excellent in essays and presentation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Second prize at the English Debating Presentation finale in HUST ENglish Trial</p>
            </li>
          </ul>
        </article>
      </div>
    </section >
  )
}

export default Service