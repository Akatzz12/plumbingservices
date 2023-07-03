import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Call us right now...' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Contact Details</h4> <br />
            <h4>SSK Civil Works and Services</h4> <br />
            <p>Channabasayya G.K.</p>
            <p>Proprietor</p>
            <p>9008659165</p>
            <p>channu.kulkarni@gmail.com</p>
            <p>#55, Oppo. Police Station
            Kanakapura Main Road, Kaggalipura, Bangalore-560116</p>
            
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
