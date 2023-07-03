import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us ' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Company Story' subtitle='Check out our service and work' />

            <p>SSK Civil Works and Services was started on 2015. From past eight years we are good in market.
Constructing best structures with good quality at reasonable price. We are best in
waterproofing by adopting new technologies. At SSK Civil Works and Services, we specialize in providing high-quality and reliable civil works and services to meet your construction and infrastructure needs. With a strong track record of successful projects, we are committed to delivering excellence in every aspect of our work.</p>
            <p> We provide care and respect towards clients and
workers, honesty towards clients, healthy competition in the market, loyalty about
quality and price, transparency in accounts, reputation and value of the profession
and environmental concerns. We offer comprehensive maintenance and repair services for various civil structures, such as buildings, roads, and infrastructure. Our skilled technicians and engineers promptly address any issues, ensuring that your assets remain in optimal condition and minimizing downtime.</p>
            <button className='btn2'><a href='https://www.linkedin.com/in/channabasayya-kulkarni-32812021b' target='_blank' rel='noopener noreferrer'>More About Us</a></button>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default About
