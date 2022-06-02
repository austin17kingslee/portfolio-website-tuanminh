import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Taylor Swift',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita error culpa cumque laborum iure reprehenderit optio illum voluptate a debitis est praesentium eius aspernatur perferendis aliquam, harum nihil consequuntur magni.'
  },
  {
    avatar: AVTR2,
    name: 'Taylor Swift',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita error culpa cumque laborum iure reprehenderit optio illum voluptate a debitis est praesentium eius aspernatur perferendis aliquam, harum nihil consequuntur magni.'
  },
  {
    avatar: AVTR3,
    name: 'Taylor Swift',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita error culpa cumque laborum iure reprehenderit optio illum voluptate a debitis est praesentium eius aspernatur perferendis aliquam, harum nihil consequuntur magni.'
  },
  {
    avatar: AVTR4,
    name: 'Taylor Swift',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita error culpa cumque laborum iure reprehenderit optio illum voluptate a debitis est praesentium eius aspernatur perferendis aliquam, harum nihil consequuntur magni.'
  },
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map( ({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default Testimonial