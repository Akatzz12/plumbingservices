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
              <p>We'll provide budget friendy pumbing services.</p>
            </div>
            
            <button className='btn5'><a href='https://www.facebook.com/photo/?fbid=350472493882820&set=a.350472483882821' target='_blank' rel='noopener noreferrer'>Contact Us</a></button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h3>Do You Need Help With Anything?</h3>

              <p>Plumb with Perfection: Your Reliable Plumbing Partner</p>

            
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
     
    </>
  )
}

export default Footer
