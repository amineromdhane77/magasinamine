import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from  '@mui/icons-material/Twitter'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footers'>
        <div className='footersss'>
            <InstagramIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
            <p>&copy;2023 Aminemagasin.com</p>
        </div></div>
  )
}

export default Footer