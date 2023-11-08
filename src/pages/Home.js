import React from 'react'
import Landingpage from '../components/Landingpage'
import Products from '../components/Products'
import metallica from '../images/Metallica-removebg-preview.png'
import slipknot from '../images/Daco_1823518.png'
import beatles from '../images/t_the-beatles9241-removebg-preview.png'
import misfits from '../images/Misfits-logo-9BD1B66D82-seeklogo.com.png'
export default function Home() {
  return (
    <div>
      <Landingpage/>
      <Products/>
      <div id="popular-bands-container" className="container-fluid ">
        <h3 className="text-center">POPULAR BANDS</h3>
        <div id="bands-images" className='container row'>
            <div className='col-md-3'>
                <a href="https://www.thebeatles.com/">
                    <img  width = {250} src={beatles} alt="loading beatles logo"/>
                </a>
            </div>
            <div className='col-md-3'>
                <a href="https://www.metallica.com/">
                    <img width = {250}  src={metallica} alt="loading metallica logo"/>
                </a>
            </div>
            <div className='col-md-3 mt-5 '>
                <a href="https://www.misfits.com/">
                    <img  width = {250} src={misfits} alt="loading misfits logo"/>
                </a>
            </div>
            <div className='col-md-3 mt-5 '>
                <a href="https://slipknot1.com/">
                    <img width = {250}  src={slipknot} alt="loading slipkont logo" />
                </a>
            </div>
          </div>
    </div>
    </div>
  )
}
