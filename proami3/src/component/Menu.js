import React from 'react'
import {Menulist} from './Menulist'
import './Menu.css'
import MenuItem from '../component/MenuItem'

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menutitre'>Nos materials</h1>
      <div className='menulist'>{Menulist.map((menuItem,key)=>{
        return <MenuItem 
        image={menuItem.image} 
        name={menuItem.name} 
        prix={menuItem.prix} />
      })}

      </div>
    </div>
  )
}

export default Menu