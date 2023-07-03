import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Want to have a word with us?</h1>
              <p>We'll help you develop a budget friendy civil structures.</p>
            </div>
            
            <button className='btn5'><a href='https://www.linkedin.com/in/channabasayya-kulkarni-32812021b' target='_blank' rel='noopener noreferrer'>Contact Us</a></button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.jpg' alt='' />
              <h3>Do You Need Help With Anything?</h3>

              <p>Empowering Communities. Building Excellence. Shaping Progress</p>

            
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span> 2023 SSK Civil Works and Services. Designd By Kapileshwor Ray.</span>
      </div>
    </>
  )
}

export default Footer
