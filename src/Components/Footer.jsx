import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './Footer.css'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-gray-700 to-gray-900 mt-10 rounded-full ml-10 mr-10 flex text-white'>
     <p className='p-4'>all rights reserved</p>
     <div className='flex gap-3 social_icon mt-4 cursor-pointer'>
     <i class="fa-brands fa-twitter"></i>
     <i class="fa-brands fa-instagram"></i>
     <i class="fa-brands fa-facebook"></i> 
     </div>
    
     
      
    </div>
  )
}

export default Footer
