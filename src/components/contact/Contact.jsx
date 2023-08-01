import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='' title='Contact Us...' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Contact Details</h4> <br />
            <h4>Pashupati Plumbing Services</h4> <br />
            <p>Bilekhan Ray Amat</p>
            <p>Proprietor</p>
            <p>9841303147</p>
            <p>9803558833</p>
            <p>Mulpani </p>
           <p> Kathmandu, Nepal</p>
            
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
