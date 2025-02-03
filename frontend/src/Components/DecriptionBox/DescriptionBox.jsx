import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An E-commerce website is an online platform that facilitates the buying and selling of products and services 
                over the internet. It serves as a virtual market place where individuals can showcase their products, interact
                with customers, and conduct transactions without the need of a physical presence, E-commerce websites have
                gained immense popularity due to their convenience, accesibility and the global reach they offer
            </p>
            <p>
                E-commerce websites typically display products or services along with detailed descriptions, images, prices,
                and any available variations(eg. size,colors). Each product usually has its own dedicated page with relevant information.</p>

        </div>
    </div>
  )
}

export default DescriptionBox