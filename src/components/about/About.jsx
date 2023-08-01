import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About' title='About Us ' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Company Story' subtitle='Check out our service and work' />

            <p> At Pashupati Plumbing Services, we specialize in Water Borewell Drilling to help you discover a reliable and sustainable water source for your residential, commercial, or agricultural needs. Our state-of-the-art drilling equipment, combined with our team's in-depth knowledge, ensures precise and efficient drilling, even in challenging terrains. </p>
            <p> Our plumbing services cater to all your plumbing requirements, from minor repairs to complete system installations. Whether it's fixing leaky faucets, repairing burst pipes, or resolving clogged drains, our experienced plumbers work diligently to resolve issues promptly, saving you time and money. We also offer expert installation and maintenance for water heaters, water filtration systems, toilets, and other plumbing fixtures, ensuring your home or business operates with utmost efficiency.</p>
            <button className='btn2'><a href='https://www.facebook.com/photo/?fbid=350472493882820&set=a.350472483882821' target='_blank' rel='noopener noreferrer'>More About Us</a></button>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default About
